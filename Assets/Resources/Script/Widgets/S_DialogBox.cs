using System;
using System.Collections;
using System.Collections.Generic;
using System.Timers;
using TMPro;
using Unity.Mathematics;
using UnityEngine;
using UnityEngine.UI;

public class S_DialogBox : MonoBehaviour
{
    public static S_DialogBox DialogBox;
    public TextMeshProUGUI GUIText;
    private RectTransform rectTransform;
    private Camera mainCamera;
    public bool bHide = true;
    public float FadeSpeed = 2.0f;
    public float MinAutoHideTime = 10.0f;
    public Timer AutoHideTimer;
    private CanvasGroup canvasgroup;
    private Vector2 defaultSize = Vector3.zero;
    public Vector3 UIOffset = Vector3.zero;

    private string AsyncSayText;
    private bool bUseSayText = false;
    public string CopyStateString = "";
    // Start is called before the first frame update
    private bool bMoveUI = false;
    private bool bScaleUI = false;
    private Vector3 lastMousePos;
    public GameObject moveButton;
    public GameObject scaleButton;
    private S_ButtonEx moveButtonEx;
    private S_ButtonEx scaleButtonEx;
    private Vector3 newMovePos = Vector3.zero;
    void Awake()
    {
        canvasgroup=GetComponent<CanvasGroup>();
        UpdatePosByMainCharacter();
        //
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
        
        rectTransform = GetComponent<RectTransform>();
        mainCamera = Camera.main;
        defaultSize = rectTransform.sizeDelta;
        moveButtonEx = moveButton.GetComponent<S_ButtonEx>();
        scaleButtonEx = scaleButton.GetComponent<S_ButtonEx>();
    }

    void UpdatePosByMainCharacter()
    {
        if (S_CharacterController.Characters.Count <= 0)
            return;

        //Update pos
        //var collider = S_CharacterController.Characters[0].GetComponent<BoxCollider>();
        //var boundSize = collider.bounds.size;
        //
        //var curPos = rectTransform.position;
        var newPos = mainCamera.WorldToScreenPoint(S_CharacterController.Characters[0].transform.position);
        //newPos.z = curPos.z;
        var UIOffsetCache = UIOffset;
        UIOffsetCache.x *=  S_CharacterController.Characters[0].transform.localScale.x;
        UIOffsetCache.y *=  S_CharacterController.Characters[0].transform.localScale.y;
        newPos += UIOffsetCache;
        rectTransform.position = newPos;
        // var size = defaultSize;
        // size.x *= S_CharacterController.Characters[0].transform.localScale.x;
        // size.y *= S_CharacterController.Characters[0].transform.localScale.y;
        // rectTransform.sizeDelta = size;
        //Debug.Log(S_CharacterController.Characters[0].transform.position);
        
        if (bMoveUI)
        {
            newMovePos += Input.mousePosition - lastMousePos;
        }
        rectTransform.position += newMovePos;
        
        if (bScaleUI)
        {
            Vector3 newScale = Input.mousePosition - lastMousePos;
            var newScale2D = Vector2.zero;
            newScale2D.x =  rectTransform.sizeDelta.x + newScale.x;
            newScale2D.y =  rectTransform.sizeDelta.y + newScale.y;
            rectTransform.sizeDelta = defaultSize= newScale2D;
            //Debug.Log(rectTransform.sizeDelta );
        }
        lastMousePos = Input.mousePosition;
    }

    // Update is called once per frame
    void Update()
    {
        UpdateVisiable();
        UpdatePosByMainCharacter();
        if (bUseSayText && !GUIText.text.Equals(AsyncSayText))
        {
            GUIText.text = AsyncSayText;
            bUseSayText = false;
        }
    }

    public void SetHidden()
    {
        bHide = true;
    }

    public void CopyText()
    {
        CopyStateString = GUIText.text;
        GUIUtility.systemCopyBuffer = GUIText.text;
    }

    public void MoveUI()
    {
        bMoveUI = true;
    }
    
    public void StopMoveUI()
    {
        bMoveUI = false;
    }
    
    public void ScaleUI()
    {
        bScaleUI = true;
    }
    
    public void StopScaleUI()
    {
        bScaleUI = false;
    }

    void UpdateVisiable()
    {
        if (!bHide)
        {
            rectTransform.localScale = Vector3.one;
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
            else
            {
                rectTransform.localScale = Vector3.zero;
            }
        }
    }

    public void Say(string msg , float Time = 15000)
    {
        //Debug.Log("Say.."); 
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
        AutoHideTimer.Interval = Time;
        AutoHideTimer.Start(); 
    }
        
    public void SayAsync(string msg ,float Time = 15000)
    {
        //Debug.Log("Say.."); 
        AsyncSayText = msg;
        bUseSayText = true;
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
        AutoHideTimer.Interval = Time;
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
