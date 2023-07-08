using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class S_OpenNewMenu : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    public GameObject NewMenuObject;
    public S_ContextMenu MainMenu;
    public void OnPointerEnter(PointerEventData eventData)
    {
        if (NewMenuObject)
        {
            NewMenuObject.SetActive(true);
            var newObjectTran = NewMenuObject.GetComponent<RectTransform>();
            var selfTran = this.GetComponent<RectTransform>();
            var newPos = selfTran.position;
            newPos.x += selfTran.rect.width / 2.0f;
            newPos.y += selfTran.rect.height / 2.0f;
            newObjectTran.position = newPos;
        }
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (NewMenuObject)
        {
            //NewMenuObject.SetActive(false);
        }
    }
}
