import { Luminous } from 'luminous-lightbox'
if (document.getElementsByClassName("lightbox")[0]!=null){
    console.log("Has lightbox")
    new Luminous(document.querySelectorAll(".lightbox")[0]) 
}