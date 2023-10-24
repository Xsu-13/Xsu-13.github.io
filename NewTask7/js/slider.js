$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        dots:true
    });
    function changeSlider(x)
    {
        if (x.matches) {
            $('.slider').slick('slickSetOption', 'slidesToShow', 3);
          } else {
            $('.slider').slick('slickSetOption', 'slidesToShow', 1);
          }
    }
    let x = window.matchMedia("(min-width: 700px)");
    changeSlider(x);
    x.addEventListener('change', changeSlider, x);
})