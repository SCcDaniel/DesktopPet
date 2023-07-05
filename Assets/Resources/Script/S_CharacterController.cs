using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using Unity.VisualScripting;
using UnityEngine;

public class S_CharacterController : MonoBehaviour
{
    public Camera MainCamera;
    private UnityEngine.Vector3 CurrentCursorPos;
    private RaycastHit L_CursorHitResult = new RaycastHit();
    private RaycastHit R_CursorHitResult = new RaycastHit();
    // Start is called before the first frame update
    void Start()
    {
        if (MainCamera == null )
        {
            MainCamera = Camera.main;
        }
    }

    // Update is called once per frame
    void Update()
    {
        {
            if (Input.GetMouseButtonDown(0))
            {
                CurrentCursorPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                UnityEngine.Vector3 target = CurrentCursorPos + MainCamera.transform.forward * 1000.0f;
                Physics.Raycast(CurrentCursorPos, target, out L_CursorHitResult);
            }
            else if (Input.GetMouseButtonUp(0))
            {
                L_CursorHitResult = new RaycastHit();
                S_ContextMenu.ContextMenu.gameObject.SetActive(false);
            }

            if (L_CursorHitResult.collider != null)
            {
                if (L_CursorHitResult.collider.gameObject.tag.Equals("MainCharacter"))
                {
                    Debug.Log("Cursor hit character.");
                    UnityEngine.Vector3 newPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                    UnityEngine.Vector3 pos = (newPos - CurrentCursorPos);
                    if (UnityEngine.Vector3.Magnitude(pos) > 0.001f)
                    {
                        S_ContextMenu.ContextMenu.gameObject.SetActive(false);
                    }
                    CurrentCursorPos = newPos;
                    //pos.z = CursorHitResult.collider.transform.position.z;
                    L_CursorHitResult.collider.transform.position += pos;
                }
            }
        }
        {
            if (Input.GetMouseButtonDown(1))
            {
                CurrentCursorPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                UnityEngine.Vector3 target = CurrentCursorPos + MainCamera.transform.forward * 1000.0f;
                if (Physics.Raycast(CurrentCursorPos, target, out R_CursorHitResult))
                {
                    if (R_CursorHitResult.collider != null && R_CursorHitResult.collider.gameObject.tag.Equals("MainCharacter"))
                    {
                        if (S_ContextMenu.ContextMenu != null)
                        {
                            var trans = S_ContextMenu.ContextMenu.transform.GetComponent<RectTransform>();
                            var newTrans = Input.mousePosition;
                            trans.position = newTrans;
                            S_ContextMenu.ContextMenu.gameObject.SetActive(true);
                        }
                    }
                }
            }
            else if (Input.GetMouseButtonUp(1))
            {
                R_CursorHitResult = new RaycastHit();
            }
        }
    }

    public void UpdateCharacterSize(float value)
    {
        GameObject[] chars = GameObject.FindGameObjectsWithTag("MainCharacter");
        foreach (var c in chars)
        {
            c.transform.localScale = new UnityEngine.Vector3(value,value,value);
        }
    }
    
}
