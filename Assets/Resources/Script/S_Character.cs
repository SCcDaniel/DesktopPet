using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class S_Character : MonoBehaviour
{
    private Animator anim = null;
    public static S_Character character;
    private bool bSmile = false;
    public float MaxSmileTime = 5.0f;
    private float CurrentSmileTime = 0.0f;
    RaycastHit L_CursorHitResult = new RaycastHit();
    private Camera MainCamera;
    // Start is called before the first frame update
    void Start()
    {
        if (MainCamera == null )
        {
            MainCamera = Camera.main;
        }
        character = GameObject.FindWithTag("MainCharacter").GetComponent<S_Character>();
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if (bSmile)
        {
            CurrentSmileTime += Time.deltaTime;
            if (CurrentSmileTime >= MaxSmileTime)
            {
                CurrentSmileTime = 0.0f;
                bSmile = false;
                if(anim!=null)
                    anim.SetBool("bSmile", bSmile);
            }
        }
        
        if (Input.GetMouseButtonDown(0))
        {
            if (!EventSystem.current.IsPointerOverGameObject()) //是否点击到UI
            {
                UnityEngine.Vector3 CurrentCursorPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                UnityEngine.Vector3 target = CurrentCursorPos + MainCamera.transform.forward * 1000.0f;
                if (Physics.Raycast(CurrentCursorPos, target, out L_CursorHitResult))
                {
                    character.Smile();
                }
            }
        }
    }

    public void Smile()
    {
        bSmile = true;
        CurrentSmileTime = 0.0f;
        if(anim!=null)
            anim.SetBool("bSmile", bSmile);
    }

}
