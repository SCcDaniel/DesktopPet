using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Timers;
using TMPro;
using UnityEngine;
using UnityEngine.Networking;
using Debug = UnityEngine.Debug;
public struct  ChatContext
{
    public string ask;
    public string gpt;
}
public class S_GlobalParameters : MonoBehaviour
{
    public GameObject HeaderCodeWidget;
    public TMP_InputField HeaderCodeInput;
    //Base
    private float currentTime = 0;
    //chatgpt
    public static string prompt = "你好呀";
    //上下文保存:
    public static List<ChatContext> promptContext =new List<ChatContext>();
    
    public bool bEnableGptActive = false;
    public GameObject GptObject;
    private void Start()
    {
        HeaderCodeWidget.SetActive(false);
        GptObject.SetActive(bEnableGptActive);
    }

    private void Update()
    {
        currentTime += Time.deltaTime;
        if (currentTime >= 1.5f && S_MaliOffineCompiler.MaliocAutoExecute)
        {
            S_MaliOffineCompiler.ExecuteAsync();
            currentTime = 0.0f;
        }
    }

    public void HeadCodeSupplement()
    {
        if (HeaderCodeWidget)
        {
            HeaderCodeWidget.SetActive(true);
            if (HeaderCodeInput)
            {
                StreamReader reader = new StreamReader(S_MaliOffineCompiler.HeaderCodeFilePath);
                HeaderCodeInput.text = reader.ReadToEnd();
                reader.Close();
            }
        }
    }

    public void HeadCodeEnter()
    {
        StreamWriter writer = new StreamWriter(S_MaliOffineCompiler.HeaderCodeFilePath);
        writer.Write(HeaderCodeInput.text);
        HeaderCodeWidget.SetActive(false);
        writer.Close();
    }

    // public void SetGptAppellation(string url)
    // {
    //     S_ChatGPT.SetAPIUrl(url);
    // }

    public void ActiveChatGpt()
    {
        if (!bEnableGptActive)
        {
            bEnableGptActive = true;
            GptObject.SetActive(bEnableGptActive);
        }
        else
        {
            bEnableGptActive = false;
            GptObject.SetActive(bEnableGptActive);
        }
    }

    public void SendMsgToChatGPT(string inMsg)
    {
        //GameObject gpt = new GameObject("Chat");
        prompt = inMsg;
        this.gameObject.AddComponent<S_ChatGPT>();
        // string jsonBody = "{\"prompt\":\"" + inMsg + "\", \"max_tokens\": 50}";
        // using (UnityWebRequest request = new UnityWebRequest(S_ChatGPT.GetAPIUrl(), "POST"))
        // {
        //     // 设置请求头
        //     request.SetRequestHeader("Content-Type", "application/json");
        //     request.SetRequestHeader("Authorization", "Bearer " + S_ChatGPT.GetAPIKey());
        //
        //     // 设置请求体
        //     byte[] bodyRaw = System.Text.Encoding.UTF8.GetBytes(jsonBody);
        //     request.uploadHandler = new UploadHandlerRaw(bodyRaw);
        //     request.downloadHandler = new DownloadHandlerBuffer();
        //
        //     // 发送请求
        //     yield return request.SendWebRequest();
        //
        //     // 处理响应
        //     if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
        //     {
        //         string msg = "Error: " + request.error;
        //         Debug.LogError(msg);
        //         S_DialogBox.DialogBox.Say(msg);
        //     }
        //     else
        //     {
        //         string msg = request.downloadHandler.text;
        //         Debug.Log("Received: " + msg);
        //         S_DialogBox.DialogBox.Say(msg);
        //         // 在此处处理API响应，例如解析JSON并显示聊天回复
        //     }
        // }
    }

    //Malioc
    public void Malioc_OnlySpillingVisiliable(int bChecked)
    {
        S_MaliOffineCompiler.bOnlySpilling = Convert.ToBoolean(bChecked);
        S_MaliOffineCompiler.currentCode = "";
        Debug.Log("[Malioc] Only Spilling :" + bChecked);
    }

    public void Malioc_Renderer(int optionIndex)
    {
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.Renderer = S_MaliOffineCompiler.ERenderer.OpenGLES;
            Debug.Log("[Malioc] Renderer : OpenGLES");
        }
        else if (optionIndex == 1)
        {
            S_MaliOffineCompiler.Renderer = S_MaliOffineCompiler.ERenderer.Vulkan_GLSL;
            Debug.Log("[Malioc] Renderer : Vulkan_GLSL");
        }
        S_MaliOffineCompiler.currentCode = "";
    }
    
    public void Malioc_ShaderType(int optionIndex)
    {
        S_MaliOffineCompiler.currentCode = "";
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.ShaderType = S_MaliOffineCompiler.EShaderType.VertexShader;
            Debug.Log("[Malioc] ShaderType : VertexShader");
        }
        else if (optionIndex == 1)
        {
            S_MaliOffineCompiler.ShaderType = S_MaliOffineCompiler.EShaderType.PixelShader;
            Debug.Log("[Malioc] ShaderType : PixelShader");
        }
    }
    
    public void Malioc_EnableAutoExecute(int bChecked)
    {
        S_MaliOffineCompiler.currentCode = "";
        S_MaliOffineCompiler.MaliocAutoExecute =  Convert.ToBoolean(bChecked);
        Debug.Log("[Malioc] Enable Auto Execute :" + bChecked);
    }
    
    public void Malioc_Execute()
    {
        S_MaliOffineCompiler.ExecuteAsyncFocus();
    }

    //Unity Speech
    private static bool bStartCallCharacter = false;
    private Timer timeOut;
    
    void SetCallCharacterTimer()
    {
        if (timeOut!=null)
        {
            timeOut.Stop();
        }
        else
        {
            timeOut = new Timer(10000);
            timeOut.Elapsed += (sender, args) =>
            {
                bStartCallCharacter = false;
                Debug.Log("呼叫角色结束了!");
            };
            timeOut.Enabled = true;
            timeOut.AutoReset = false;
        }
        //10秒内没听到内容就结束
        timeOut.Start();
    }

    public void Speech_StopCallCharacter()
    {
        if (timeOut!=null)
        {
            timeOut.Stop();
        }
        bStartCallCharacter = false;
        Debug.Log("呼叫角色结束了!");
    }

    public void Speech_CallCharacter()
    {
        bStartCallCharacter = true;
        SetCallCharacterTimer();
        Debug.Log("呼叫角色!");
    }

    public void Speech_OpenExplorer()
    {
        if (bStartCallCharacter)
        {
            Process proc = new Process();
            proc.StartInfo.FileName = "Explorer.exe";
            proc.StartInfo.CreateNoWindow = true;
            proc.StartInfo.UseShellExecute = false;
            proc.Start();//执行 
            SetCallCharacterTimer();
        }
    }

}
