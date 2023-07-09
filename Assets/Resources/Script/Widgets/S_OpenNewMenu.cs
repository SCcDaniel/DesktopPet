using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class S_OpenNewMenu : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    public GameObject NewMenuObject;
    public S_ContextMenu MainMenu;

    private S_ContextMenu subMenu;
    //
    public bool bPointState = false;
    public void OnPointerEnter(PointerEventData eventData)
    {
        if (NewMenuObject)
        {
            bPointState = true;
            if (subMenu == null)
            {
                subMenu = NewMenuObject.GetComponent<S_ContextMenu>();
                subMenu.FromOpenNewMenuButton = this.gameObject;
            }
            NewMenuObject.SetActive(true);
            var newObjectTran = NewMenuObject.GetComponent<RectTransform>();
            var selfTran = this.GetComponent<RectTransform>();
            var newPos = selfTran.position;
            newPos.x += selfTran.rect.width / 3.0f;
            newPos.y += selfTran.rect.height / 1.8f;
            newObjectTran.position = newPos;
        }
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (NewMenuObject )
        {
            bPointState = false;
        }
    }

    private void Update()
    {
        if (NewMenuObject &&  subMenu && !subMenu.bPointState && !bPointState)
        {
            NewMenuObject.SetActive(false);
        }
    }
}
