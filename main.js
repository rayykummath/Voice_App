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
    if(content=="take my selfie"){
        console.log("Status:Speaking and switching on camera")
        Speak();
    }
}

function Speak(){
    synth=window.speechSynthesis;
    text="Taking your selfie "
    sayThis=new SpeechSynthesisUtterance(text);
    synth.speak(sayThis);
    Webcam.attach(camera);
    setTimeout(function(){SnapShot();
        Save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

function SnapShot(){
    Webcam.snap( function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
}

function Save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}