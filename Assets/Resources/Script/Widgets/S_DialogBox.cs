using System;
using System.Collections;
using System.Collections.Generic;
using System.Timers;
using TMPro;
using Unity.Mathematics;
using UnityEngine;

public class S_DialogBox : MonoBehaviour
{
    public static S_DialogBox DialogBox;
    public TextMeshProUGUI GUIText;
    public bool bHide = true;
    public float FadeSpeed = 2.0f;
    public float MinAutoHideTime = 10.0f;
    public Timer AutoHideTimer;
    private CanvasGroup canvasgroup;
    // Start is called before the first frame update
    void Awake()
    {
        canvasgroup=GetComponent<CanvasGroup>();
    }

    private void Start()
    {
        DialogBox = this;
        if (!bHide)
        {
            canvasgroup.alpha = 1.0f;
        }
        else
        {
            canvasgroup.alpha = 0.0f;
        }
    }

    // Update is called once per frame
    void Update()
    {
        UpdateVisiable();
    }

    void UpdateVisiable()
    {
        if (!bHide)
        {
            if (canvasgroup.alpha < 1.0f)
            {
                canvasgroup.alpha = Mathf.Clamp(canvasgroup.alpha + Time.deltaTime * FadeSpeed,0.0f,1.0f);
            }
        }
        else
        {
            if (canvasgroup.alpha > 0.0f)
            {
                canvasgroup.alpha = Mathf.Clamp(canvasgroup.alpha - Time.deltaTime * FadeSpeed,0.0f,1.0f);
            }
        }
    }

    public void Say(string msg)
    {
        Debug.Log("Say.."); 
        GUIText.text = msg;
        bHide = false;
        if (AutoHideTimer == null)
        {
            AutoHideTimer = new Timer(); 
            AutoHideTimer.Enabled = true;
            AutoHideTimer.Elapsed += (sender, args) =>
            {
                bHide = true;
            };
        }
        else
        {
            AutoHideTimer.Stop();
        }
        AutoHideTimer.Interval = Mathf.Clamp(msg.Length, MinAutoHideTime * 1000.0f, 10000000.0f);
        AutoHideTimer.Start(); 
    }

    public void OnDestroy()
    {
        if (AutoHideTimer != null)
        {
            AutoHideTimer.Stop();
            AutoHideTimer.Dispose(); 
        }
    }
}
