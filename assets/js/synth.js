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
    document.getElementById("readit").classList.remove("hidden");
};


var readButton = document.getElementById("readit");
if (readButton===null){

}else{
    readButton.addEventListener("mouseup", tapOrClick, false);
    readButton.addEventListener("touchend", tapOrClick, false);

    function tapOrClick(event) {
        event.preventDefault()
        saySomething()
    }
}