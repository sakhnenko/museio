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
    // readButton.addEventListener("click", tapOrClick, false);
    // readButton.addEventListener("touchstart", tapOrClick, false);

    // function tapOrClick(e) {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     alert("Hi")
    //     //saySomething()
    // }

    document.getElementById("readit").addEventListener('touchstart', function(e){
        alert("hello") // alert pageX coordinate of touch point
    }, false)
}