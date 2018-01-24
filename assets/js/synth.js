// var  synth = window.speechSynthesis;
// var voices;
import Artyom from "artyom.js"
const artyom = new Artyom();
var readButton = document.getElementById("readit");
console.log("run")


if (readButton===null){

}else{
    readButton.addEventListener("click", tapOrClick, false);
    readButton.addEventListener("touchstart", tapOrClick, false);

    function tapOrClick(e) {
        
        
        if(artyom.speechSupported()){
            artyom.say(document.getElementById("readme").textContent)
          }else{
            alert("Doesn't work in your browser...")
          }
    }
}

// function saySomething(){
//     synth.cancel();
//     var utterThis = new SpeechSynthesisUtterance(document.getElementById("readme").textContent);
//     document.getElementById("test").innerHTML=utterThis.voice
//     utterThis.voice= voices[7];
//     utterThis.pitch = 1;
//     utterThis.rate = 1;
//     g(utterThis.voice)
    
//     synth.speak(utterThis);
// }

// //window.speechSynthesis.addEventListener('voiceschanged', speakVoice);
// speakVoice()
// function speakVoice() {
//     voices=window.speechSynthesis.getVoices()
//     document.getElementById("readit").classList.remove("hidden");
// };

