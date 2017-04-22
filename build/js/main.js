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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0RvYyA9IGRvY3VtZW50O1xuXG4gICAgbGV0IHZpZGVvQmxvY2tzID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcudG91ciAudG91cl9fbWVldC1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy50b3VyX192aWRlby1sYXlvdXQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuLi8ke2ltZ30nKWA7XG4gICAgfSk7XG4gICAgLy8gc2V0IGxheWVyIGJhY2tncm91bmQgaW1hZ2VcblxuXG59KTtcblxuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICBmaW5kUHJvZHVjdCgpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvZHVjdCgpIHtcblxuICAgIGxldCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0Jyk7XG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGxldCB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwID0+IHtcblxuICAgICAgICBsZXQgYmxvY2tIID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShwKS5oZWlnaHQpO1xuICAgICAgICBsZXQgdG9wID0gcC5vZmZzZXRUb3A7XG4gICAgICAgIGxldCB4ID0gdG9wIC0gKHdpbmRvd0ggLSBibG9ja0gpIC8gMjtcbiAgICAgICAgbGV0IHZpZGVvID0gcC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gICAgICAgIGlmICgoc2Nyb2xsID4gKHggLSAxMDApKSAmJiAoc2Nyb2xsIDwgKHggKyAxMDApKSkge1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LS1jdXJyZW50JylcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtLWN1cnJlbnQnKVxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHRvdXJNZWV0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VyX19tZWV0aW5ncycpLFxuICAgICAgICB0b3VyVG9wID0gdG91ck1lZXRpbmdzLm9mZnNldFRvcDtcbiAgICBsZXQgdG91ckggPSB0b3VyTWVldGluZ3Muc2Nyb2xsSGVpZ2h0O1xuXG4gICAgaWYgKHNjcm9sbCA+PSB0b3VyVG9wIC0gd2luZG93SCArIHRvdXJIKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRvdXJNZWV0aW5ncyk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHBsYXlUb3VyVmlkZW9zKCkge1xuXG4gICAgbGV0IHRoaXNEb2MgPSBkb2N1bWVudDtcbiAgICBsZXQgaGVhZGVyVmlkZW9zID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcudG91cl9fbWVldGluZ3MgLnRvdXJfX3ZpZGVvLWJsb2NrJyk7XG5cbiAgICBmdW5jdGlvbiBwbGF5VmlkZW8oYXJyLCBpKSB7XG5cbiAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gYXJyW2ldLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3ZpZGVvLWJsb2NrJyk7XG4gICAgICAgICAgICBsZXQgdmlkZW8gPSBhcnJbaV0ucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdmlkZW8tYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcblxuICAgICAgICAgICAgdmlkZW8ub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3ZpZGVvLWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHBsYXlWaWRlbyhhcnIsIGkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlWaWRlbyhoZWFkZXJWaWRlb3MsIDApO1xufVxuXG4vLyBDb250cmFzdCBGdW5jdGlvbnM6XG5cbi8vIGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8obDEsIGwyKSB7XG4vLyAgICAgbDEgKz0gLjA1O1xuLy8gICAgIGwyICs9IC4wNTtcbi8vICAgICBsZXQgcmF0aW8gPSBsMSAvIGwyXG4vLyAgICAgaWYgKGwyID4gbDEpIHtcbi8vICAgICAgICAgcmF0aW8gPSAxIC8gcmF0aW87XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByYXRpbyA9IE1hdGgucm91bmQocmF0aW8sIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbi8vICAgICBsZXQgcmdiID0gY29sb3Iuc2xpY2UoNCwgLTEpLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbi8vICAgICAgICAgbGV0IHJnYkkgPSByZ2JbaV07XG4vLyAgICAgICAgIHJnYkkgLz0gMjU1O1xuLy8gICAgICAgICByZ2JJID0gcmdiSSA8IC4wMzkyOCA/IHJnYkkgLyAxMi45MiA6IE1hdGgucG93KChyZ2JJICsgLjA1NSkgLyAxLjA1NSwgMi40KTtcbi8vICAgICAgICAgcmdiW2ldID0gcmdiSTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIC4yMTI2ICogcmdiWzBdICsgLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl07XG4vLyB9XG4vLyBsZXRcbi8vICAgICBjb2xvciA9ICdyZ2IoMCwgMCwgMCknLFxuLy8gICAgIGJnID0gJ3JnYigwLCAyMCwgMiknO1xuXG4vLyBsZXQgdGV4dEx1bWluYW5jZSA9IGdldEx1bWluYW5jZShjb2xvcik7XG4vLyBsZXQgcGFyZW50THVtaW5hbmNlID0gZ2V0THVtaW5hbmNlKGJnKTtcblxuLy8gbGV0IGNyID0gZ2V0Q29udHJhc3RSYXRpbyh0ZXh0THVtaW5hbmNlLCBwYXJlbnRMdW1pbmFuY2UpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
