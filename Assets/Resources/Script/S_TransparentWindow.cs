using UnityEngine;
using System;
using System.Collections.Generic;
using System.Drawing;
using UnityEngine.EventSystems;
#if UNITY_STANDALONE_WIN
using System.ComponentModel;
using System.Runtime.InteropServices;
using WindowTray;

#endif

public class S_TransparentWindow : MonoBehaviour
{
    public string productName;
    public int WindowWidth = 512;
    public int WindowHeight = 512;
    public float Opacity = 1.0f;
    public string TrayIconPath;
    private Camera CameraComp = null;
   
    //导入Win32 api
#if UNITY_STANDALONE_WIN
    
    private struct MARGINS
    {
        public int cxLeftWidth;
        public int cxRightWidth;
        public int cyTopHeight;
        public int cyBottomHeight;
    }

    [DllImport("user32.dll")]
    private static extern IntPtr GetActiveWindow();

    [DllImport("user32.dll")]
    private static extern int SetWindowLong(IntPtr hWnd, int nIndex, uint dwNewLong);

    [DllImport("Dwmapi.dll")]
    private static extern uint DwmExtendFrameIntoClientArea(IntPtr hWnd, ref MARGINS margins);

    [DllImport("user32.dll", EntryPoint = "SetWindowPos")]
    private static extern int SetWindowPos(IntPtr hwnd, IntPtr hwndInsertAfter, int x, int y, int cx, int cy,
        int uFlags);

    [DllImport("user32.dll")]
    static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);

    [DllImport("user32.dll", EntryPoint = "SetLayeredWindowAttributes")]
    static extern int SetLayeredWindowAttributes(IntPtr hwnd, int crKey, byte bAlpha, int dwFlags);

    [DllImport("User32.dll")]
    private static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32")]
    private static extern uint  GetWindowLong(IntPtr hwnd, int nIndex);

    [DllImport("user32")]
    private static extern IntPtr FindWindow(string lpClassName , string lpWindowName);

    [DllImport("user32")]
    private static extern int MessageBox(IntPtr hWnd,string lpText, string lpCaption, uint uType);
    
    public static IntPtr hwnd;
    
    private IntPtr HWND_TOPMOST = new IntPtr(-1);
    
    private const int GWL_STYLE = -16;
    private const int GWL_EXSTYLE = -20;
    //Style
    private const uint  WS_BORDER = 0x00800000;	//窗口具有细线边框
    private const uint  WS_CAPTION = 0x00C00000;//窗口具有标题栏。
    private const uint WS_POPUP = 0x80000000;
    private const uint WS_VISIBLE = 0x10000000;
    //Style EX
    private const uint  WS_EX_TRANSPARENT= 0x00000020;
    private const uint  WS_EX_LAYERED = 0x00080000;//完全穿透模式
    private const uint  WS_EX_TOOLWINDOW = 0x00000080;
    private const uint  WS_EX_NOREDIRECTIONBITMAP = 0x00200000;
    private const uint WS_EX_TOPMOST = 0x00000008;
    //
    private const int SWP_FRAMECHANGED = 0x0020;
    private const int SWP_SHOWWINDOW = 0x0040;
    //托盘
    S_WindowTray Tray;

    private void InitWindowStyle()
    {
        hwnd = FindWindow(null,productName);
        if(hwnd == null)
        {
            MessageBox(IntPtr.Zero ,"查找Unity窗口出错...","错误",0);
            return;
        }

        Camera.main.depthTextureMode = DepthTextureMode.Depth;
        MARGINS margins = new MARGINS() { cxLeftWidth = -1 };
        // Set properties of the window
        // See: https://msdn.microsoft.com/en-us/library/windows/desktop/ms633591%28v=vs.85%29.aspx
        SetWindowLong(hwnd, GWL_STYLE, WS_POPUP | WS_VISIBLE);
        SetWindowTransparency(true);
        // Extend the window into the client area
        //See: https://msdn.microsoft.com/en-us/library/windows/desktop/aa969512%28v=vs.85%29.aspx
        DwmExtendFrameIntoClientArea(hwnd, ref margins);
        SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, Screen.currentResolution.width, Screen.currentResolution.height, SWP_SHOWWINDOW);
        //MessageBox(IntPtr.Zero ,(Screen.width + Screen.height).ToString(),"分辨率",0);

        // //窗口样式
        // uint windowStyle = GetWindowLong(hwnd,GWL_STYLE);
        // uint windowStyleEx = GetWindowLong(hwnd,GWL_EXSTYLE);
        // SetWindowLong(hwnd,-16, windowStyle & ~WS_BORDER & ~WS_CAPTION);
        // SetWindowLong(hwnd,-20, windowStyleEx | WS_EX_LAYERED | WS_EX_TOOLWINDOW );
        // SetLayeredWindowAttributes(hwnd, 0, (byte)(Opacity*255.0f), 0x00000001 | 0x00000002);
        // MARGINS margins = new MARGINS() { cxLeftWidth = -1 };
        // DwmExtendFrameIntoClientArea(hwnd, ref margins);
        CreateTray();
    }

    public void CreateTray()
    {
        //任务栏右下角托盘小图标
        Tray = new S_WindowTray();
        string iconPath = Application.streamingAssetsPath + TrayIconPath;
        //Debug.Log(iconPath);
        Tray.InitTray(ref hwnd, iconPath);
    }

    public void SetWindowTransparency(bool isTransparent)
    {
        // 设置窗口的穿透属性
        uint dwExStyle = GetWindowLong(hwnd, GWL_EXSTYLE);
        dwExStyle |= WS_EX_TOOLWINDOW;
        if (isTransparent)
        {
            //dwExStyle |= WS_EX_TRANSPARENT | WS_EX_LAYERED;
            dwExStyle |= WS_EX_LAYERED;
        }
        else
        {
            dwExStyle &= ~WS_EX_TRANSPARENT;
        }
        SetWindowLong(hwnd, GWL_EXSTYLE, dwExStyle);
    }
    
#endif

    
    
    void Awake()
    {
        CameraComp = Camera.main;
#if UNITY_EDITOR
#else
        InitWindowStyle();
#endif
    }

    // 鼠标点击事件处理
    private void Update()
    {
// #if UNITY_EDITOR
// #else
//         // 使用EventSystem检测点击位置是否有游戏元素
//         if (EventSystem.current)
//         {
//             PointerEventData eventData = new PointerEventData(EventSystem.current);
//             eventData.position = Input.mousePosition;
//         
//             // 执行射线检测，查看指定位置是否有UI
//             List<RaycastResult> results = new List<RaycastResult>();
//             EventSystem.current.RaycastAll(eventData, results);
//             //
//             var CurrentCursorPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
//             UnityEngine.Vector3 target = CurrentCursorPos + Camera.main.transform.forward * 1000.0f;
//             RaycastHit R_CursorHitResult = new RaycastHit();
//             if (Physics.Raycast(CurrentCursorPos, target, out R_CursorHitResult) || results.Count > 0)
//             {
//                 SetWindowTransparency(false);
//             }
//             else
//             {
//                 SetWindowTransparency(true);
//             }
//
//         }
// #endif
    }
}
