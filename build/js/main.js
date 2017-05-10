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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aGlzRG9jID0gZG9jdW1lbnQ7XG5cbiAgICB2YXIgdmlkZW9CbG9ja3MgPSB0aGlzRG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3VyIC50b3VyX19tZWV0LWJsb2NrJyk7XG4gICAgdmlkZW9CbG9ja3MuZm9yRWFjaCgoYiwgaSkgPT4ge1xuICAgICAgICB2YXIgaW1nID0gYi5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLmdldEF0dHJpYnV0ZSgncG9zdGVyJyk7XG4gICAgICAgIGIucXVlcnlTZWxlY3RvcignLnRvdXJfX3ZpZGVvLWxheW91dCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltZ31cIilgO1xuICAgIH0pO1xuICAgIC8vIHNldCBsYXllciBiYWNrZ3JvdW5kIGltYWdlXG5cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNjcm9sbGVkID0gZmFsc2U7XG5cbiAgICB3aW5kb3cub25zY3JvbGwgPSBkb0l0T25TY3JvbGw7XG5cbiAgICBmdW5jdGlvbiBkb0l0T25TY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNjcm9sbGVkKSB7XG4gICAgICAgICAgICBzY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbG9nb0NoYW5nZXNldHMoKTtcbiAgICAgICAgICAgIGZpbmRQcm9kdWN0KCk7XG4gICAgICAgIH1cbiAgICB9LCAyMDApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcGxheVRvdXJWaWRlb3MpO1xufSk7XG5cbmZ1bmN0aW9uIGxvZ29DaGFuZ2VzZXRzKCkge1xuICAgIHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB2YXIgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBsZXQgd2luZG93VyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdmFyIGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuICAgIHZhciBsb2dvVG9wID0gbG9nby5zY3JvbGxIZWlnaHQgKyBsb2dvLm9mZnNldFRvcDtcbiAgICB2YXIgbmVjZXNzYXJ5VG9wID0gbG9nby5vZmZzZXRUb3AgKyBsb2dvLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgd2hpdGVCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmctd2hpdGUnKTtcblxuICAgIGlmICh3aW5kb3dXID49IDE2MDApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdoaXRlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdyA9IHdoaXRlQmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIGggPSB3LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIHZhciB0b3AgPSB3Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmIChzY3JvbGwgPiB0b3AgLSBsb2dvVG9wICYmIHNjcm9sbCA8IHRvcCArIGggLSBsb2dvVG9wKSB7XG4gICAgICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1ibGFjaycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbG9nby0tYmxhY2snKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcm9sbCA+IG5lY2Vzc2FyeVRvcCkge1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1maXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdsb2dvLS1maXhlZCcpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9kdWN0KCkge1xuXG4gICAgdmFyIHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdmFyIHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcblxuXG4gICAgICAgIHZhciBibG9ja0ggPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHApLmhlaWdodCk7XG4gICAgICAgIHZhciB0b3AgPSBwLm9mZnNldFRvcDtcbiAgICAgICAgdmFyIHggPSB0b3AgLSAod2luZG93SCAtIGJsb2NrSCkgLyAyO1xuICAgICAgICB2YXIgdmlkZW8gPSBwLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICAgICAgaWYgKHNjcm9sbCA+IHggLSAxMDAgJiYgc2Nyb2xsIDwgeCArIDEwMCAmJiB2aWRlbykge1xuICAgICAgICAgICAgLy8gbGV0IHBhcmVudCA9IHAucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUocC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGV4dC1ibG9jaycpKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAvLyBwYXJlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGN1cnJlbnRDb2xvcjtcblxuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LS1jdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LS1jdXJyZW50Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGxheVRvdXJWaWRlb3MoKSB7XG4gICAgdmFyIHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICB0b3VyTWVldGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG91cl9fbWVldGluZ3MnKSxcbiAgICAgICAgdG91clRvcCA9IHRvdXJNZWV0aW5ncy5vZmZzZXRUb3AsXG4gICAgICAgIHRvdXJIID0gdG91ck1lZXRpbmdzLnNjcm9sbEhlaWdodCxcbiAgICAgICAgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvdXJfX21lZXRpbmdzIC50b3VyX19tZWV0LWJsb2NrJyk7XG5cbiAgICBpZiAoc2Nyb2xsID49IHRvdXJUb3AgLSB3aW5kb3dIICsgdG91ckgpIHtcbiAgICAgICAgcGxheVZpZGVvKHZpZGVvcywgMCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBsYXlUb3VyVmlkZW9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5VmlkZW8oYXJyLCBpKSB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGxheW91dCA9IGFycltpXS5xdWVyeVNlbGVjdG9yKCcudG91cl9fdmlkZW8tbGF5b3V0Jyk7XG4gICAgICAgICAgICB2YXIgdmlkZW8gPSBhcnJbaV0ucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5hZGQoJ3RvdXJfX21lZXQtYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcblxuICAgICAgICAgICAgdmlkZW8ub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCd0b3VyX19tZWV0LWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoIC0gMSkgaSsrO1xuICAgICAgICAgICAgICAgIGVsc2UgaSA9IDA7XG4gICAgICAgICAgICAgICAgcGxheVZpZGVvKGFyciwgaSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDb250cmFzdCBGdW5jdGlvbnM6XG5cbi8vIGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8obDEsIGwyKSB7XG4vLyAgICAgbDEgKz0gLjA1O1xuLy8gICAgIGwyICs9IC4wNTtcbi8vICAgICBsZXQgcmF0aW8gPSBsMSAvIGwyXG4vLyAgICAgaWYgKGwyID4gbDEpIHtcbi8vICAgICAgICAgcmF0aW8gPSAxIC8gcmF0aW87XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByYXRpbyA9IE1hdGgucm91bmQocmF0aW8sIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbi8vICAgICBsZXQgcmdiID0gY29sb3Iuc2xpY2UoNCwgLTEpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbi8vICAgICAgICAgbGV0IHJnYkkgPSByZ2JbaV07XG4vLyAgICAgICAgIHJnYkkgLz0gMjU1O1xuLy8gICAgICAgICByZ2JJID0gcmdiSSA8IC4wMzkyOCA/IHJnYkkgLyAxMi45MiA6IE1hdGgucG93KChyZ2JJICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbi8vICAgICAgICAgcmdiW2ldID0gcmdiSTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIC4yMTI2ICogcmdiWzBdICsgLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl07XG4vLyB9XG4vLyBsZXRcbi8vICAgICBjb2xvciA9ICdyZ2IoMCwgMCwgMCknLFxuLy8gICAgIGJnID0gJ3JnYigwLCAyMCwgMiknO1xuXG4vLyBsZXQgdGV4dEx1bWluYW5jZSA9IGdldEx1bWluYW5jZShjb2xvcik7XG4vLyBsZXQgcGFyZW50THVtaW5hbmNlID0gZ2V0THVtaW5hbmNlKGJnKTtcblxuLy8gbGV0IGNyID0gZ2V0Q29udHJhc3RSYXRpbyh0ZXh0THVtaW5hbmNlLCBwYXJlbnRMdW1pbmFuY2UpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
