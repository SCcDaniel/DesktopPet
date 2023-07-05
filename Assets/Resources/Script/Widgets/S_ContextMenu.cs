using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S_ContextMenu : MonoBehaviour
{
    public static S_ContextMenu ContextMenu;

    public bool DefaultActive = false;
    // Start is called before the first frame update
    private void Awake()
    {
        ContextMenu = this;
        this.gameObject.SetActive(false);
    }

    void Start()
    {
        if(DefaultActive)
            this.gameObject.SetActive(true);
    }

    // Update is called once per frame
    void Update()
    {
        #if !UNITY_EDITOR
        if (!S_TransparentWindow.IsUnityFocus())
        {
            this.gameObject.SetActive(false);
        }
        #endif
    }

    public void ExitProgram()
    {
        #if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false;
        #else
        System.Windows.Forms.Application.Exit();
        #endif
    }

    public void ShowSettingWidget()
    {
        S_SettingWidget.SettingWidget.SetActive(true);
    }
}
