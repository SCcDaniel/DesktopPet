using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Windows.Speech;

public class S_Speech : MonoBehaviour
{
    // 短语识别器
    PhraseRecognizer mPhraseRecognizer;
    // 关键字
    public List<string> keyWords = new List<string>();

    private List<string> allKeyWords = new List<string>();
    // 方法
    public ItemAction[] functionBind = {};

    public Dictionary<string, ItemAction> valueMap = new Dictionary<string, ItemAction>();
    
    // 可信度
    public ConfidenceLevel mConfidenceLevel = ConfidenceLevel.Medium;
    void Start()
    {
        for (int i = 0; i < keyWords.Count; i++)
        {
            var keyArray = keyWords[i].Split(";");
            for (int j = 0; j < keyArray.Length; j++)
            {
                valueMap.Add(keyArray[j],functionBind[i]);
            }
            allKeyWords.AddRange(keyArray);
        }
        //开始时就创建
        if (mPhraseRecognizer == null)
        {
            //创建一个识别器
            mPhraseRecognizer = new KeywordRecognizer(allKeyWords.ToArray(), mConfidenceLevel);
            //注册监听方法
            mPhraseRecognizer.OnPhraseRecognized += M_RecognitionListener;
            //语音识别器开启
            mPhraseRecognizer.Start();
            Debug.Log("创建识别器成功");
        }
    }
    
    /// <summary>
    /// 识别器的监听方法，当时别到声明的关键字时的回调函数
    /// </summary>
    /// <param name="args"></param>
    private void M_RecognitionListener(PhraseRecognizedEventArgs args)
    {
        //打印识别到的文本
        Debug.Log(args.text);
        valueMap[args.text].Invoke();
    }
    /// <summary>
    /// 销毁脚本时，释放语音识别器
    /// </summary>
    private void OnDestroy()
    {
        //判断是否有语音识别器，如果有，则释放
        if (mPhraseRecognizer != null)
        {
            //用完应该释放，否则会带来额外的开销
            mPhraseRecognizer.Dispose();
        }
    }
    // [SerializeField] public Button startButton;
    // [SerializeField] public Button stopButton;
    // [SerializeField] public TextMeshProUGUI text;
    //
    // private AudioClip clip;
    // private byte[] bytes;
    // private bool recording;
    //
    // private void Start() {
    //     startButton.onClick.AddListener(StartRecording);
    //     stopButton.onClick.AddListener(StopRecording);
    //     stopButton.interactable = false;
    // }
    //
    // private void Update() {
    //     if (recording && Microphone.GetPosition(null) >= clip.samples) {
    //         StopRecording();
    //     }
    // }
    //
    // private void StartRecording() {
    //     text.color = Color.white;
    //     text.text = "Recording...";
    //     startButton.interactable = false;
    //     stopButton.interactable = true;
    //     clip = Microphone.Start(null, false, 10, 44100);
    //     recording = true;
    // }
    //
    // private void StopRecording() {
    //     var position = Microphone.GetPosition(null);
    //     Microphone.End(null);
    //     var samples = new float[position * clip.channels];
    //     clip.GetData(samples, 0);
    //     bytes = EncodeAsWAV(samples, clip.frequency, clip.channels);
    //     recording = false;
    //     SendRecording();
    // }
    //
    // private void SendRecording() {
    //     text.color = Color.yellow;
    //     text.text = "Sending...";
    //     stopButton.interactable = false;
    //     HuggingFaceAPI.AutomaticSpeechRecognition(bytes, response => {
    //         text.color = Color.white;
    //         text.text = response;
    //         startButton.interactable = true;
    //     }, error => {
    //         text.color = Color.red;
    //         text.text = error;
    //         startButton.interactable = true;
    //     });
    // }
    //
    // private byte[] EncodeAsWAV(float[] samples, int frequency, int channels) {
    //     using (var memoryStream = new MemoryStream(44 + samples.Length * 2)) {
    //         using (var writer = new BinaryWriter(memoryStream)) {
    //             writer.Write("RIFF".ToCharArray());
    //             writer.Write(36 + samples.Length * 2);
    //             writer.Write("WAVE".ToCharArray());
    //             writer.Write("fmt ".ToCharArray());
    //             writer.Write(16);
    //             writer.Write((ushort)1);
    //             writer.Write((ushort)channels);
    //             writer.Write(frequency);
    //             writer.Write(frequency * channels * 2);
    //             writer.Write((ushort)(channels * 2));
    //             writer.Write((ushort)16);
    //             writer.Write("data".ToCharArray());
    //             writer.Write(samples.Length * 2);
    //
    //             foreach (var sample in samples) {
    //                 writer.Write((short)(sample * short.MaxValue));
    //             }
    //         }
    //         return memoryStream.ToArray();
    //     }
    // }
}
