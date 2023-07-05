using System;
using UnityEngine;
using System.Runtime.InteropServices;
using System.Drawing;
using System.IO;
using System.Windows.Forms;
using Unity.VisualScripting;
using Application = System.Windows.Forms.Application;

namespace WindowTray
{
    public class S_WindowTray
    {
        //NotifyIcon 设置托盘相关参数
        private NotifyIcon _notifyIcon = new NotifyIcon();
        //托盘图标的宽高
        private int iconSize = 40;
        //做托盘图标的图片，这里用了.png格式
        private IntPtr hwnd;
        //
        private MenuItem exit;
        private MenuItem setting;

        //调用该方法将运行程序显示到托盘 
        public void InitTray(ref IntPtr inHwnd , string iconPath)
        {
            hwnd = inHwnd;
            _notifyIcon.Text = "诗酱";
            //托盘图标
            if (iconPath.Length < 2)
                _notifyIcon.Icon = new System.Drawing.Icon(SystemIcons.Warning, iconSize, iconSize);
            else
                _notifyIcon.Icon = CustomTrayIcon(iconPath, iconSize, iconSize);
            _notifyIcon.ShowBalloonTip(2000);//托盘气泡显示时间
            _notifyIcon.ContextMenu = new System.Windows.Forms.ContextMenu();
            //右键菜单
            {
                //退出按钮
                exit = new MenuItem("退出", ExitApp);
                //角色大小
                setting = new MenuItem("设置" , Setting);
                //
                _notifyIcon.ContextMenu.MenuItems.Add(setting);
                _notifyIcon.ContextMenu.MenuItems.Add(exit);
            }
            Show();
            _notifyIcon.ShowBalloonTip(2500, "", "你好呀~", ToolTipIcon.None);
            Form.ActiveForm.ShowInTaskbar = false;
            //Form.FromHandle(hwnd).FindForm().ShowInTaskbar=false;
        }
        /// 设置程序托盘图标
        private Icon CustomTrayIcon(string iconPath, int width, int height)
        {
            Bitmap bt = new Bitmap(iconPath);
            Bitmap fitSizeBt = new Bitmap(bt, width, height);
            return Icon.FromHandle(fitSizeBt.GetHicon());
        }
        public void Show()
        {
            _notifyIcon.Visible = true;//托盘按钮是否可见
        }

        public void Hide()
        {
            _notifyIcon.Visible = false;//托盘按钮是否可见
        }

        private void ExitApp(object sender, EventArgs e)
        {
            
            Hide();
            _notifyIcon.Dispose();
            #if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
            #else
            System.Windows.Forms.Application.Exit();
            //UnityEngine.Application.Quit(0);
            #endif
        }
        
        private void Setting(object sender, EventArgs e)
        {
            S_SettingWidget.SettingWidget.SetActive(true);
        }
        

    }
}

