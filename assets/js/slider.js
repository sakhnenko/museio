import {tns} from "tiny-slider/src/tiny-slider.module.js"


if (document.getElementById("features")!=null){
    var features = tns({
        container: '.featuresSlider',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        speed: 6000,
        slideBy: 1,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        responsive: {
            500: {
              items: 1
            },
            700: {
              items: 2
            },
            900: {
              items: 3
            }
          }
      });
}
