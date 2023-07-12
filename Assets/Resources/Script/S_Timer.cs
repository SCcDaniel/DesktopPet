using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
public delegate void UnityTimerCallback(object param);

//Unity的主线程单线程计时器,非多线程计时器
class UnityTimerMgr : MonoBehaviour
{
    private static UnityTimerMgr _timerMgr;
    public static UnityTimerMgr Instance
    {
        get
        {
            if (_timerMgr == null)
            {
                //找不到实例,另外生成一个Object挂在这个脚本
                GameObject newObject = new GameObject("UnityTimerMgr");
                newObject.AddComponent<UnityTimerMgr>();
            }
            return _timerMgr;
        }
    }
    public Dictionary<System.Guid, S_Timer> _timers;

    private void Awake()
    {
        _timerMgr = this;
    }

    private void Update()
    {
        foreach (var timerMap in _timers)
        {
            S_Timer timer = timerMap.Value;
            if (timer.IsRunning())
            {
                if (timer.Current > timer.TimeSecond)
                {
                    timer.Callback(timer.Object);
                    timer.Current = 0.0f;
                    if (!timer.bLoop)
                    {
                        timer.Stop();
                    }
                }
                timer.Current += Time.deltaTime;
            }
            else
            {
                timer.Current = 0.0f;
            }
        }
    }

    public S_Timer SetTimer(UnityTimerCallback callback,float timeSecond,bool loop)
    {
        System.Guid guid = System.Guid.NewGuid();
        S_Timer newTimer = new S_Timer(timeSecond,loop,callback);
        {
            newTimer.TimerGUID = guid;
        }
        _timers.Add(guid,newTimer);
        return newTimer;
    }
}

public class S_Timer
{
    public S_Timer()
    {
        
    }
    
    public S_Timer(float time,bool loop , UnityTimerCallback func)
    {
        TimeSecond = time;
        bLoop = loop;
        Callback = func;
    }

    public System.Guid TimerGUID;
    
    public float TimeSecond = 0.0f;
    
    public bool bLoop = false;
    
    public UnityTimerCallback Callback;
    
    //用于传递某个对象实例,请不要随意改动
    public object Object = null;
    
    //当前时间,请不要随意改动
    public float Current = 0.0f;
    
    private bool bRun = false;

    public bool IsRunning()
    {
        return bRun;
    }

    public void Start()
    {
        bRun = true;
    }

    public void Stop()
    {
        bRun = false;
    }
    
    public void Destroy()
    {
        Current = 0.0f;
        bRun = false;
        UnityTimerMgr.Instance._timers.Remove(TimerGUID);
    }
    
}
