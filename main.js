SpeechRecognition=window.webkitSpeechRecognition;
Recognition=new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function run(event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
}