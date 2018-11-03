$(document).foundation();

var vw = $(window).width();
var medOff = 'medium-offset';
var imgBox = $('.author .float-right');
var paralaxImg = $('.hero .book');

$(document).ready(dynamicImage);
$(window).on('resize', dynamicImage);
$(window).on('scroll', paralax);

function paralax() {
    
}

function dynamicImage(vw) {

    if (vw >= 1260) {
        $('.author div.no').removeClass(medOff + '-1');
        $('.author div.no').addClass(medOff + '-2');
    }
    else if (vw >= 980) {
        $('.author div.no').removeClass(medOff + '-2');
        $('.author div.no').addClass(medOff + '-1');
    }
    else if (vw <= 640) {
        imgBox.css({
            position: relative
        });
    }

    $('.paralax').css({
        height: paralaxImg.outerHeight() + 100
    })

    $('.float-right').css({
        backgroundSize: imgBox.outerWidth()
    });

}