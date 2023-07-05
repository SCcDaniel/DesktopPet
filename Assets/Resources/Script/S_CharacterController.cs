using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using Unity.VisualScripting;
using UnityEngine;

public class S_CharacterController : MonoBehaviour
{
    public Camera MainCamera;
    private UnityEngine.Vector3 CurrentCursorPos;
    private RaycastHit CursorHitResult = new RaycastHit();
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
        if (Input.GetMouseButtonDown(0))
        {
            CurrentCursorPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
            UnityEngine.Vector3 target = CurrentCursorPos + MainCamera.transform.forward * 1000.0f;
            if (Physics.Raycast(CurrentCursorPos ,  target , out CursorHitResult))
            {
                Debug.Log("Cursor hit succeed.");
            }
        }
        else if (Input.GetMouseButtonUp(0))
        {
            CursorHitResult = new RaycastHit();
        }
        if (CursorHitResult.collider != null && CursorHitResult.collider.gameObject.tag.Equals("MainCharacter"))
        {
            Debug.Log("Cursor hit character.");
            UnityEngine.Vector3 newPos = MainCamera.ScreenToWorldPoint(Input.mousePosition);
            UnityEngine.Vector3 pos = (newPos - CurrentCursorPos);
            CurrentCursorPos = newPos;
            //pos.z = CursorHitResult.collider.transform.position.z;
            CursorHitResult.collider.transform.position += pos;
        }
    }

    public void UpdateCameraSize(float value)
    {
        if (MainCamera)
            MainCamera.orthographicSize = 1 / value;
    }
    
}
