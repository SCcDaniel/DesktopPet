using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(S_ContextMenu))]
[CanEditMultipleObjects]
public class S_Inspector_ContextMenu : Editor
{
    private S_ContextMenu _contextMenu;

    private SerializedProperty _menuItemsSeri;

    private void OnEnable()
    {
        _menuItemsSeri = serializedObject.FindProperty("_menuItems");
    }

    public override void OnInspectorGUI()
    {
        _contextMenu = (S_ContextMenu)target;
        base.OnInspectorGUI();
        //DrawDefaultInspector();
        EditorGUILayout.BeginHorizontal();
        if (EditorGUILayout.LinkButton(" + "))
        {
            S_ContextMenu.MenuItem newMenuItem = new S_ContextMenu.MenuItem();
            newMenuItem._name = "NewItem";
            newMenuItem._type = S_ContextMenu.MenuItemType.Button;
            _contextMenu._menuItems.Add(newMenuItem);
        }
        if (EditorGUILayout.LinkButton(" - "))
        {
            if(_contextMenu._menuItems.Count > 0)
                _contextMenu._menuItems.RemoveAt(_contextMenu._menuItems.Count - 1);
        }
        EditorGUILayout.EndHorizontal();
        if (_contextMenu != null)
        { 
            for (int i = 0; i < _contextMenu._menuItems.Count; i++)
            {
                EditorGUILayout.BeginToggleGroup(i.ToString(),true);
                {
                    EditorGUILayout.BeginVertical();
                    {
                        EditorGUILayout.BeginHorizontal();
                        {
                            _contextMenu._menuItems[i]._name = EditorGUILayout.TextField("名字",_contextMenu._menuItems[i]._name);
                        }
                        EditorGUILayout.EndHorizontal();
                        EditorGUILayout.BeginHorizontal();
                        {
                            _contextMenu._menuItems[i]._type = (S_ContextMenu.MenuItemType)EditorGUILayout.EnumPopup("类型",_contextMenu._menuItems[i]._type);
                        }
                        EditorGUILayout.EndHorizontal();
                    }
                    EditorGUILayout.EndVertical();
                }
                EditorGUILayout.EndToggleGroup();
            }
        }
        //保存数据
        serializedObject.ApplyModifiedProperties();
    }
}
