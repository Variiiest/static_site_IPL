document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel',{
        type : 'loop',
        perPage : 1,
        autoplay : true,
        interval : 2000,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-multi-carousel',{
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoplay : true,
    interval : 1500,
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#payment-carousel',{
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 4,
    autoplay : true,
    interval : 1000,
    } ).mount();
} );
