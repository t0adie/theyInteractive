$(document).foundation();

var vw = $(window).width();
var offset = 'large-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');

$(document).ready(dynamicImage);
$(window).on('resize', dynamicImage);

function dynamicImage(vw) {

    if (vw >= 1260) {
        $('.author div.no').removeClass(offset + '-1');
        $('.author div.no').addClass(offset + '-2');
    }
    else if (vw >= 980) {
        $('.author div.no').removeClass(offset + '-2');
        $('.author div.no').addClass(offset + '-1');
    }
    else if (vw <= 640) {
        imgBox.css({
            position: relative
        });
    }

    $('.paralax').css({
        height: paralaxImg.innerHeight() + 100
    })

}