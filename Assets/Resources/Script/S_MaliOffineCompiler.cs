using System;
using System.Collections;
using System.Diagnostics;
using System.IO;
using System.Threading;
using Unity.Collections;
using UnityEngine;
using Debug = UnityEngine.Debug;
using System.Threading;
using System.Windows.Forms;

public class ProcessClass
{
    private Process proc;
    public void RunCmd(string cmd ,ref string output , ref string error)
    {
        Process proc = new Process();
        proc.StartInfo.FileName = "cmd.exe";
        proc.StartInfo.CreateNoWindow = true;
        proc.StartInfo.UseShellExecute = false;
        proc.StartInfo.RedirectStandardError = true;
        proc.StartInfo.RedirectStandardInput = true;
        proc.StartInfo.RedirectStandardOutput = true;
        proc.StartInfo.StandardOutputEncoding = System.Text.Encoding.GetEncoding(65001);
        proc.Start();//执行
        proc.StandardInput.WriteLine("chcp 65001");
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
    public static ProcessClass proc = new ProcessClass();
    public static bool bOnlySpilling = true;
    public static EShaderType ShaderType = EShaderType.VertexShader;
    public static EShaderType ShaderTypeCache = EShaderType.VertexShader;
    public static ERenderer Renderer = ERenderer.OpenGLES;
    public static string currentCode = "" ;
    public static string ResultOut = "" ;
    public static System.Timers.Timer UpdateTimer;
    public static bool MaliocAutoExecute = false;
    private static S_Timer asyncCallbackTimer;
    public static string HeaderCodeFilePath = UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/HeaderCode.txt";
    //public static string shaderCode;
    public S_MaliOffineCompiler()
    {
        ShaderType = EShaderType.VertexShader;
        Renderer = ERenderer.OpenGLES;
        //
    }

    static public void ExecuteAsyncFocus()
    {
        Thread execThread = new Thread(ExecuteThreadRunFocus);
        execThread.Start();
        S_Character.character.Smile();
    }
    static private void ExecuteThreadRunFocus()
    {
        Execute(true);
    }
    
    static public void ExecuteAsync()
    {
        Thread execThread = new Thread(ExecuteThreadRun);
        execThread.Start();
        S_Character.character.Smile();
    }
    static private void ExecuteThreadRun()
    {
        Execute();
    }

    static private void Execute(bool focus = false)
    {
        try
        {
            //if (GUIUtility.systemCopyBuffer == null)
            if(!Clipboard.ContainsText())
            {
                S_DialogBox.DialogBox.SayAsync("粘贴板没有文字内容哦...");
                return;
            }
            //获取粘贴板内容
            string shaderCode = "";
            if(Clipboard.ContainsText())
                //IDataObject clipboardData = Clipboard.GetDataObject();
           
            //if (clipboardData != null && clipboardData.GetDataPresent(DataFormats.Text))
            {
                shaderCode =  Clipboard.GetText();
                //object obj = clipboardData.GetData(DataFormats.Text);
                //if (obj == null)
                //{
                //   return;
                //}
                //shaderCode = (string)obj;
                if (!focus)
                {
                    if (S_DialogBox.DialogBox.CopyStateString.Contains(shaderCode))
                    {
                        return;
                    }
                    else
                    {
                        S_DialogBox.DialogBox.CopyStateString = "";
                    }
                }
                
                string shaderCacheFilePath =UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/ShaderCache/ShaderCache";

                if (!focus)
                {
                    //当前代码和上传相同,不执行
                    if (currentCode.Equals(shaderCode))
                    {
                        //S_DialogBox.DialogBox.SayAsync("我不会处理相同内容的啦...");
                        S_DialogBox.DialogBox.SayAsync(ResultOut , 1000000.0f);
                        return;
                    }
                }

                currentCode = shaderCode;

                //内容太少,不执行
                if ( shaderCode.Length <=20)
                {
                    ResultOut = "你在小看我吗!!内容不对啊!";
                    S_DialogBox.DialogBox.SayAsync(ResultOut, 20000);
                    return;
                }
                
                // //头部关键字获取判断
                // string HeaderStr = shaderCode.Remove(20);
                // if (!HeaderStr.Contains("#version ")&& !HeaderStr.Contains("SPIR-V"))
                // {
                //     S_DialogBox.DialogBox.SayAsync("你都复制了些啥呀...我不懂欸..." , 6000);
                //     return;
                // }

                //#define HLSLCC_DX11ClipSpace 1
                StreamReader headerCodeReader = new StreamReader(HeaderCodeFilePath);
                string headerCode = "";
                string content = headerCodeReader.ReadLine();
                while (content != null)
                {
                    headerCode += content + "\n";
                    content = headerCodeReader.ReadLine();
                }

                string[] sss = shaderCode.Split("\n");
                shaderCode = "";
                for (int i = 0; i < sss.Length; i++)
                {
                    shaderCode += sss[i] + "\n";
                    if(sss[i].Contains("#version"))
                        shaderCode += "\n" +headerCode + "\n";
                }
                headerCodeReader.Close();
                string cmdString = UnityEngine.Application.streamingAssetsPath + "/Mali_offine_compiler/Plugins/malioc.exe";
                string shaderCacheFile = shaderCacheFilePath;
                if (Renderer == ERenderer.OpenGLES)
                {
                    switch (ShaderType)
                    {
                        case EShaderType.VertexShader:
                            shaderCacheFile += ".vert";
                            break;
                        case EShaderType.PixelShader:
                            shaderCacheFile += ".frag";
                            break;
                    }
                }
                else if (Renderer == ERenderer.Vulkan_GLSL)
                {
                    switch (ShaderType)
                    {
                        case EShaderType.VertexShader:
                            cmdString += " --vulkan ";
                            shaderCacheFile += ".vert";
                            break;
                        case EShaderType.PixelShader:
                            cmdString += " --vulkan ";
                            shaderCacheFile += ".frag";
                            break;
                    }
                }

                //生成临时shader文件
                FileStream fs = new FileStream(shaderCacheFile, FileMode.Create);
                StreamWriter wr = new StreamWriter(fs);
                wr.WriteLine(shaderCode);
                wr.Close();
                //
                
                cmdString += " "+ shaderCacheFile;
                string result = "", error = "";
                proc.RunCmd(cmdString, ref result, ref error);
            
                //只显示Spilling？
                string onlyResult = "";
                string qingxu = "";
                {
                    string[] arr = result.Split(new string[] { "\n" }, StringSplitOptions.None);
                    //result = "";
                    for (int i = 0; i < arr.Length; i++)
                    {
                        //根据空格分割，并去掉多余的空格。
                        if (arr[i].Contains(" variant"))
                        {
                            onlyResult += "-------------\n";
                            onlyResult += arr[i];
                        }
                        if (arr[i].Contains("Stack spilling:"))
                        {
                            if (onlyResult.Length <= 1)
                            {
                                onlyResult = "-------------\n";
                            }
                            onlyResult += arr[i];
                            {
                                string []onlyss = arr[i].Split(":");
                                if (onlyss[1].Contains("false"))
                                {
                                    qingxu = "你别高兴太早!!";
                                }
                                else
                                {
                                    qingxu = "再加把劲呗?";
                                }
                            }
                        }
                    }
                }
                
                if (bOnlySpilling)
                    ResultOut =  qingxu +"\n"+ onlyResult;
                else
                {
                    ResultOut =  result;
                }
                
                if (error.Length > 0 || ResultOut.Contains("ERROR",StringComparison.InvariantCultureIgnoreCase))
                {
                    if(ResultOut.Length > 0)
                        ResultOut += "\n";
                    ResultOut += error;
                    ResultOut = "好像有错误哦\n" + ResultOut;
                    S_DialogBox.DialogBox.SayAsync( ResultOut,1000000.0f);
                    currentCode = "";
                }
                else if ( ResultOut.Length < 10 )
                {
                    ResultOut = "没有输出..?好像有什么不太对劲，\n可能是参数不对，\n可以把[只显示Spilling]关掉看看详细说明。";
                    S_DialogBox.DialogBox.SayAsync(ResultOut,1000000.0f);
                }
                else
                {
                    S_DialogBox.DialogBox.SayAsync(ResultOut,1000000.0f);
                }
                //output logs生成Logs
                //Debug.Log(ResultOut);
                fs = new FileStream(shaderCacheFilePath + "_log.txt", FileMode.Create);
                wr = new StreamWriter(fs);
                wr.WriteLine(ResultOut);
                wr.Close();
            }
        }
        catch (Exception e)
        {
            Debug.Log("Malioc异常:" + e);
        }
        // else
        // {
        //     ResultOut = "无法从粘贴板找到任何文字内容。";
        // }
    }
}
