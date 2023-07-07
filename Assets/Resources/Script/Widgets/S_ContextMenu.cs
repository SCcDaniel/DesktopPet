using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;


public class S_ContextMenu : MonoBehaviour
{
    public bool DefaultActive = false;

    private RectTransform _rectTransform;

    //该菜单下的所有内容
    private List<GameObject> _menuChildren;
    
    public enum MenuItemType
    {
        Button,
        NewMenu,
    }

    public class MenuItem : UnityEngine.Object
    {
        public MenuItemType _type;
        public string _name;
    }

    [HideInInspector]
    public List<MenuItem> _menuItems = new List<MenuItem>();

    void Start()
    {
        this.gameObject.SetActive(false);
        if(DefaultActive)
            this.gameObject.SetActive(true);
        _rectTransform = this.transform.GetComponent<RectTransform>();
        
        Debug.Log(_menuItems.Count);
    }

    // Update is called once per frame
    void Update()
    {
    }

    private void OnApplicationFocus(bool hasFocus)
    {
        if (!hasFocus)
        {
            this.gameObject.SetActive(false);
        }
    }

    private void OnEnable()
    {
        AdjustMenuPosition();
    }

    public void AdjustMenuPosition()
    {
        if (_rectTransform == null)
        {
            return;
        }

        //正常情况下从光标的【右下】出现
        var newTrans = Input.mousePosition;
        //如果光标在屏幕的下半边,则选择在【上】出现
        if (Input.mousePosition.y < UnityEngine.Screen.currentResolution.height / 2.0f)
        {
            newTrans.y += _rectTransform.rect.height;
        }
        //如果光标在屏幕的右半边,则选择从【左】出现
        if (Input.mousePosition.x > UnityEngine.Screen.currentResolution.width / 2.0f)
        {
            newTrans.x -= _rectTransform.rect.width;
        }
        _rectTransform.position = newTrans;
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
        this.gameObject.SetActive(false);
        S_SettingWidget.SettingWidget.SetActive(true);
    }
}
