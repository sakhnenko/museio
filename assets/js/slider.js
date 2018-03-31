import {tns} from "tiny-slider/src/tiny-slider.module.js"


if (document.getElementById("features")!=null){
    var features = tns({
        container: '.featuresSlider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        speed: 400,
        slideBy: 1,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        responsive: {
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
      });
}
