using System;
using System.Collections;
using System.Collections.Generic;
using System.Timers;
using UnityEngine;
using UnityEngine.EventSystems;

public class S_OpenNewMenu : MonoBehaviour,IPointerEnterHandler,IPointerExitHandler
{
    public GameObject NewMenuObject;
    public S_ContextMenu MainMenu;
    private S_ContextMenu subMenu;
    private RectTransform rectTrans;
    //菜单所属的等级
    public int MenuLevel = -1;
    public bool bPointState = false;
    //相同等级的菜单
    public List<S_OpenNewMenu> SameLevelMenuObjects = new List<S_OpenNewMenu>();
    private void Start()
    {
        rectTrans = GetComponent<RectTransform>();
        Timer tt = new Timer(1500);
        tt.Enabled = true;
        tt.AutoReset = false;
        tt.Elapsed += (sender, args) =>
        {
            SameLevelMenuObjects.AddRange(FindObjectsOfType<S_OpenNewMenu>());
        };
        tt.Start();
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (NewMenuObject)
        {
            foreach (var i in SameLevelMenuObjects)
            {
                i.NewMenuObject.SetActive(false);
            }
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
        if (NewMenuObject &&  subMenu && !subMenu.bPointState && !bPointState && !EventSystem.current.IsPointerOverGameObject())
        {
            NewMenuObject.SetActive(false);
        }
    }
}
