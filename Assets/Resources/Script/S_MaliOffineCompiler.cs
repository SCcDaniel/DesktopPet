using System;
using System.Collections;
using System.Diagnostics;
using System.IO;
using UnityEngine;
using Debug = UnityEngine.Debug;

public class ProcessClass
{
    private Process proc;
    /// <summary>
    /// 执行CMD语句
    /// </summary>
    /// <param name="cmd">要执行的CMD命令</param>
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

public class S_MaliOffineCompiler
{
    public enum EShaderType
    {
        Unknow,
        VertexShader,
        PixelShader
    };

    public enum ERenderer
    {
        OpenGLES = 0,
        Vulkan_GLSL =1,
    };

    public enum EEnvironment
    {
        None = 0,
        UE4 = 1,
    };
    public static EEnvironment ShaderEnvironment = EEnvironment.UE4;
    public static bool bOnlySpilling = true;
    public static EShaderType ShaderType = EShaderType.VertexShader;
    public static EShaderType ShaderTypeCache = EShaderType.VertexShader;
    public static ERenderer Renderer = ERenderer.OpenGLES;
    public static string currentCode = "" ;
    public static string ResultOut = "" ;
    public static System.Timers.Timer UpdateTimer;

    public S_MaliOffineCompiler()
    {
        ShaderType = EShaderType.VertexShader;
        Renderer = ERenderer.OpenGLES;
        //
        // UpdateTimer = new System.Timers.Timer();
        // UpdateTimer.AutoReset = true;
        // UpdateTimer.Interval = 1000.0f;
        // UpdateTimer.Enabled = true;
        // UpdateTimer.Elapsed+= AutoExecute;
        //UpdateTimer.Start();
    }

    void AutoExecute(object sender, System.Timers.ElapsedEventArgs e)
    {
        Execute();
        Debug.Log("Auto execute");
    }

    static public void Execute()
    {
        if (GUIUtility.systemCopyBuffer == null)
        {
            S_DialogBox.DialogBox.Say("粘贴板没有内容哦...");
            return;
        }
        //获取粘贴板内容
        //IDataObject clipboardData = Clipboard.GetDataObject();
        //if (clipboardData.GetDataPresent(DataFormats.Text))
        {
            //object obj = clipboardData.GetData(DataFormats.Text);
            //if (obj == null)
            //{
            //    return;
            //}
            //shaderCode = (string)obj;
            
            string shaderCode;
            string shaderCacheFilePath = UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/ShaderCache";
            shaderCode = GUIUtility.systemCopyBuffer;
            
            //当前代码和上传相同,不执行
            if (currentCode.Equals(shaderCode))
            {
                S_DialogBox.DialogBox.Say("我不会处理相同内容的啦...");
                return;
            }
            currentCode = shaderCode;

            //内容太少,不执行
            if ( shaderCode.Length <=20)
            {
                S_DialogBox.DialogBox.Say("你在小看我吗!!内容不对啊!");
                return;
            }
            
            //头部关键字获取判断
            string HeaderStr = shaderCode.Remove(20);
            if (!HeaderStr.Contains("#version ")&& !HeaderStr.Contains("SPIR-V"))
            {
                S_DialogBox.DialogBox.Say("你都复制了些啥呀...");
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
            if (bOnlySpilling)
            {
                string[] arr = result.Split(new string[] { "\n" }, StringSplitOptions.None);
                result = "";
                for (int i = 0; i < arr.Length; i++)
                {
                    //根据空格分割，并去掉多余的空格。
                    if (arr[i].Contains(" variant"))
                    {
                        result += "-------------\n";
                        result += arr[i];
                    }
                    if (arr[i].Contains("Stack spilling"))
                    {
                        if (result.Length <= 1)
                        {
                            result = "-------------\n";
                        }
                        result += arr[i];
                    }
                }
            }

            ResultOut = result;
            if (error.Length > 0)
            {
                ResultOut += "\n";
                ResultOut += error;
                S_DialogBox.DialogBox.Say("好像有错误哦\n" + ResultOut);
            }
            else if ( ResultOut.Length < 10 )
            {
                ResultOut = "没有输出...好像有什么不太对劲，\n可能是参数不对，\n可以把[只显示Spilling]关掉看看详细说明。";
                S_DialogBox.DialogBox.Say(ResultOut);
            }
            else
            {
                S_DialogBox.DialogBox.Say(ResultOut);
            }
        }
        // else
        // {
        //     ResultOut = "无法从粘贴板找到任何文字内容。";
        // }
    }
}
