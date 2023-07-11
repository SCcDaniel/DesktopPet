using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S_SettingWidget : MonoBehaviour
{
    public bool DefaultActive = false;
    
    public static GameObject SettingWidget;

    public static float TransparentValue;

    // Start is called before the first frame update
    private void Awake()
    {
        
    }

    void Start()
    {
        SettingWidget = this.gameObject;
        if(!DefaultActive)
            this.gameObject.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void GetTransparentValue(float value)
    {
        TransparentValue = value;
        #if !UNITY_EDITOR
                //S_TransparentWindow.SetWindowAttributes(TransparentValue);
        #endif

    }
    
    public void CloseWidget()
    {
        this.gameObject.SetActive(false);
    }

}