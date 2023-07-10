using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class S_ButtonEx : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    // Start is called before the first frame update

    public UnityEvent Presses;
    public UnityEvent Release;
    private bool bPresses;
    private bool bPoint = false;
    private static bool bFocus = false;
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            bPresses = true;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            bPresses = false;
        }

        if (Presses != null && bPresses && bPoint && !bFocus)
        {
            Presses.Invoke();
            bFocus = true;
        }
        else if (Release != null && !bPresses )
        {
            Release.Invoke();
            bFocus = false;
        }
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        bPoint = true;
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        bPoint = false;
    }
}
