// var  synth = window.speechSynthesis;
// var voices;
import Artyom from "artyom.js"
const artyom = new Artyom();
var readButton = document.getElementById("readit");


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

