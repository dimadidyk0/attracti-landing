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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdGhpc0RvYyA9IGRvY3VtZW50O1xuXG4gICAgbGV0IHZpZGVvQmxvY2tzID0gdGhpc0RvYy5xdWVyeVNlbGVjdG9yQWxsKCcudG91ciAudG91cl9fbWVldC1ibG9jaycpO1xuICAgIHZpZGVvQmxvY2tzLmZvckVhY2goKGIsIGkpID0+IHtcbiAgICAgICAgbGV0IGltZyA9IGIucXVlcnlTZWxlY3RvcigndmlkZW8nKS5nZXRBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJy50b3VyX192aWRlby1sYXlvdXQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuLi8ke2ltZ30nKWA7XG4gICAgfSk7XG4gICAgLy8gc2V0IGxheWVyIGJhY2tncm91bmQgaW1hZ2VcblxuXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmaW5kUHJvZHVjdCgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwbGF5VG91clZpZGVvcyk7XG5cblxufSk7XG5cblxuZnVuY3Rpb24gZmluZFByb2R1Y3QoKSB7XG5cbiAgICBsZXQgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdCcpO1xuICAgIGxldCBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBsZXQgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXG5cbiAgICBsZXQgdG91ck1lZXRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdXJfX21lZXRpbmdzJyksXG4gICAgICAgIHRvdXJUb3AgPSB0b3VyTWVldGluZ3Mub2Zmc2V0VG9wO1xuICAgIGxldCB0b3VySCA9IHRvdXJNZWV0aW5ncy5zY3JvbGxIZWlnaHQ7XG5cblxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbiAgICBsZXQgbG9nb1RvcCA9IGxvZ28uc2Nyb2xsSGVpZ2h0ICsgbG9nby5vZmZzZXRUb3A7XG4gICAgbGV0IG5lY2Vzc2FyeVRvcCA9IGxvZ28ub2Zmc2V0VG9wICsgbG9nby5zY3JvbGxIZWlnaHQ7XG4gICAgbGV0IHdoaXRlQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJnLXdoaXRlJyk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2hpdGVCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHcgPSB3aGl0ZUJsb2Nrc1tpXTtcbiAgICAgICAgbGV0IGggPSB3LnNjcm9sbEhlaWdodDtcbiAgICAgICAgbGV0IHRvcCA9IHcub2Zmc2V0VG9wO1xuICAgICAgICBpZiAoc2Nyb2xsID4gdG9wIC0gbG9nb1RvcCAmJiBzY3JvbGwgPCB0b3AgKyBoIC0gbG9nb1RvcCkge1xuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1ibGFjaycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ28tLWJsYWNrJyk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGwgPiBuZWNlc3NhcnlUb3ApIHtcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLS1maXhlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbG9nby0tZml4ZWQnKTtcbiAgICB9XG5cblxuICAgIHByb2R1Y3RzLmZvckVhY2gocCA9PiB7XG5cbiAgICAgICAgbGV0IGJsb2NrSCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUocCkuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHRvcCA9IHAub2Zmc2V0VG9wO1xuICAgICAgICBsZXQgeCA9IHRvcCAtICh3aW5kb3dIIC0gYmxvY2tIKSAvIDI7XG4gICAgICAgIGxldCB2aWRlbyA9IHAucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcblxuICAgICAgICBpZiAoKHNjcm9sbCA+ICh4IC0gMTAwKSkgJiYgKHNjcm9sbCA8ICh4ICsgMTAwKSkpIHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC0tY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLy8gcC5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMCwwLjUpJztcblxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtLWN1cnJlbnQnKVxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgIC8vIHAucGFyZW50Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIHBsYXlUb3VyVmlkZW9zKCkge1xuXG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICB0b3VyTWVldGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG91cl9fbWVldGluZ3MnKSxcbiAgICAgICAgdG91clRvcCA9IHRvdXJNZWV0aW5ncy5vZmZzZXRUb3AsXG4gICAgICAgIHRvdXJIID0gdG91ck1lZXRpbmdzLnNjcm9sbEhlaWdodCxcbiAgICAgICAgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvdXJfX21lZXRpbmdzIC50b3VyX19tZWV0LWJsb2NrJyk7XG5cbiAgICBpZiAoc2Nyb2xsID49IHRvdXJUb3AgLSB3aW5kb3dIICsgdG91ckgpIHBsYXlWaWRlbyh2aWRlb3MsIDApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcGxheVRvdXJWaWRlb3MpO1xuXG4gICAgZnVuY3Rpb24gcGxheVZpZGVvKGFyciwgaSkge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsYXlvdXQgPSBhcnJbaV0ucXVlcnlTZWxlY3RvcignLnRvdXJfX3ZpZGVvLWxheW91dCcpO1xuICAgICAgICAgICAgbGV0IHZpZGVvID0gYXJyW2ldLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICAgICAgICAgIGFycltpXS5jbGFzc0xpc3QuYWRkKCd0b3VyX19tZWV0LWJsb2NrLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XG5cbiAgICAgICAgICAgIHZpZGVvLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgndG91cl9fbWVldC1ibG9jay0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCAtIDEpIGkrKztcbiAgICAgICAgICAgICAgICBlbHNlIGkgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXlWaWRlbyhhcnIsIGkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8vIENvbnRyYXN0IEZ1bmN0aW9uczpcblxuLy8gZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhsMSwgbDIpIHtcbi8vICAgICBsMSArPSAuMDU7XG4vLyAgICAgbDIgKz0gLjA1O1xuLy8gICAgIGxldCByYXRpbyA9IGwxIC8gbDJcbi8vICAgICBpZiAobDIgPiBsMSkge1xuLy8gICAgICAgICByYXRpbyA9IDEgLyByYXRpbztcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHJhdGlvID0gTWF0aC5yb3VuZChyYXRpbywgMSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuLy8gICAgIGxldCByZ2IgPSBjb2xvci5zbGljZSg0LCAtMSkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuLy8gICAgICAgICBsZXQgcmdiSSA9IHJnYltpXTtcbi8vICAgICAgICAgcmdiSSAvPSAyNTU7XG4vLyAgICAgICAgIHJnYkkgPSByZ2JJIDwgLjAzOTI4ID8gcmdiSSAvIDEyLjkyIDogTWF0aC5wb3coKHJnYkkgKyAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuLy8gICAgICAgICByZ2JbaV0gPSByZ2JJO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gLjIxMjYgKiByZ2JbMF0gKyAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXTtcbi8vIH1cbi8vIGxldFxuLy8gICAgIGNvbG9yID0gJ3JnYigwLCAwLCAwKScsXG4vLyAgICAgYmcgPSAncmdiKDAsIDIwLCAyKSc7XG5cbi8vIGxldCB0ZXh0THVtaW5hbmNlID0gZ2V0THVtaW5hbmNlKGNvbG9yKTtcbi8vIGxldCBwYXJlbnRMdW1pbmFuY2UgPSBnZXRMdW1pbmFuY2UoYmcpO1xuXG4vLyBsZXQgY3IgPSBnZXRDb250cmFzdFJhdGlvKHRleHRMdW1pbmFuY2UsIHBhcmVudEx1bWluYW5jZSk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
