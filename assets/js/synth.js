var  synth = window.speechSynthesis;
var voices;

function saySomething(){
    synth.cancel();
    var utterThis = new SpeechSynthesisUtterance(document.getElementById("readme").textContent);

    utterThis.voice= voices[7];
    utterThis.pitch = 1;
    utterThis.rate = 1;

    synth.speak(utterThis);
}

window.speechSynthesis.addEventListener('voiceschanged', speakVoice);

function speakVoice() {
    voices=this.getVoices()
    console.log(voices)
    document.getElementById("readit").classList.remove("hidden");
};

if (document.getElementById("readit")===null){

}else{
    document.getElementById("readit").addEventListener("click",function(e){
        e.preventDefault()
        saySomething()
     },false)
}