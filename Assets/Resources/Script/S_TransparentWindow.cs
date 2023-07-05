using UnityEngine;
using System;
using System.Drawing;
#if UNITY_STANDALONE_WIN
using System.ComponentModel;
using System.Runtime.InteropServices;
using WindowTray;
#endif

public class S_TransparentWindow : MonoBehaviour
{
    public int WindowWidth = 512;
    public int WindowHeight = 512;
    public float Opacity = 1.0f;
    public string TrayIconPath;
    public float CameraViewSize = 5.0f;
    private Camera CameraComp = null;
    //导入Win32 api
#if UNITY_STANDALONE_WIN
    [DllImport("user32")]
    private static extern int  GetWindowLong(IntPtr hwnd, int nIndex);
    
    [DllImport("user32")]
    private static extern int  SetWindowLong(IntPtr hwnd, int nIndex , int dwNewLong);
    
    [DllImport("user32")]
    private static extern IntPtr FindWindow(string lpClassName , string lpWindowName);

    [DllImport("user32")]
    private static extern int SetWindowPos(IntPtr hWnd,int hWndInsertAfter,int x, int y,int cx,int cy,int uFlags);

    [DllImport("user32")]
    private static extern int MessageBox(IntPtr hWnd,string lpText, string lpCaption, uint uType);

    //分层窗口透明度 WS_EX_LAYERED
    //crKey:需要剔除的背景颜色
    //bAlpha:整体透明度
    //dwFlags透明方式
    [DllImport("user32.dll")]
    static extern int SetLayeredWindowAttributes(IntPtr hwnd, int crKey, int bAlpha, int dwFlags);
    public static IntPtr hwnd;

    //Style
    private const int WS_BORDER = 0x00800000;	//窗口具有细线边框
    private const int WS_CAPTION = 0x00C00000;//窗口具有标题栏。
    //Style EX
    private const int WS_EX_TRANSPARENT= 0x00000020;
    private const int WS_EX_LAYERED = 0x00080000;//完全穿透模式
    private const int WS_EX_TOOLWINDOW = 0x00000080;
    private const int WS_EX_NOREDIRECTIONBITMAP = 0x00200000;
    //
    private const int SWP_SHOWWINDOW = 0x0040;
    //托盘
    S_WindowTray Tray;

    private void InitWindowStyle()
    {
        var appName = UnityEngine.Application.productName;
        hwnd = FindWindow(null,appName);
        if(hwnd == null)
        {
            MessageBox(IntPtr.Zero ,"查找Unity窗口出错...","错误",0);
            return;
        }
        //窗口样式
        int windowStyle = GetWindowLong(hwnd,-16);
        int windowStyleEx = GetWindowLong(hwnd,-20);
        SetWindowLong(hwnd,-16, windowStyle & ~WS_BORDER & ~WS_CAPTION);
        SetWindowLong(hwnd,-20, windowStyleEx | WS_EX_LAYERED | WS_EX_TOOLWINDOW );
        SetWindowPos(hwnd, -1, 0, 0, WindowWidth, WindowHeight, SWP_SHOWWINDOW);
        SetLayeredWindowAttributes(hwnd, 0, (int)(Opacity*255.0f), 0x00000001 | 0x00000002);
        //任务栏右下角托盘小图标
        Tray = new S_WindowTray();
        string iconPath = Application.streamingAssetsPath + TrayIconPath;
        //Debug.Log(iconPath);
        Tray.InitTray(ref hwnd, iconPath);
    }

    public static void SetWindowAttributes(float newOpacity)
    {
        SetLayeredWindowAttributes(hwnd, 0, (int)(newOpacity*255.0f), 0x00000001 | 0x00000002);
    }

#endif

    void Awake()
    {
        CameraComp = Camera.main;
#if !UNITY_EDITOR
        InitWindowStyle();
#endif
    }

    void Update()
    {
        CameraComp.orthographicSize = CameraViewSize;
    }
}
