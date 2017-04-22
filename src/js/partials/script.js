document.addEventListener('DOMContentLoaded', function() {
    let thisDoc = document;

    let videoBlocks = thisDoc.querySelectorAll('.tour .tour__meet-block');
    videoBlocks.forEach((b, i) => {
        let img = b.querySelector('video').getAttribute('poster');
        b.querySelector('.tour__video-layout').style.backgroundImage = `url('../${img}')`;
    });
    // set layer background image


});


window.onscroll = function() {
    findProduct();
}

function findProduct() {

    let products = document.querySelectorAll('.product');
    let scroll = window.scrollY;
    let windowH = window.innerHeight;

    products.forEach(p => {

        let blockH = parseInt(getComputedStyle(p).height);
        let top = p.offsetTop;
        let x = top - (windowH - blockH) / 2;
        let video = p.querySelector('video');

        if ((scroll > (x - 100)) && (scroll < (x + 100))) {
            p.classList.add('product--current')
            video.play();

        } else if (video) {
            p.classList.remove('product--current')
            video.pause();
        }
    });

    let tourMeetings = document.querySelector('.tour__meetings'),
        tourTop = tourMeetings.offsetTop;
    let tourH = tourMeetings.scrollHeight;

    if (scroll >= tourTop - windowH + tourH) {
        console.dir(tourMeetings);
    }
}


function playTourVideos() {

    let thisDoc = document;
    let headerVideos = thisDoc.querySelectorAll('.tour__meetings .tour__video-block');

    function playVideo(arr, i) {

        if (i < arr.length) {
            let layout = arr[i].querySelector('.header__video-block');
            let video = arr[i].querySelector('video');

            arr[i].classList.add('header__video-block--current');
            video.play();

            video.onended = function() {
                arr[i].classList.remove('header__video-block--current');
                i++;
                playVideo(arr, i);
            };
        }
    }

    playVideo(headerVideos, 0);
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