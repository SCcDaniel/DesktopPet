using UnityEngine;
using System;
using System.Collections.Generic;
using UnityEngine.EventSystems;
using Debug = UnityEngine.Debug;
#if UNITY_STANDALONE_WIN
using System.Runtime.InteropServices;
using System.Diagnostics;
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
    
    [StructLayout(LayoutKind.Sequential)]
    public struct RECT
    {
       public int Left, Top, Right, Bottom;

       public RECT(int left, int top, int right, int bottom)
       {
         Left = left;
         Top = top;
         Right = right;
         Bottom = bottom;
       }

       public RECT(System.Drawing.Rectangle r) : this(r.Left, r.Top, r.Right, r.Bottom) { }

       public int X
       {
         get { return Left; }
         set { Right -= (Left - value); Left = value; }
       }

       public int Y
       {
         get { return Top; }
         set { Bottom -= (Top - value); Top = value; }
       }

       public int Height
       {
         get { return Bottom - Top; }
         set { Bottom = value + Top; }
       }

       public int Width
       {
         get { return Right - Left; }
         set { Right = value + Left; }
       }

       public System.Drawing.Point Location
       {
         get { return new System.Drawing.Point(Left, Top); }
         set { X = value.X; Y = value.Y; }
       }

       public System.Drawing.Size Size
       {
         get { return new System.Drawing.Size(Width, Height); }
         set { Width = value.Width; Height = value.Height; }
       }

       public static implicit operator System.Drawing.Rectangle(RECT r)
       {
         return new System.Drawing.Rectangle(r.Left, r.Top, r.Width, r.Height);
       }

       public static implicit operator RECT(System.Drawing.Rectangle r)
       {
         return new RECT(r);
       }

       public static bool operator ==(RECT r1, RECT r2)
       {
         return r1.Equals(r2);
       }

       public static bool operator !=(RECT r1, RECT r2)
       {
         return !r1.Equals(r2);
       }

       public bool Equals(RECT r)
       {
         return r.Left == Left && r.Top == Top && r.Right == Right && r.Bottom == Bottom;
       }

       public override bool Equals(object obj)
       {
         if (obj is RECT)
           return Equals((RECT)obj);
         else if (obj is System.Drawing.Rectangle)
           return Equals(new RECT((System.Drawing.Rectangle)obj));
         return false;
       }

       public override int GetHashCode()
       {
         return ((System.Drawing.Rectangle)this).GetHashCode();
       }

       public override string ToString()
       {
         return string.Format(System.Globalization.CultureInfo.CurrentCulture, "{{Left={0},Top={1},Right={2},Bottom={3}}}", Left, Top, Right, Bottom);
       }
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
    
    [DllImport("user32.dll", SetLastError=true)]
    static extern bool GetWindowRect(IntPtr hwnd, out RECT lpRect);
    
    [DllImport("user32.dll", SetLastError=true)]
    static extern bool GetClientRect(IntPtr hWnd,out RECT lpRect);
    
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
    
    //钩子
    //安装钩子
    [DllImport("user32.dll")]
    private static extern IntPtr SetWindowsHookEx(int idHook, HookProc lpfn, IntPtr hMod, uint dwThreadId);

    //卸载钩子
    [DllImport("user32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static extern bool UnhookWindowsHookEx(IntPtr hhk);
 
    //向下传递钩子
    [DllImport("user32.dll")]
    private static extern IntPtr CallNextHookEx(IntPtr hhk, int nCode, IntPtr wParam, IntPtr lParam);
 
    //获取程序集模块的句柄
    [DllImport("kernel32.dll")]
    private static extern IntPtr GetModuleHandle(string lpModuleName);

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
    //
    private const int WH_MOUSE_LL = 14;
    private const int WH_MOUSE = 7;         
    private const int WH_KEYBOARD_LL = 13;
    //鼠标事件映射
    private const int WM_MOUSEMOVE = 0x200;
    private const int WM_LBUTTONDOWN = 0x201;
    private const int WM_RBUTTONDOWN = 0x204;
    private const int WM_MBUTTONDOWN = 0x207;
    private const int WM_LBUTTONUP = 0x202;
    private const int WM_RBUTTONUP = 0x205;
    private const int WM_MBUTTONUP = 0x208;
    private const int WM_LBUTTONDBLCLK = 0x203;
    private const int WM_RBUTTONDBLCLK = 0x206;
    private const int WM_MBUTTONDBLCLK = 0x209;
    //hook到的消息结构
    [StructLayout(LayoutKind.Sequential)]
    public class KeyBoardHookStruct
    {
        public int vkCode;
        public int scanCode;
        public int flags;
        public int time;
        public int dwExtraInfo;
    }
    [StructLayout(LayoutKind.Sequential)]
    public class POINT
    {
        public int x;
        public int y;
    }
    [StructLayout(LayoutKind.Sequential)]
    public class MouseHookStruct
    {
        public POINT pt;
        public int hWnd;
        public int wHitTestCode;
        public int dwExtraInfo;
    }
    static IntPtr _hMouseHook;
    private delegate IntPtr HookProc(int nCode, IntPtr wParam, IntPtr lParam);
    private HookProc MouseHookProc;
    static private Vector2 MouseTrack = new Vector2();
    static private RECT WindowRect = new RECT();
    private static bool bIsTransparent = false;
    //托盘
    S_WindowTray Tray;
    private void InitWindowStyle()
    {
        hwnd = FindWindow(null,productName);
        if (hwnd == null)
        {
            MessageBox(IntPtr.Zero, "查找Unity窗口出错...", "错误", 0);
            return;
        }
        MARGINS margins = new MARGINS() { cxLeftWidth = -1 };
        // Set properties of the window
        SetWindowLong(hwnd, GWL_STYLE, WS_POPUP | WS_VISIBLE);
        SetWindowTransparency(true);
        DwmExtendFrameIntoClientArea(hwnd, ref margins);
        SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, Screen.currentResolution.width, Screen.currentResolution.height, SWP_SHOWWINDOW);
        // SetLayeredWindowAttributes(hwnd, 0, (byte)(Opacity*255.0f), 0x00000001 | 0x00000002);
        CreateTray();
        
        //安装全局钩子
        using (Process curProcess = Process.GetCurrentProcess())
        using (ProcessModule curModule = curProcess.MainModule)
        {
            MouseHookProc = new HookProc(FuncMouseHookProc);
            _hMouseHook = SetWindowsHookEx(WH_MOUSE_LL,MouseHookProc,GetModuleHandle(curModule.ModuleName),0); 
        }
    }
    
    private IntPtr FuncMouseHookProc(int nCode, IntPtr wParam, IntPtr lParam)
    {
        MouseHookStruct MyMouseHookStruct = (MouseHookStruct)Marshal.PtrToStructure(lParam, typeof(MouseHookStruct));
        int x = MyMouseHookStruct.pt.x;
        int y = MyMouseHookStruct.pt.y;
        Vector3 pos = Vector3.zero;
        pos.x = x;
        pos.y = Screen.currentResolution.height - y;
        pos.z = Input.mousePosition.z;
        MouseTrack.x = pos.x;
        MouseTrack.y = pos.y;
        {
            if (EventSystem.current)
            {
                var CurrentCursorPos = Camera.main.ScreenToWorldPoint(pos);
                PointerEventData eventData = new PointerEventData(EventSystem.current);
                //eventData.position = Input.mousePosition;
                eventData.position = pos;
                // 执行射线检测，查看指定位置是否有UI
                List<RaycastResult> results = new List<RaycastResult>();
                EventSystem.current.RaycastAll(eventData, results);
                UnityEngine.Vector3 target = CurrentCursorPos + Camera.main.transform.forward * 500.0f;
                RaycastHit[] ObjResults = Physics.RaycastAll(CurrentCursorPos, target);
                if (ObjResults.Length > 0 || results.Count > 0)
                { 
                    SetWindowTransparency(false);
                }
                else
                {
                    SetWindowTransparency(true);
                }
            }
            
        } 
        return CallNextHookEx(_hMouseHook, nCode, wParam, lParam);
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
        dwExStyle |= WS_EX_TOOLWINDOW | WS_EX_TOPMOST ;
        if (isTransparent && !bIsTransparent)
        {
            bIsTransparent = true;
            dwExStyle |= WS_EX_TRANSPARENT | WS_EX_LAYERED;
            //dwExStyle |= WS_EX_LAYERED;
        }
        else if(!isTransparent && bIsTransparent)
        {
            dwExStyle &= ~WS_EX_TRANSPARENT;
            bIsTransparent = false;
        }
        SetWindowLong(hwnd, GWL_EXSTYLE, dwExStyle);
    }

    void Destroy()
    {
        UnhookWindowsHookEx(_hMouseHook);
        _hMouseHook = (IntPtr)0;
        SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, 2, 2, SWP_SHOWWINDOW);
    }

#endif

    private void OnDestroy()
    {
        Destroy();
    }

    void Awake()
    {
        Application.runInBackground = true;
        CameraComp = Camera.main;
#if !UNITY_EDITOR
        InitWindowStyle();
#endif
    }
    
}
