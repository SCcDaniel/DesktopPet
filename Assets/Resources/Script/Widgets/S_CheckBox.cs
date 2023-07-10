using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class S_CheckBox : MonoBehaviour
{
    public bool bChecked;
    public bool bCanDisable = true;
    private Button _button;
    public GameObject _image;
    public ItemActionInt _action = new ItemActionInt();
    private void Start()
    {
        //
        _button = GetComponent<Button>();
        _button.onClick.AddListener(() =>
        {
            if (bChecked && bCanDisable)
            {
                bChecked = false;
                if (_action != null)
                    _action.Invoke(0);
                _image.SetActive(false);
            }
            else
            {
                bChecked = true;
                if (_action != null)
                    _action.Invoke(1);
                _image.SetActive(true);
            }
        });
    }

    public void UpdateState()
    {
        if (!bChecked)
        {
            if (_action != null)
                _action.Invoke(0);
            _image.SetActive(false);
        }
        else
        {
            if (_action != null)
                _action.Invoke(1);
            _image.SetActive(true);
        }
    }
}
