using System;
using System.Collections;
using System.IO;
using UnityEngine;
using UnityEngine.Networking;
using System.Security.Cryptography;
using System.Text;

public class S_ChatGPT : MonoBehaviour
{
    private static string API_URL = "http://43.163.241.12:5000/chat_gpt";
    private static string TipWord = "请用中文回答：";
    private bool bFinish = false;
    private string miyao = "j2hbbwang";

    private void Start()
    {
        string text = TipWord + S_GlobalParameters.prompt;
        string encryptedText = EncryptStringAES(text, miyao);
        Debug.Log("明文:   " + text);
        Debug.Log("加密信息: " + encryptedText);
        StartCoroutine(SendPromptToServer(encryptedText, (response) =>
        {
            Debug.Log("Response from server: " + response);
            S_DialogBox.DialogBox.Say(response);
        }));
    }
   
    public static string EncryptStringAES(string plainText, string password)
    {
        using (var aes = Aes.Create())
        {
            var key = new Rfc2898DeriveBytes(password, Encoding.UTF8.GetBytes("12345678"), 1000);
            aes.Key = key.GetBytes(aes.KeySize / 8);
            aes.IV = key.GetBytes(aes.BlockSize / 8);
            aes.Padding = PaddingMode.PKCS7;

            using (var encryptor = aes.CreateEncryptor(aes.Key, aes.IV))
            using (var ms = new MemoryStream())
            {
                using (var cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                using (var sw = new StreamWriter(cs))
                {
                    sw.Write(plainText);
                }
                return Convert.ToBase64String(ms.ToArray());
            }
        }
    }
    

    private void Update()
    {
        if (bFinish)
        {
            Destroy(this);
        }
    }

    public static void SetAPIUrl(string url)
    {
        API_URL = url;
    }
    
    public static string GetAPIUrl()
    {
        return API_URL;
    }
    
    public  IEnumerator SendPromptToServer(string prompt, System.Action<string> callback)
    {
        var request = new UnityWebRequest(API_URL, "POST");
        byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes("{\"prompt\": \"" + prompt + "\"}");
        request.uploadHandler = new UploadHandlerRaw(bodyRaw);
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", "application/json");

        yield return request.SendWebRequest();

        if (request.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError("Error while sending request: " + request.error);
        }
        else
        {
            string response = request.downloadHandler.text;
            response = response.Split("Request:")[1];
            callback(response);
        }
    }
    
    // 示例：在Unity中调用此函数以发送请求并处理响应
    public void ExampleUsage()
    {
        string prompt = "Once upon a time...";
        StartCoroutine(SendPromptToServer(prompt, (response) =>
        {
            Debug.Log("Response from server: " + response);
        }));
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