using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Timers;
using UnityEngine;
using Debug = UnityEngine.Debug;

public class S_GlobalParameters : MonoBehaviour
{
    //Malioc
    public void Malioc_EnvironmentDropdown(int optionIndex)
    {
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.ShaderEnvironment = S_MaliOffineCompiler.EEnvironment.UE4;
        }
    }
    public void Malioc_OnlySpillingVisiliable(int bChecked)
    {
        S_MaliOffineCompiler.bOnlySpilling = Convert.ToBoolean(bChecked);
        Debug.Log("[Malioc] Only Spilling :" + bChecked);
    }

    public void Malioc_Renderer(int optionIndex)
    {
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.Renderer = S_MaliOffineCompiler.ERenderer.OpenGLES;
        }
        else if (optionIndex == 1)
        {
            S_MaliOffineCompiler.Renderer = S_MaliOffineCompiler.ERenderer.Vulkan_GLSL;
        }
    }
    
    public void Malioc_ShaderType(int optionIndex)
    {
        if (optionIndex == 0)
        {
            S_MaliOffineCompiler.ShaderType = S_MaliOffineCompiler.EShaderType.VertexShader;
        }
        else if (optionIndex == 1)
        {
            S_MaliOffineCompiler.ShaderType = S_MaliOffineCompiler.EShaderType.PixelShader;
        }
    }
    
    public void Malioc_Execute()
    {
        S_MaliOffineCompiler.Execute();
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
