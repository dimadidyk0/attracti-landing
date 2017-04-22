document.addEventListener('DOMContentLoaded', function() {
    let thisDoc = document;

    let videoBlocks = thisDoc.querySelectorAll('.tour .tour__meet-block');
    videoBlocks.forEach((b, i) => {
        let img = b.querySelector('video').getAttribute('poster');
        b.querySelector('.tour__video-layout').style.backgroundImage = `url('../${img}')`;
    });
    // set layer background image


});

window.addEventListener('load', function() {

    window.onscroll = function() {
        findProduct();
    }
    document.addEventListener('scroll', playTourVideos);


});


function findProduct() {

    let products = document.querySelectorAll('.product');
    let scroll = window.scrollY;
    let windowH = window.innerHeight;



    let tourMeetings = document.querySelector('.tour__meetings'),
        tourTop = tourMeetings.offsetTop;
    let tourH = tourMeetings.scrollHeight;


    let logo = document.querySelector('.logo');
    let logoTop = logo.scrollHeight + logo.offsetTop;
    let necessaryTop = logo.offsetTop + logo.scrollHeight;
    let whiteBlocks = document.querySelectorAll('.bg-white');


    for (let i = 0; i < whiteBlocks.length; i++) {
        let w = whiteBlocks[i];
        let h = w.scrollHeight;
        let top = w.offsetTop;
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


    products.forEach(p => {

        let blockH = parseInt(getComputedStyle(p).height);
        let top = p.offsetTop;
        let x = top - (windowH - blockH) / 2;
        let video = p.querySelector('video');

        if ((scroll > (x - 100)) && (scroll < (x + 100))) {
            video.play();
            p.classList.add('product--current')
                // p.parentNode.style.background = 'rgba(0,0,0,0.5)';

        } else if (video) {
            p.classList.remove('product--current')
            video.pause();
            // p.parentNode.removeAttribute('style');
        }
    });

}


function playTourVideos() {

    let scroll = window.scrollY,
        tourMeetings = document.querySelector('.tour__meetings'),
        tourTop = tourMeetings.offsetTop,
        tourH = tourMeetings.scrollHeight,
        windowH = window.innerHeight,
        videos = document.querySelectorAll('.tour__meetings .tour__meet-block');

    if (scroll >= tourTop - windowH + tourH) playVideo(videos, 0);

    document.addEventListener('scroll', playTourVideos);

    function playVideo(arr, i) {
        if (i < arr.length) {
            let layout = arr[i].querySelector('.tour__video-layout');
            let video = arr[i].querySelector('video');

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