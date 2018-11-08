$(document).foundation();

var vw = $(window).width();
var offset = 'large-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');

// Creates a dynamic height for the paralax background image.

function dynamicImage() {

    $('.paralax').css({
        height: paralaxImg.innerHeight() + 200
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
        uxCur.attr('style', uxDir + ': ' + uxWidth + 'px').css({
            opacity: 0
        });

        var winTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var uxChocolate = winTop + (winHeight * 0.75);
        var uxTop = uxCur.offset();

        if (uxTop.top < uxChocolate) {

            uxCur.attr('style', uxDir + ': 0').css({
                opacity: 1
            });
        }

    });

}

$(document).ready(function () {

    paralaxImg.fadeIn('slow');
    $('.preloader').delay(1500).fadeOut('slow', function () {
        $('.play').fadeIn('slow');
    });

    $('.link').each(function () {

        var lnxCur = $(this);

        // Get the width of the parent a link for each SVG element
        var lineWidth = lnxCur.parent().width();
        var totalWidth = lnxCur.closest('li').width();

        lnxCur.css({
            width: lineWidth,
            left: (totalWidth - lineWidth) / 2
        });


        // Modify the length of the SVG path so it will center

        $(this).html('<path d="M1 2h' + lineWidth + '" />')

    });

    // Adjusts the height of the orbit-container 
    // to fit the highest orbit-slide element

    var maxHeight = 0;

    $(".orbit-slide").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $(".orbit-container").height(maxHeight + 32);
    console.log(maxHeight);

})

paralaxImg.on('ready', dynamicImage);
$(window).on('resize', dynamicImage);
$(window).on("scroll", uxFade);