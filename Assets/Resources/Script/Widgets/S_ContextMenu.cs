using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public enum MenuItemType 
{
    Button,
    OpenNewMenu,
    CheckBox,
    DropDownBox,
}

[System.Serializable]
public class  ItemAction: UnityEvent{ }

[System.Serializable]
public class  ItemActionString: UnityEvent<string>{ }

[System.Serializable]
public class  ItemActionInt: UnityEvent<int>{ }

public class S_ContextMenu : MonoBehaviour
{
    public bool DefaultActive = false;

    private RectTransform _rectTransform;

    public GameObject Prefab_Menu;
    
    public GameObject Prefab_Button;
    
    public GameObject Prefab_OpenNewMenu;

    public GameObject Prefab_CheckBox;

    public GameObject Prefab_DropDown;
    
    //该菜单下的所有内容
    private List<GameObject> _menuChildren = new List<GameObject>();

    [HideInInspector]
    public List<string> _menuItems_name = new List<string>();

    [HideInInspector]
    public List<MenuItemType> _menuItems_type = new List<MenuItemType>();
    
    [HideInInspector]
    public List<int> _menuItems_parentIndex = new List<int>();

    [HideInInspector]
    public List<ItemAction> _menuItems_event= new List<ItemAction>();
    
    [HideInInspector]
    public List<ItemActionInt> _menuItems_event_oneParam_int =  new List<ItemActionInt>();
    
    [HideInInspector]
    public List<bool> _menuItems_checkBox= new List<bool>();

    [HideInInspector]
    public List<string> _menuItems_dropDown= new List<string>();
    
    public Dictionary<int,GameObject> _menus = new Dictionary<int,GameObject>();
    
    //< 哪个Item对象 , 存了多少内容 >
    public Dictionary<int, List<GameObject>> _menuItemMap = new Dictionary<int, List<GameObject>>();

    void Start()
    {
        this.gameObject.SetActive(false);
        if(DefaultActive)
            this.gameObject.SetActive(true);
        _rectTransform = this.transform.GetComponent<RectTransform>();
        UpdateMenu();
    }

    void UpdateMenu()
    {
        _menuChildren.Clear();
        _menuItemMap.Clear();
        for (int i = 0; i < _menuItems_name.Count; i++)
        {
            GameObject obj = null;
            TextMeshProUGUI ui_text = null;
            GameObject parent = this.gameObject;
            switch (_menuItems_type[i])
            {
                case MenuItemType.Button:
                    obj = Instantiate(Prefab_Button,parent.transform);
                    break;
                case MenuItemType.OpenNewMenu:
                    obj = Instantiate(Prefab_OpenNewMenu,parent.transform);
                    break;
                case MenuItemType.CheckBox:
                    obj = Instantiate(Prefab_CheckBox,parent.transform);
                    break;
                case MenuItemType.DropDownBox:
                    obj = Instantiate(Prefab_DropDown,parent.transform);
                    break;
            }
            _menuChildren.Add(obj);
            ui_text = obj.transform.GetChild(0).GetComponent<TextMeshProUGUI>();
            //text
            obj.name =_menuItems_type[i].ToString() +  _menuItems_name[i];
            if (ui_text != null)
            {
                ui_text.SetText(_menuItems_name[i]);
            }
            //drop down
            if (_menuItems_type[i] == MenuItemType.DropDownBox)
            {
                var dropdown = obj.GetComponent<TMP_Dropdown>();
                List<string> allOptions = new List<string>(_menuItems_dropDown[i].Split(";"));
                dropdown.AddOptions(allOptions);
                if (_menuItems_event_oneParam_int[i] != null)
                {
                    dropdown.onValueChanged.AddListener(_menuItems_event_oneParam_int[i].Invoke);
                }
            }
            //button event
            Button button = obj.GetComponent<Button>();
            if (_menuItems_event[i] != null && button)
            {
                button.onClick.AddListener((_menuItems_event[i]).Invoke);
            }
            //Set map
            if (_menuItems_parentIndex[i] >= 0)
            {
                if (_menuItemMap.ContainsKey(_menuItems_parentIndex[i]))
                {
                    _menuItemMap[_menuItems_parentIndex[i]].Add(obj);
                }
                else
                {
                    List<GameObject> newList = new List<GameObject>();
                    newList.Add(obj);
                    _menuItemMap.Add(_menuItems_parentIndex[i], newList);
                    //
                    var newMenu = Instantiate(Prefab_Menu,this.transform.parent);
                    newMenu.name = "Menu_From_" + _menuChildren[_menuItems_parentIndex[i]].name;
                    _menus.Add(_menuItems_parentIndex[i],newMenu);
                }
                obj.transform.SetParent(_menus[_menuItems_parentIndex[i]].transform);
                var openMenuScript = _menuChildren[_menuItems_parentIndex[i]].GetComponent<S_OpenNewMenu>();
                openMenuScript.MainMenu = this;
                openMenuScript.NewMenuObject = _menus[_menuItems_parentIndex[i]];
            }
        }
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

    public void DisableAllSubMenu()
    {
        foreach (var i in _menus)
        {
            i.Value.gameObject.SetActive(false);
        }
    }

    private void OnEnable()
    {
        AdjustMenuPosition();
    }

    private void OnDisable()
    {
        DisableAllSubMenu();
    }

    public void AdjustMenuPosition()
    {
        if (!_rectTransform)
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
        DisableAllSubMenu();
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
