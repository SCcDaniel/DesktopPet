using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using System.Windows.Forms;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;
using Screen = System.Windows.Forms.Screen;

public class S_CharacterController : MonoBehaviour
{
    public Camera MainCamera;
    public GameObject MainContextMenu;
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
        if (MainContextMenu == null)
        {
            MainContextMenu = GameObject.FindWithTag("MainMenu");
        }
    }

    // Update is called once per frame
    void Update()
    {
        {
            if (Input.GetMouseButtonDown(0))
            {
                if (!EventSystem.current.IsPointerOverGameObject()) //是否点击到UI
                {
                    CurrentCursorPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                    UnityEngine.Vector3 target = CurrentCursorPos + MainCamera.transform.forward * 1000.0f;
                    Physics.Raycast(CurrentCursorPos, target, out L_CursorHitResult);
                }
            }
            else if (Input.GetMouseButtonUp(0))
            {
                L_CursorHitResult = new RaycastHit();
                if (!EventSystem.current.IsPointerOverGameObject())
                {
                    MainContextMenu.gameObject.SetActive(false);
                }
            }

            if (L_CursorHitResult.collider != null)
            {
                if (L_CursorHitResult.collider.gameObject.tag.Equals("MainCharacter"))
                {
                    //Debug.Log("Cursor hit character.");
                    UnityEngine.Vector3 newPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
                    UnityEngine.Vector3 pos = (newPos - CurrentCursorPos);
                    if (UnityEngine.Vector3.Magnitude(pos) > 0.001f)
                    {
                        MainContextMenu.gameObject.SetActive(false);
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
                        if (MainContextMenu != null)
                        {
                            MainContextMenu.gameObject.SetActive(true);
                            MainContextMenu.GetComponent<S_ContextMenu>().AdjustMenuPosition();
                        }
                    }
                }
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
