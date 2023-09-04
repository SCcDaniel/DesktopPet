using System;
using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

[Serializable]
[CustomEditor(typeof(S_ContextMenu))] 
[CanEditMultipleObjects]
public class S_Inspector_ContextMenu : Editor
{
    private S_ContextMenu _contextMenu;

    private SerializedProperty _menuItems_name_Seri;
    private SerializedProperty _menuItems_type_Seri;
    private SerializedProperty _menuItems_event_Seri;
    private SerializedProperty _menuItems_parentIndex_Seri;
    private SerializedProperty _menuItems_checkBox_Seri;
    private SerializedProperty _menuItems_checkBoxCanDisable_Seri;
    private SerializedProperty _menuItems_dropDown_Seri;
    private SerializedProperty _menuItems_inputLine_Seri;
    private SerializedProperty _menuItems_event_oneParam_int_Seri;
    private SerializedProperty _menuItems_event_oneParam_string_Seri;
    private List<bool> _menuItemOpen= new List<bool>();
    private List<bool> _menuItemIsUseClickEvent= new List<bool>();
    private void OnEnable()
    {
    }

    public override void OnInspectorGUI()
    {
        List<int> deleteIndex = new List<int>();
        List<int> sortUp = new List<int>();
        List<int> sortDown = new List<int>();
        _contextMenu = (S_ContextMenu)target;
        base.OnInspectorGUI();
        _menuItems_name_Seri = serializedObject.FindProperty("_menuItems_name");
        _menuItems_type_Seri = serializedObject.FindProperty("_menuItems_type");
        _menuItems_event_Seri = serializedObject.FindProperty("_menuItems_event");
        _menuItems_parentIndex_Seri = serializedObject.FindProperty("_menuItems_parentIndex");
        _menuItems_checkBox_Seri = serializedObject.FindProperty("_menuItems_checkBox");
        _menuItems_checkBoxCanDisable_Seri = serializedObject.FindProperty("_menuItems_checkBoxCanDisable");
        _menuItems_dropDown_Seri = serializedObject.FindProperty("_menuItems_dropDown");
        _menuItems_inputLine_Seri = serializedObject.FindProperty("_menuItems_inputLine");
        _menuItems_event_oneParam_int_Seri = serializedObject.FindProperty("_menuItems_event_oneParam_int");
        _menuItems_event_oneParam_string_Seri= serializedObject.FindProperty("_menuItems_event_oneParam_string");

        serializedObject.Update();
        //DrawDefaultInspector();

        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button(" + "))
        {
            string newName = new string( "NewItem");
            _contextMenu._menuItems_name.Add(newName);
            _contextMenu._menuItems_type.Add( new MenuItemType());
            _contextMenu._menuItems_event.Add(new ItemAction());
            _contextMenu._menuItems_parentIndex.Add(-1);//
            _contextMenu._menuItems_checkBox.Add(false);
            _contextMenu._menuItems_checkBoxCanDisable.Add(true);
            _contextMenu._menuItems_dropDown.Add("");
            _contextMenu._menuItems_Inputline.Add(new Inputline());
            _contextMenu._menuItems_event_oneParam_int.Add(new ItemActionInt());
            _contextMenu._menuItems_event_oneParam_string.Add(new ItemActionString());
        }
        if (GUILayout.Button(" - "))
        {
            if (_contextMenu._menuItems_name.Count > 0)
            {
                _contextMenu._menuItems_name.RemoveAt(_contextMenu._menuItems_name.Count - 1);
                _contextMenu._menuItems_type.RemoveAt(_contextMenu._menuItems_type.Count - 1);
                _contextMenu._menuItems_event.RemoveAt(_contextMenu._menuItems_event.Count - 1);
                _contextMenu._menuItems_parentIndex.RemoveAt(_contextMenu._menuItems_parentIndex.Count - 1);
                _contextMenu._menuItems_checkBox.RemoveAt(_contextMenu._menuItems_checkBox.Count - 1);
                _contextMenu._menuItems_dropDown.RemoveAt(_contextMenu._menuItems_dropDown.Count - 1);
                _contextMenu._menuItems_Inputline.RemoveAt(_contextMenu._menuItems_Inputline.Count - 1);
                _contextMenu._menuItems_event_oneParam_int.RemoveAt(_contextMenu._menuItems_event_oneParam_int.Count - 1);
                _contextMenu._menuItems_event_oneParam_string.RemoveAt(_contextMenu._menuItems_event_oneParam_string.Count - 1);
                _contextMenu._menuItems_checkBoxCanDisable.RemoveAt(_contextMenu._menuItems_checkBoxCanDisable.Count - 1);
            }
        }
        EditorGUILayout.EndHorizontal();
        for (int i =0 ;i <  _contextMenu._menuItems_name.Count ; i++)
        {
            if (_menuItemOpen.Count <= i)
            {
                _menuItemOpen.Add(false);
            }
            if (_menuItemIsUseClickEvent.Count <= i)
            {
                _menuItemIsUseClickEvent.Add(false);
            }
            //
            if (_contextMenu._menuItems_name.Count <= i)
            {
                _contextMenu._menuItems_name.Add(new string( "NewItem"));
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_type.Count <= i)
            {
                _contextMenu._menuItems_type.Add(new MenuItemType());
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_event.Count <= i)
            {
                _contextMenu._menuItems_event.Add(new ItemAction());
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_parentIndex.Count <= i)
            {
                _contextMenu._menuItems_parentIndex.Add(0);
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_checkBox.Count <= i)
            {
                _contextMenu._menuItems_checkBox.Add(false);
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_dropDown.Count <= i)
            {
                _contextMenu._menuItems_dropDown.Add("");
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_Inputline.Count <= i)
            {
                _contextMenu._menuItems_Inputline.Add(new Inputline());
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_event_oneParam_int.Count <= i)
            {
                _contextMenu._menuItems_event_oneParam_int.Add(new ItemActionInt());
                serializedObject.Update();
            }
            if (_contextMenu._menuItems_event_oneParam_string.Count <= i)
            {
                _contextMenu._menuItems_event_oneParam_string.Add(new ItemActionString());
                serializedObject.Update();
            }
            if(_contextMenu._menuItems_checkBoxCanDisable.Count<=i)
            {
                _contextMenu._menuItems_checkBoxCanDisable.Add(true);
                serializedObject.Update();
            }
            //
            EditorGUILayout.BeginHorizontal();
            GUIStyle style = new GUIStyle("FoldOutPreDrop");
            _menuItemOpen[i] = EditorGUILayout.Foldout(_menuItemOpen[i], "Item " + i.ToString() + "__(Parent:" + _contextMenu._menuItems_parentIndex[i].ToString() + ")___" + _contextMenu._menuItems_name[i]);
            //
            if (i > 0)
            {
                if (EditorGUILayout.LinkButton("↑"))
                {
                    sortUp.Add(i);
                }
            }
            if (i < _contextMenu._menuItems_name.Count -1 )
            {
                if (EditorGUILayout.LinkButton("↓"))
                {
                    sortDown.Add(i);
                }
            }
            EditorGUILayout.EndHorizontal();
            //
            if(_menuItemOpen[i])
            {
                EditorGUILayout.BeginVertical();
                
                _contextMenu._menuItems_name[i]=(EditorGUILayout.TextField("名字",_contextMenu._menuItems_name[i]));
                _contextMenu._menuItems_type[i] =((MenuItemType)EditorGUILayout.EnumPopup("类型",_contextMenu._menuItems_type[i]));
                _contextMenu._menuItems_parentIndex[i] = EditorGUILayout.IntField("Parent", _contextMenu._menuItems_parentIndex[i]);
                if (_contextMenu._menuItems_type[i] == MenuItemType.OpenNewMenu)
                {
                    _menuItemIsUseClickEvent[i] = EditorGUILayout.Toggle("启用点击事件",_menuItemIsUseClickEvent[i]);
                    if (_menuItemIsUseClickEvent[i])
                    {
                        EditorGUILayout.PropertyField(_menuItems_event_Seri.GetArrayElementAtIndex(i));
                    }
                }
                else if(_contextMenu._menuItems_type[i] == MenuItemType.Button)
                {
                    EditorGUILayout.PropertyField(_menuItems_event_Seri.GetArrayElementAtIndex(i));
                }
                else if (_contextMenu._menuItems_type[i] == MenuItemType.CheckBox)
                {
                    _contextMenu._menuItems_checkBox[i] = EditorGUILayout.Toggle("默认值",_contextMenu._menuItems_checkBox[i]);
                    _contextMenu._menuItems_checkBoxCanDisable[i] = EditorGUILayout.Toggle("是否运行再次点击关闭",_contextMenu._menuItems_checkBoxCanDisable[i]);
                    EditorGUILayout.PropertyField(_menuItems_event_oneParam_int_Seri.GetArrayElementAtIndex(i));
                }
                else if (_contextMenu._menuItems_type[i] == MenuItemType.DropDownBox)
                {
                    EditorGUILayout.BeginVertical();
                    {
                        _contextMenu._menuItems_dropDown[i] =EditorGUILayout.TextField("下拉内容(请用 ; 区分,但是结尾处不需要 ; )" ,_contextMenu._menuItems_dropDown[i] );
                        EditorGUILayout.PropertyField(_menuItems_event_oneParam_int_Seri.GetArrayElementAtIndex(i));
                    }
                    EditorGUILayout.EndVertical();
                }
                else if (_contextMenu._menuItems_type[i] == MenuItemType.InputLine)
                {
                    EditorGUILayout.BeginVertical();
                    {
                        _contextMenu._menuItems_Inputline[i].name = _contextMenu._menuItems_name[i];
                        _contextMenu._menuItems_Inputline[i].value =EditorGUILayout.TextField("输入框" ,_contextMenu._menuItems_Inputline[i].value);
                        EditorGUILayout.PropertyField(_menuItems_event_oneParam_string_Seri.GetArrayElementAtIndex(i));
                    }
                    EditorGUILayout.EndVertical();
                }
                if (GUILayout.Button("删除"))
                {
                    deleteIndex.Add(i);
                }
                EditorGUILayout.EndVertical();
            }
        }
        //看看是谁要被删掉的
        for (int i = 0; i < deleteIndex.Count; i++)
        {
            _contextMenu._menuItems_name.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_type.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_event.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_parentIndex.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_checkBox.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_checkBoxCanDisable.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_dropDown.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_Inputline.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_event_oneParam_int.RemoveAt(deleteIndex[i]);
            _contextMenu._menuItems_event_oneParam_string.RemoveAt(deleteIndex[i]);
            _menuItemOpen.RemoveAt(deleteIndex[i]);
            _menuItemIsUseClickEvent.RemoveAt(deleteIndex[i]);
        }
        //重新排序
        SortArray(sortUp,true);
        SortArray(sortDown,false);
        //保存数据
        serializedObject.ApplyModifiedProperties();
        if (GUI.changed)
        {
            EditorUtility.SetDirty(_contextMenu);
        }
    }

    void SortArray(List<int> IndexArray , bool up)
    {
        int factor = 1;
        if (up)
        {
            factor = 1;
        }
        else
        {
            factor = -1;
        }
        for (int i = 0; i < IndexArray.Count; i++)
        {
            int index = IndexArray[i];
            var nameTemp = _contextMenu._menuItems_name[index];
            _contextMenu._menuItems_name[index] = _contextMenu._menuItems_name[index - factor];  
            _contextMenu._menuItems_name[index - factor] = nameTemp;
            //
            var typeTemp = _contextMenu._menuItems_type[index];
            _contextMenu._menuItems_type[index] = _contextMenu._menuItems_type[index- factor];  
            _contextMenu._menuItems_type[index - factor] = typeTemp;
            //
            var eventTemp = _contextMenu._menuItems_event[index];
            _contextMenu._menuItems_event[index] = _contextMenu._menuItems_event[index - factor];  
            _contextMenu._menuItems_event[index - factor] = eventTemp;
            //
            var parentTemp = _contextMenu._menuItems_parentIndex[index];
            _contextMenu._menuItems_parentIndex[index] = _contextMenu._menuItems_parentIndex[index - factor];  
            _contextMenu._menuItems_parentIndex[index - factor] = parentTemp;
            //
            var checkBoxTemp = _contextMenu._menuItems_checkBox[index];
            _contextMenu._menuItems_checkBox[index] = _contextMenu._menuItems_checkBox[index- factor];  
            _contextMenu._menuItems_checkBox[index- factor] = checkBoxTemp;
            //
            var checkBoxCanDisableTemp = _contextMenu._menuItems_checkBoxCanDisable[index];
            _contextMenu._menuItems_checkBoxCanDisable[index] = _contextMenu._menuItems_checkBoxCanDisable[index- factor];  
            _contextMenu._menuItems_checkBoxCanDisable[index- factor] = checkBoxCanDisableTemp;
            //
            var dropdownTemp = _contextMenu._menuItems_dropDown[index];
            _contextMenu._menuItems_dropDown[index] = _contextMenu._menuItems_dropDown[index - factor];  
            _contextMenu._menuItems_dropDown[index - factor] = dropdownTemp;
            //
            var inputLineTemp = _contextMenu._menuItems_Inputline[index];
            _contextMenu._menuItems_Inputline[index] = _contextMenu._menuItems_Inputline[index - factor];  
            _contextMenu._menuItems_Inputline[index - factor] = inputLineTemp;
            //
            var eventIntTemp = _contextMenu._menuItems_event_oneParam_int[index];
            _contextMenu._menuItems_event_oneParam_int[index] = _contextMenu._menuItems_event_oneParam_int[index - factor];  
            _contextMenu._menuItems_event_oneParam_int[index - factor] = eventIntTemp;
            //
            var eventStrTemp = _contextMenu._menuItems_event_oneParam_string[index];
            _contextMenu._menuItems_event_oneParam_string[index] = _contextMenu._menuItems_event_oneParam_string[index - factor];  
            _contextMenu._menuItems_event_oneParam_string[index - factor] = eventStrTemp;
            //
            var menuItemOpenTemp =_menuItemOpen[index];
            _menuItemOpen[index] = _menuItemOpen[index- factor];  
            _menuItemOpen[index - factor] = menuItemOpenTemp;
            //
            var menuItemIsUseClickEventTemp =_menuItemIsUseClickEvent[index];
            _menuItemIsUseClickEvent[index] = _menuItemIsUseClickEvent[index- factor];  
            _menuItemIsUseClickEvent[index - factor] = menuItemIsUseClickEventTemp;
        }
    }

}
