let visible = false;

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(ev){
    cursor.style.transform = 'translateY('+(ev.clientY)+'px)';
    cursor.style.transform += 'translateX('+(ev.clientX)+'px)';

    if (!visible) {
        cursor.style.opacity = '.3';

        visible = true;
    }

    if (ev.target.tagName.toLowerCase() === 'button' || ev.target.tagName.toLowerCase() === 'a') {
        cursor.style.opacity = 0;
    } else {
        cursor.style.opacity = .3;
    }
},false);
