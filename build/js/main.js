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

    let scrolled = false;

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
    let scroll = window.scrollY;
    let windowH = window.innerHeight;

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
}

function findProduct() {

    let scroll = window.scrollY;
    let windowH = window.innerHeight;

    let products = document.querySelectorAll('.product');
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
    console.log('hi');
    let scroll = window.scrollY,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0RvYyA9IGRvY3VtZW50O1xuXG4gICAgbGV0IHZpZGVvQmxvY2tzID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcudG91ciAudG91cl9fbWVldC1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy50b3VyX192aWRlby1sYXlvdXQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuLi8ke2ltZ30nKWA7XG4gICAgfSk7XG4gICAgLy8gc2V0IGxheWVyIGJhY2tncm91bmQgaW1hZ2VcblxuXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCBzY3JvbGxlZCA9IGZhbHNlO1xuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZG9JdE9uU2Nyb2xsO1xuXG4gICAgZnVuY3Rpb24gZG9JdE9uU2Nyb2xsKCkge1xuICAgICAgICBzY3JvbGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzY3JvbGxlZCkge1xuICAgICAgICAgICAgc2Nyb2xsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvZ29DaGFuZ2VzZXRzKCk7XG4gICAgICAgICAgICBmaW5kUHJvZHVjdCgpO1xuICAgICAgICB9XG4gICAgfSwgMjAwKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBsYXlUb3VyVmlkZW9zKTtcblxufSk7XG5cbmZ1bmN0aW9uIGxvZ29DaGFuZ2VzZXRzKCkge1xuICAgIGxldCBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBsZXQgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbiAgICBsZXQgbG9nb1RvcCA9IGxvZ28uc2Nyb2xsSGVpZ2h0ICsgbG9nby5vZmZzZXRUb3A7XG4gICAgbGV0IG5lY2Vzc2FyeVRvcCA9IGxvZ28ub2Zmc2V0VG9wICsgbG9nby5zY3JvbGxIZWlnaHQ7XG4gICAgbGV0IHdoaXRlQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJnLXdoaXRlJyk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2hpdGVCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHcgPSB3aGl0ZUJsb2Nrc1tpXTtcbiAgICAgICAgbGV0IGggPSB3LnNjcm9sbEhlaWdodDtcbiAgICAgICAgbGV0IHRvcCA9IHcub2Zmc2V0VG9wO1xuICAgICAgICBpZiAoc2Nyb2xsID4gdG9wIC0gbG9nb1RvcCAmJiBzY3JvbGwgPCB0b3AgKyBoIC0gbG9nb1RvcCkge1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1ibGFjaycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ28tLWJsYWNrJyk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGwgPiBuZWNlc3NhcnlUb3ApIHtcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1maXhlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbG9nby0tZml4ZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9kdWN0KCkge1xuXG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGxldCB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgbGV0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHAgPT4ge1xuXG4gICAgICAgIGxldCBibG9ja0ggPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHApLmhlaWdodCk7XG4gICAgICAgIGxldCB0b3AgPSBwLm9mZnNldFRvcDtcbiAgICAgICAgbGV0IHggPSB0b3AgLSAod2luZG93SCAtIGJsb2NrSCkgLyAyO1xuICAgICAgICBsZXQgdmlkZW8gPSBwLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICAgICAgaWYgKChzY3JvbGwgPiAoeCAtIDEwMCkpICYmIChzY3JvbGwgPCAoeCArIDEwMCkpKSB7XG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC8vIHAucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDAsMC41KSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICh2aWRlbykge1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LS1jdXJyZW50JylcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAvLyBwLnBhcmVudE5vZGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn1cblxuXG5mdW5jdGlvbiBwbGF5VG91clZpZGVvcygpIHtcbiAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICBsZXQgc2Nyb2xsID0gd2luZG93LnNjcm9sbFksXG4gICAgICAgIHRvdXJNZWV0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VyX19tZWV0aW5ncycpLFxuICAgICAgICB0b3VyVG9wID0gdG91ck1lZXRpbmdzLm9mZnNldFRvcCxcbiAgICAgICAgdG91ckggPSB0b3VyTWVldGluZ3Muc2Nyb2xsSGVpZ2h0LFxuICAgICAgICB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG91cl9fbWVldGluZ3MgLnRvdXJfX21lZXQtYmxvY2snKTtcblxuICAgIGlmIChzY3JvbGwgPj0gdG91clRvcCAtIHdpbmRvd0ggKyB0b3VySCkge1xuICAgICAgICBwbGF5VmlkZW8odmlkZW9zLCAwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcGxheVRvdXJWaWRlb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlWaWRlbyhhcnIsIGkpIHtcbiAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gYXJyW2ldLnF1ZXJ5U2VsZWN0b3IoJy50b3VyX192aWRlby1sYXlvdXQnKTtcbiAgICAgICAgICAgIGxldCB2aWRlbyA9IGFycltpXS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gICAgICAgICAgICBhcnJbaV0uY2xhc3NMaXN0LmFkZCgndG91cl9fbWVldC1ibG9jay0tY3VycmVudCcpO1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuXG4gICAgICAgICAgICB2aWRlby5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3RvdXJfX21lZXQtYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGggLSAxKSBpKys7XG4gICAgICAgICAgICAgICAgZWxzZSBpID0gMDtcbiAgICAgICAgICAgICAgICBwbGF5VmlkZW8oYXJyLCBpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vLyBDb250cmFzdCBGdW5jdGlvbnM6XG5cbi8vIGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8obDEsIGwyKSB7XG4vLyAgICAgbDEgKz0gLjA1O1xuLy8gICAgIGwyICs9IC4wNTtcbi8vICAgICBsZXQgcmF0aW8gPSBsMSAvIGwyXG4vLyAgICAgaWYgKGwyID4gbDEpIHtcbi8vICAgICAgICAgcmF0aW8gPSAxIC8gcmF0aW87XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByYXRpbyA9IE1hdGgucm91bmQocmF0aW8sIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbi8vICAgICBsZXQgcmdiID0gY29sb3Iuc2xpY2UoNCwgLTEpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbi8vICAgICAgICAgbGV0IHJnYkkgPSByZ2JbaV07XG4vLyAgICAgICAgIHJnYkkgLz0gMjU1O1xuLy8gICAgICAgICByZ2JJID0gcmdiSSA8IC4wMzkyOCA/IHJnYkkgLyAxMi45MiA6IE1hdGgucG93KChyZ2JJICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbi8vICAgICAgICAgcmdiW2ldID0gcmdiSTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIC4yMTI2ICogcmdiWzBdICsgLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl07XG4vLyB9XG4vLyBsZXRcbi8vICAgICBjb2xvciA9ICdyZ2IoMCwgMCwgMCknLFxuLy8gICAgIGJnID0gJ3JnYigwLCAyMCwgMiknO1xuXG4vLyBsZXQgdGV4dEx1bWluYW5jZSA9IGdldEx1bWluYW5jZShjb2xvcik7XG4vLyBsZXQgcGFyZW50THVtaW5hbmNlID0gZ2V0THVtaW5hbmNlKGJnKTtcblxuLy8gbGV0IGNyID0gZ2V0Q29udHJhc3RSYXRpbyh0ZXh0THVtaW5hbmNlLCBwYXJlbnRMdW1pbmFuY2UpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
