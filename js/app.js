$(document).foundation();

var vw = $(window).width();
var offset = 'large-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');


$(document).ready(function () {

    paralaxImg.fadeIn('slow');
    $('.preloader').delay(1500).fadeOut('slow');
    
    dynamicImage();

});

$(window).on('resize', dynamicImage); 

// Creates a dynamic height for the paralax background image.

function dynamicImage(vw) {

    $('.paralax').css({
        height: paralaxImg.innerHeight() + 100
    })

}