using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Windows.Forms;
using System.IO;
using System.Drawing;
using System.Timers;
using UnityEngine;
using Debug = UnityEngine.Debug;

public class ProcessClass
{
    private Process proc;
    /// <summary>
    /// 执行CMD语句
    /// </summary>
    /// <param name="cmd">要执行的CMD命令</param>
    /// 
    public ProcessClass()
    {

    }
    public void RunCmd(string cmd ,ref string output , ref string error)
    {
        Process proc = new Process();
        proc.StartInfo.FileName = "cmd.exe";
        proc.StartInfo.CreateNoWindow = true;
        proc.StartInfo.UseShellExecute = false;
        proc.StartInfo.RedirectStandardError = true;
        proc.StartInfo.RedirectStandardInput = true;
        proc.StartInfo.RedirectStandardOutput = true;
        proc.Start();//执行 

        proc.StandardInput.WriteLine(cmd);
        proc.StandardInput.Close();
        output = proc.StandardOutput.ReadToEnd();//获取返回值   
        error = proc.StandardError.ReadToEnd();//获取返回值   
        proc.WaitForExit();//等待程序执行完退出进程   
        proc.Close();//结束
    }
}

public class S_MaliOffineCompiler : MonoBehaviour
{
    enum EShaderType
    {
        Unknow,
        VertexShader,
        PixelShader
    };

    enum ERenderer
    {
        OpenGLES = 0,
        Vulkan_GLSL =1,
    };

    enum EEnvironment
    {
        None = 0,
        UE4 = 1,
    };

    EShaderType ShaderType = EShaderType.VertexShader;
    EShaderType ShaderTypeCache = EShaderType.VertexShader;
    ERenderer Renderer = ERenderer.OpenGLES;
    EEnvironment ShaderEnvironment = EEnvironment.UE4;
    string currentCode;
    string ResultOut;
    System.Timers.Timer UpdateTimer; 
    private void Start()
    {
        UpdateTimer = new System.Timers.Timer();
        UpdateTimer.AutoReset = true;
        UpdateTimer.Interval = 1000.0f;
        UpdateTimer.Enabled = true;
        UpdateTimer.Elapsed+= Execute;
        UpdateTimer.Start();
    }

    public S_MaliOffineCompiler()
    {
        ShaderType = EShaderType.VertexShader;
        Renderer = ERenderer.OpenGLES;
    }

    private void Execute(object sender, System.Timers.ElapsedEventArgs e)
    {
        if (!Clipboard.ContainsText())
        {
            Debug.Log("当前没有文字在粘贴板...");
            return;
        }

        if  (WindowTray.S_WindowTray._notifyIcon == null)
        {
            //后台还未准备好
            return;
        }

        //获取粘贴板内容
        IDataObject clipboardData = Clipboard.GetDataObject();
        if (clipboardData.GetDataPresent(DataFormats.Text))
        {
            string shaderCode;
            string shaderCacheFilePath = UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/ShaderCache";
            object obj = clipboardData.GetData(DataFormats.Text);
            if (obj == null)
            {
                return;
            }
            shaderCode = (string)obj;

            //当前代码和上传相同,不执行
            if (currentCode.Equals(shaderCode))
            {
                return;
            }
            currentCode = shaderCode;

            //内容太少,不执行
            if ( shaderCode.Length <=20)
            {
                return;
            }
            
            //头部关键字获取判断
            string HeaderStr = shaderCode.Remove(30);
            if (!HeaderStr.Contains("#version ")&& !HeaderStr.Contains("SPIR-V"))
            {
                WindowTray.S_WindowTray._notifyIcon.ShowBalloonTip(2500, "", "你都复制了些啥呀...", ToolTipIcon.None);
                return;
            }

            if (ShaderEnvironment == EEnvironment.UE4)
            {
                for (int i = 0; i < shaderCode.Length; i++)
                {
                    if (shaderCode[i] == '\n')
                    {
                        string newLine = "\n" + "#define HLSLCC_DX11ClipSpace 1" + "\n";
                        shaderCode = shaderCode.Insert(i + 1, newLine);
                        break;
                    }
                }
            }

            string cmdString = UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/malioc.exe";

            if (Renderer == ERenderer.OpenGLES)
            {
                switch (ShaderType)
                {
                    case EShaderType.VertexShader:
                        shaderCacheFilePath += ".vert";
                        break;
                    case EShaderType.PixelShader:
                        shaderCacheFilePath += ".frag";
                        break;
                }
            }
            else if (Renderer == ERenderer.Vulkan_GLSL)
            {
                switch (ShaderType)
                {
                    case EShaderType.VertexShader:
                        cmdString += " --vulkan ";
                        shaderCacheFilePath += ".vert";
                        break;
                    case EShaderType.PixelShader:
                        cmdString += " --vulkan ";
                        shaderCacheFilePath += ".frag";
                        break;
                }
            }

            //生成临时shader文件
            FileStream fs = new FileStream(shaderCacheFilePath, FileMode.Create);
            StreamWriter wr = new StreamWriter(fs);
            wr.WriteLine(shaderCode);
            wr.Close();
            //

            cmdString += shaderCacheFilePath;
            ProcessClass proc = new ProcessClass();
            string result = "", error = "";
            proc.RunCmd(cmdString, ref result, ref error);
            //只显示Spilling？
            // if (WindowTray.S_WindowTray.MaliocItem_OnlyShowSpilling.Checked)
            // {
            //     string[] arr = result.Split(new string[] { "\n" }, StringSplitOptions.None);
            //     result = "";
            //     for (int i = 0; i < arr.Length; i++)
            //     {
            //         //根据空格分割，并去掉多余的空格。
            //         if (arr[i].Contains(" variant"))
            //         {
            //             result += "-------------\n";
            //             result += arr[i];
            //         }
            //         if (arr[i].Contains("Stack spilling"))
            //         {
            //             if (result.Length <= 1)
            //             {
            //                 result = "-------------\n";
            //             }
            //             result += arr[i];
            //         }
            //     }
            // }

            ResultOut = result;
            if (error.Length > 0)
            {
                ResultOut += "\n";
                ResultOut += error;
                WindowTray.S_WindowTray._notifyIcon.ShowBalloonTip(5000, "有错误哦", ResultOut, ToolTipIcon.Warning);
            }
            else if ( ResultOut.Length < 10 )
            {
                ResultOut = "没有输出...好像有什么不太对劲，\n可能是参数不对，\n可以把[只显示Spilling]关掉看看详细说明。";
                WindowTray.S_WindowTray._notifyIcon.ShowBalloonTip(2500, "???", ResultOut, ToolTipIcon.Warning);
            }
            else
            {
                WindowTray.S_WindowTray._notifyIcon.ShowBalloonTip(5000, "结果", ResultOut, ToolTipIcon.Info);
            }
        }
        else
        {
            ResultOut = "无法从粘贴板找到任何文字内容。";
        }
    }
}
