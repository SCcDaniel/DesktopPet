using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class S_FollowCharacter : MonoBehaviour
{
    private RectTransform rectTransform;
    private Camera mainCamera;
    public Vector3 UIOffset = Vector3.zero;
    private string AsyncSayText;
    private bool bUseSayText = false;
    // Start is called before the first frame update
    private bool bMoveUI = false;
    private bool bScaleUI = false;
    private Vector3 newMovePos = Vector3.zero;
    void Awake()
    {
        UpdatePosByMainCharacter();
        //
    }
    
    // Start is called before the first frame update
    void Start()
    {
        rectTransform = GetComponent<RectTransform>();
        mainCamera = Camera.main;
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
        rectTransform.position += newMovePos;
    }
    
    // Update is called once per frame
    void Update()
    {
        UpdatePosByMainCharacter();
    }

}
