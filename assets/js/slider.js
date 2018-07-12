import {tns} from "tiny-slider/src/tiny-slider.module.js"


if (document.getElementById("features")!=null){
    var features = tns({
        container: '.featuresSlider',
        items: 1,
        gutter: 6,
        slideBy: 'page',
        autoplay: true,
        speed: 1000,
        autoplayTimeout: 6000,
        slideBy: 1,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: false,
        responsive: {
            600: {
              items: 2,
              gutter: 6
            },
            1000: {
              items: 3,
              gutter: 6
            }
          }
      });
}
