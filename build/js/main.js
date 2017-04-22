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

    document.removeEventListener('scroll', playTourVideos);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0RvYyA9IGRvY3VtZW50O1xuXG4gICAgbGV0IHZpZGVvQmxvY2tzID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcudG91ciAudG91cl9fbWVldC1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy50b3VyX192aWRlby1sYXlvdXQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuLi8ke2ltZ30nKWA7XG4gICAgfSk7XG4gICAgLy8gc2V0IGxheWVyIGJhY2tncm91bmQgaW1hZ2VcblxuXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmaW5kUHJvZHVjdCgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwbGF5VG91clZpZGVvcyk7XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIGZpbmRQcm9kdWN0KCkge1xuXG4gICAgbGV0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKTtcbiAgICBsZXQgc2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XG4gICAgbGV0IHdpbmRvd0ggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cblxuXG4gICAgbGV0IHRvdXJNZWV0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VyX19tZWV0aW5ncycpLFxuICAgICAgICB0b3VyVG9wID0gdG91ck1lZXRpbmdzLm9mZnNldFRvcDtcbiAgICBsZXQgdG91ckggPSB0b3VyTWVldGluZ3Muc2Nyb2xsSGVpZ2h0O1xuXG5cbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG4gICAgbGV0IGxvZ29Ub3AgPSBsb2dvLnNjcm9sbEhlaWdodCArIGxvZ28ub2Zmc2V0VG9wO1xuICAgIGxldCBuZWNlc3NhcnlUb3AgPSBsb2dvLm9mZnNldFRvcCArIGxvZ28uc2Nyb2xsSGVpZ2h0O1xuICAgIGxldCB3aGl0ZUJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZy13aGl0ZScpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdoaXRlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3ID0gd2hpdGVCbG9ja3NbaV07XG4gICAgICAgIGxldCBoID0gdy5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGxldCB0b3AgPSB3Lm9mZnNldFRvcDtcbiAgICAgICAgaWYgKHNjcm9sbCA+IHRvcCAtIGxvZ29Ub3AgJiYgc2Nyb2xsIDwgdG9wICsgaCAtIGxvZ29Ub3ApIHtcbiAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby0tYmxhY2snKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdsb2dvLS1ibGFjaycpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsID4gbmVjZXNzYXJ5VG9wKSB7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby0tZml4ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ28tLWZpeGVkJyk7XG4gICAgfVxuXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwID0+IHtcblxuICAgICAgICBsZXQgYmxvY2tIID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShwKS5oZWlnaHQpO1xuICAgICAgICBsZXQgdG9wID0gcC5vZmZzZXRUb3A7XG4gICAgICAgIGxldCB4ID0gdG9wIC0gKHdpbmRvd0ggLSBibG9ja0gpIC8gMjtcbiAgICAgICAgbGV0IHZpZGVvID0gcC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gICAgICAgIGlmICgoc2Nyb2xsID4gKHggLSAxMDApKSAmJiAoc2Nyb2xsIDwgKHggKyAxMDApKSkge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAvLyBwLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC0tY3VycmVudCcpXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgLy8gcC5wYXJlbnROb2RlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cblxuZnVuY3Rpb24gcGxheVRvdXJWaWRlb3MoKSB7XG5cbiAgICBsZXQgc2Nyb2xsID0gd2luZG93LnNjcm9sbFksXG4gICAgICAgIHRvdXJNZWV0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3VyX19tZWV0aW5ncycpLFxuICAgICAgICB0b3VyVG9wID0gdG91ck1lZXRpbmdzLm9mZnNldFRvcCxcbiAgICAgICAgdG91ckggPSB0b3VyTWVldGluZ3Muc2Nyb2xsSGVpZ2h0LFxuICAgICAgICB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG91cl9fbWVldGluZ3MgLnRvdXJfX21lZXQtYmxvY2snKTtcblxuICAgIGlmIChzY3JvbGwgPj0gdG91clRvcCAtIHdpbmRvd0ggKyB0b3VySCkgcGxheVZpZGVvKHZpZGVvcywgMCk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwbGF5VG91clZpZGVvcyk7XG5cbiAgICBmdW5jdGlvbiBwbGF5VmlkZW8oYXJyLCBpKSB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGxheW91dCA9IGFycltpXS5xdWVyeVNlbGVjdG9yKCcudG91cl9fdmlkZW8tbGF5b3V0Jyk7XG4gICAgICAgICAgICBsZXQgdmlkZW8gPSBhcnJbaV0ucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgYXJyW2ldLmNsYXNzTGlzdC5hZGQoJ3RvdXJfX21lZXQtYmxvY2stLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcblxuICAgICAgICAgICAgdmlkZW8ub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFycltpXS5jbGFzc0xpc3QucmVtb3ZlKCd0b3VyX19tZWV0LWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBhcnIubGVuZ3RoIC0gMSkgaSsrO1xuICAgICAgICAgICAgICAgIGVsc2UgaSA9IDA7XG4gICAgICAgICAgICAgICAgcGxheVZpZGVvKGFyciwgaSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuLy8gQ29udHJhc3QgRnVuY3Rpb25zOlxuXG4vLyBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGwxLCBsMikge1xuLy8gICAgIGwxICs9IC4wNTtcbi8vICAgICBsMiArPSAuMDU7XG4vLyAgICAgbGV0IHJhdGlvID0gbDEgLyBsMlxuLy8gICAgIGlmIChsMiA+IGwxKSB7XG4vLyAgICAgICAgIHJhdGlvID0gMSAvIHJhdGlvO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmF0aW8gPSBNYXRoLnJvdW5kKHJhdGlvLCAxKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4vLyAgICAgbGV0IHJnYiA9IGNvbG9yLnNsaWNlKDQsIC0xKS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgICAgICAgIGxldCByZ2JJID0gcmdiW2ldO1xuLy8gICAgICAgICByZ2JJIC89IDI1NTtcbi8vICAgICAgICAgcmdiSSA9IHJnYkkgPCAuMDM5MjggPyByZ2JJIC8gMTIuOTIgOiBNYXRoLnBvdygocmdiSSArIC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4vLyAgICAgICAgIHJnYltpXSA9IHJnYkk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAuMjEyNiAqIHJnYlswXSArIC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdO1xuLy8gfVxuLy8gbGV0XG4vLyAgICAgY29sb3IgPSAncmdiKDAsIDAsIDApJyxcbi8vICAgICBiZyA9ICdyZ2IoMCwgMjAsIDIpJztcblxuLy8gbGV0IHRleHRMdW1pbmFuY2UgPSBnZXRMdW1pbmFuY2UoY29sb3IpO1xuLy8gbGV0IHBhcmVudEx1bWluYW5jZSA9IGdldEx1bWluYW5jZShiZyk7XG5cbi8vIGxldCBjciA9IGdldENvbnRyYXN0UmF0aW8odGV4dEx1bWluYW5jZSwgcGFyZW50THVtaW5hbmNlKTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
