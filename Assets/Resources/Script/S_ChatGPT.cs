using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;

public class S_ChatGPT : MonoBehaviour
{
    private static string API_KEY = "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"; // 用您的API密钥替换
    private static string API_URL = "https://api.openai.com/v1/chat/completions";
    private bool bFinish = false;
    private void Start()
    {
        //StartCoroutine(SendRequestToChatGpt("Hello, how can I help you?"));
    }

    private void Update()
    {
        if (bFinish)
        {
            Destroy(this);
        }
    }

    public static void SetAPIKey(string key)
    {
        API_KEY = key;
    }

    public static string GetAPIKey()
    {
        return API_KEY;
    }
    
    public static void SetAPIUrl(string url)
    {
        API_URL = url;
    }
    
    public static string GetAPIUrl()
    {
        return API_URL;
    }
    
    public  IEnumerator SendRequestToChatGpt(string prompt)
    {
        string jsonBody = "{\"prompt\":\"" + prompt + "\", \"max_tokens\": 50}";

        using (UnityWebRequest request = new UnityWebRequest(API_URL, "POST"))
        {
            // 设置请求头
            request.SetRequestHeader("Content-Type", "application/json");
            request.SetRequestHeader("Authorization", "Bearer " + API_KEY);

            // 设置请求体
            byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonBody);
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();

            // 发送请求
            yield return request.SendWebRequest();

            // 处理响应
            if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
            {
                string msg = "Error: " + request.error;
                Debug.LogError(msg);
                S_DialogBox.DialogBox.Say(msg);
                bFinish = true;
            }
            else
            {
                string msg = request.downloadHandler.text;
                Debug.Log("Received: " + msg);
                S_DialogBox.DialogBox.Say(msg);
                bFinish = true;
                // 在此处处理API响应，例如解析JSON并显示聊天回复
            }
        }
    }
}

//
// CODE	OVERVIEW
// 401 - Invalid Authentication	
// Cause: Invalid Authentication
// Solution: Ensure the correct API key and requesting organization are being used.
//
//     解释：认证错误，有可能是API key错误
//
// 401 - Incorrect API key provided	
// Cause: The requesting API key is not correct.
//     Solution: Ensure the API key used is correct, clear your browser cache, or generate a new one.
//
//     解释：跟401类似，也是API key的问题
//
// 401 - You must be a member of an organization to use the API	
// Cause: Your account is not part of an organization.
//     Solution: Contact us to get added to a new organization or ask your organization manager to invite you to an organization.
//
//     解释：暂时没遇到此问题
//
// 429 - Rate limit reached for requests	
// Cause: You are sending requests too quickly.
//     Solution: Pace your requests. Read the Rate limit guide.
//
//     解释：每分钟请求次数太多了，免费的每分钟最多20次
//
// 429 - You exceeded your current quota, please check your plan and billing details	
// Cause: You have hit your maximum monthly spend (hard limit) which you can view in the account billing section.
//     Solution: Apply for a quota increase.
//
//     解释：账户里面没钱了
//
// 429 - The engine is currently overloaded, please try again later	
// Cause: Our servers are experiencing high traffic.
//     Solution: Please retry your requests after a brief wait.
//
//     解释：服务器压力过大，稍后重试
//
// 500 - The server had an error while processing your request	
// Cause: Issue on our servers.
//     Solution: Retry your request after a brief wait and contact us if the issue persists. Check the status page.
//
//     解释：服务器发生错误，稍后重试