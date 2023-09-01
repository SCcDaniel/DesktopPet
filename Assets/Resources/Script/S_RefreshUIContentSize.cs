using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class S_RefreshUIContentSize : MonoBehaviour
{
    private ContentSizeFitter fitter;

    private RectTransform rect;
    // Start is called before the first frame update
    void Start()
    {
        fitter = GetComponent<ContentSizeFitter>();
        rect = fitter.GetComponentInParent<RectTransform>();
    }

    // Update is called once per frame
    void Update()
    {
        if (fitter && rect)
        {
            LayoutRebuilder.ForceRebuildLayoutImmediate(rect);
        }
    }
}
