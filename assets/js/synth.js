import Artyom from "artyom.js"
const artyom = new Artyom();
var readButton = document.getElementById("readit");
var stopreadingButton = document.getElementById("stopit");


if (readButton!=null){
    readButton.addEventListener("click", tocPlay, false);
    readButton.addEventListener("touchstart", tocPlay, false);

    function tocPlay(e) {
        if(artyom.speechSupported()){
            artyom.say(document.getElementById("readme").textContent)
            this.style.display = "none"
            stopreadingButton.style.display="block"
          }else{
            alert("Doesn't work in your browser...")
          }
    }
}

if (stopreadingButton!=null){
    stopreadingButton.addEventListener("click", tocStop, false);
    stopreadingButton.addEventListener("touchstart", tocStop, false);

    function tocStop(e) {
        if(artyom.speechSupported()){
            artyom.shutUp()
            this.style.display = "none"
            readButton.style.display = "block"
          }else{
            alert("Doesn't work in your browser...")
          }
    }
}

