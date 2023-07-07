using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class S_ParentMenu : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    public GameObject _newMenu;

    private RectTransform _newMenuRectTransform;
    
    private RectTransform _rectTransform;
    
    // Start is called before the first frame update
    void Start()
    {
        _rectTransform = this.GetComponent<RectTransform>();
        _newMenuRectTransform = _newMenu.GetComponent<RectTransform>();
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        var buttonPos = _rectTransform.position;
        buttonPos.x += _rectTransform.rect.width;
        _newMenuRectTransform.position = _rectTransform.position;
        _newMenu.SetActive(true);
        
    }

    public void OnPointerExit(PointerEventData eventData)
    {
    }
}
