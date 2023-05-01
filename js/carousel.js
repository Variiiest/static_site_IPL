// Main Carousel

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel',{
        type : 'loop',
        lazyload : true,
        perPage : 1,
        autoplay : true,
        interval : 2000,
    } ).mount();
} );





//  Multi image carousel
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-multi-carousel',{
    type   : 'loop',
    lazyload : true,
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoplay : true,
    interval : 1500,
    } ).mount().on('click', function () {
        location.assign('https://instagram.com/yash.exch?igshid=ZDdkNTZiNTM=');
    });
} );




// Payment Carousel
function checkSize(){
    let slides = 2.5
    if (document.body.clientWidth < 640){
        slides = 2.5
    }else if(document.body.clientWidth <1024){
        slides = 3.5
    }else{
        slides = 5
    }
    return slides;
}



document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#payment-carousel',{
        type   : 'loop',
        lazyload : true,
        drag   : 'free',
        focus  : 'center',
        perPage: 5,
        breakpoints: {
              640: {
                perPage: 2,
              },
              1024 : {
                perPage: 3,
              },
              1280 : {
                perPage : 4,
              },
        },
        autoplay : true,
        interval : 1000,
    }).mount().on('click', function () {
        location.assign('https://instagram.com/yash.exch?igshid=ZDdkNTZiNTM=');
    });
});