$(document).foundation();

var vw = $(window).width();
var offset = 'large-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');

// Creates a dynamic height for the paralax background image.

function dynamicImage(vw) {

    $('.paralax').css({
        height: paralaxImg.innerHeight() + 100
    });

}

// Fades in elements for some UX flair

function uxFade() {

    var uxItem = $(".slide img");

    uxItem.each(function () {

        var uxCur = $(this);
        var uxDir = uxCur.data("slide");
        var uxWidth = uxCur.innerWidth();

        // Hide all of the elements on their respective sides
        $(this).attr('style', uxDir + ': ' + uxWidth + 'px').css({
            opacity: 0
        });

        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var uxChocolate = winTop + (winHeight / 3);
        var uxTop = uxCur.offset();

        if (uxTop.top < uxChocolate) {
            $(this).attr('style', uxDir + ': 0').css({
                opacity: 1
            });
        }

    });

}

$(document).ready(function () {

    dynamicImage();

    paralaxImg.fadeIn('slow');
    $('.preloader').delay(1500).fadeOut('slow');

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
$(window).on("scroll", uxFade);