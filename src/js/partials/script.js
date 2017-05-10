'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var thisDoc = document;

    var videoBlocks = thisDoc.querySelectorAll('.tour .tour__meet-block');
    videoBlocks.forEach((b, i) => {
        var img = b.querySelector('video').getAttribute('poster');
        b.querySelector('.tour__video-layout').style.backgroundImage = `url("${img}")`;
    });
    // set layer background image

});

window.addEventListener('load', function() {

    var scrolled = false;

    window.onscroll = doItOnScroll;

    function doItOnScroll() {
        scrolled = true;
    }

    setInterval(function() {
        if (scrolled) {
            scrolled = false;
            logoChangesets();
            findProduct();
        }
    }, 200);

    document.addEventListener('scroll', playTourVideos);
});

function logoChangesets() {
    var scroll = window.scrollY;
    var windowH = window.innerHeight;
    let windowW = window.innerWidth;

    var logo = document.querySelector('.logo');
    var logoTop = logo.scrollHeight + logo.offsetTop;
    var necessaryTop = logo.offsetTop + logo.scrollHeight;
    var whiteBlocks = document.querySelectorAll('.bg-white');

    if (windowW >= 1600) {

        for (var i = 0; i < whiteBlocks.length; i++) {
            var w = whiteBlocks[i];
            var h = w.scrollHeight;
            var top = w.offsetTop;
            if (scroll > top - logoTop && scroll < top + h - logoTop) {
                logo.classList.add('logo--black');
                break;
            } else logo.classList.remove('logo--black');
            // });
        }

        if (scroll > necessaryTop) {
            logo.classList.add('logo--fixed');
        } else {
            logo.classList.remove('logo--fixed');
        }

    }
}

function findProduct() {

    var scroll = window.scrollY;
    var windowH = window.innerHeight;

    var products = document.querySelectorAll('.product');
    products.forEach(function(p) {


        var blockH = parseInt(getComputedStyle(p).height);
        var top = p.offsetTop;
        var x = top - (windowH - blockH) / 2;
        var video = p.querySelector('video');

        if (scroll > x - 100 && scroll < x + 100 && video) {
            // let parent = p.parentNode.parentNode;
            // let currentColor = getComputedStyle(p.querySelector('.product__text-block')).backgroundColor;
            // parent.style.background = currentColor;

            video.play();
            p.classList.add('product--current');
        } else {
            video.pause();
            p.classList.remove('product--current');
        }
    });
}

function playTourVideos() {
    var scroll = window.scrollY,
        tourMeetings = document.querySelector('.tour__meetings'),
        tourTop = tourMeetings.offsetTop,
        tourH = tourMeetings.scrollHeight,
        windowH = window.innerHeight,
        videos = document.querySelectorAll('.tour__meetings .tour__meet-block');

    if (scroll >= tourTop - windowH + tourH) {
        playVideo(videos, 0);
        document.removeEventListener('scroll', playTourVideos);
    }

    function playVideo(arr, i) {
        if (i < arr.length) {
            var layout = arr[i].querySelector('.tour__video-layout');
            var video = arr[i].querySelector('video');

            arr[i].classList.add('tour__meet-block--current');
            video.play();

            video.onended = function() {
                arr[i].classList.remove('tour__meet-block--current');
                if (i < arr.length - 1) i++;
                else i = 0;
                playVideo(arr, i);
            };
        }
    }
}

// Contrast Functions:

// function getContrastRatio(l1, l2) {
//     l1 += .05;
//     l2 += .05;
//     let ratio = l1 / l2
//     if (l2 > l1) {
//         ratio = 1 / ratio;
//     }
//     return ratio = Math.round(ratio, 1);
// }

// function getLuminance(color) {
//     let rgb = color.slice(4, -1).split(',').map(Number);
//     for (let i = 0; i < 3; i++) {
//         let rgbI = rgb[i];
//         rgbI /= 255;
//         rgbI = rgbI < .03928 ? rgbI / 12.92 : Math.pow((rgbI + .055) / 1.055, 2.4);
//         rgb[i] = rgbI;
//     }
//     return .2126 * rgb[0] + .7152 * rgb[1] + 0.0722 * rgb[2];
// }
// let
//     color = 'rgb(0, 0, 0)',
//     bg = 'rgb(0, 20, 2)';

// let textLuminance = getLuminance(color);
// let parentLuminance = getLuminance(bg);

// let cr = getContrastRatio(textLuminance, parentLuminance);