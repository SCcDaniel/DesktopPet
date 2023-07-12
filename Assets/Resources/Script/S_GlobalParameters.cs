using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Timers;
using TMPro;
using UnityEngine;
using Debug = UnityEngine.Debug;

public class S_GlobalParameters : MonoBehaviour
{
    public GameObject HeaderCodeWidget;
    public TMP_InputField HeaderCodeInput;
    //Base
    private float currentTime = 0;

    private void Start()
    {
        HeaderCodeWidget.SetActive(false);
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
