using System;
using System.Collections;
using System.Collections.Generic;
using System.Timers;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using Input = UnityEngine.Input;

public class S_ChatGPTBox : MonoBehaviour
{
    public TMP_InputField inputLine;
    public List<string> histories;
    private int historyIndex = 0;
    public int maxHistoryCount = 30;
    private bool bHis = false;
    private TextMeshProUGUI meshTip;
    public void Submit(string s)
    {
        if (S_ChatGPT.bActive)
        {
            S_GlobalParameters.prompt = s;
            this.gameObject.AddComponent<S_ChatGPT>();
            histories.Insert(0 , s );
            inputLine.text = "";
        }
    }

    public void changeValue(string s)
    {
        Timer timer = new Timer();
        timer.Interval = 500;
        timer.AutoReset = false;
        timer.Elapsed += (object sender, ElapsedEventArgs e) =>
        {
            if (bHis)
            {
                bHis = false;
            }
            else
            {
                historyIndex = 0;
            }
        };
        timer.Start();
    }

    // Start is called before the first frame update
    void Awake()
    {
        inputLine.onSubmit.AddListener(Submit);
        inputLine.onValueChanged.AddListener(changeValue);
        meshTip = transform.GetChild(0).GetChild(0).GetChild(0).GetComponent<TextMeshProUGUI>();
    }

    // Update is called once per frame
    void Update()
    {
        if (S_ChatGPT.bActive)
        {
            inputLine.readOnly = false;
            meshTip.text = "说点什么吧~";
        }
        else
        {
            inputLine.readOnly = true;
            inputLine.text = "";
            meshTip.text = "等待思考回复哦............";
        }

        if (inputLine.isFocused)
        {
            if (Input.GetKeyDown(KeyCode.UpArrow))
            {
                inputLine.text = histories[historyIndex];
                if (histories.Count - 1 > historyIndex && histories.Count - 1 < maxHistoryCount)
                {
                    historyIndex++;
                    bHis = true;
                }
            }
            else if (Input.GetKeyDown(KeyCode.DownArrow))
            {
                inputLine.text = histories[historyIndex];
                if (histories.Count > 0)
                {
                    historyIndex--;
                    bHis = true;
                }
            }
            //
            if ((Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl) || Input.GetKey(KeyCode.LeftAlt) || Input.GetKey(KeyCode.RightAlt)) 
                && Input.GetKeyDown(KeyCode.Return))
            {
                Submit(inputLine.text);
            }
        }
    }
}
