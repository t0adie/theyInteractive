$(document).foundation();

var vw = $(window).width();
var offset = 'large-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');

$(document).ready(function () {

    paralaxImg.fadeIn('slow');
    $('.preloader').delay(1500).fadeOut('slow');

    dynamicImage();

    $('.link').each(function () {
        
        // Get the width of the parent a link for each SVG element
        var parentWidth = $(this).parent().width();

        $(this).css({
            width: parentWidth
        });

        // Modify the length of the SVG path so it will center

        $(this).html('<path d="M1 2h' + parentWidth + '" />')

    });

});

$(window).on('resize', dynamicImage);

// Creates a dynamic height for the paralax background image.

function dynamicImage(vw) {

    $('.paralax').css({
        height: paralaxImg.innerHeight() + 100
    });

}