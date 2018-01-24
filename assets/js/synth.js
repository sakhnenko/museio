var  synth = window.speechSynthesis;
var voices;


function saySomething(){
    synth.cancel();
    var utterThis = new SpeechSynthesisUtterance(document.getElementById("readme").textContent);

    utterThis.voice= voices[50];
    utterThis.pitch = 1;
    utterThis.rate = 1;

    console.log(utterThis)
    synth.speak(utterThis);
}

window.speechSynthesis.addEventListener('voiceschanged', speakVoice);

function speakVoice() {
    voices=this.getVoices()
    document.getElementById("readit").classList.remove("hidden");
};

if (document.getElementById("readit")===null){
    console.log('no ready')
}else{
    console.log("Hi")
    document.getElementById("readit").addEventListener("click",function(e){
        
        e.preventDefault
        saySomething()
     },false)
}