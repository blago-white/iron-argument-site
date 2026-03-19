let visible = false;

const cursor = document.getElementById('cursor');
const cursorHero = document.getElementById('cursorHero');

let cursorHidden = false;

const imageById = {
    "safe": "safe-img.png",
    "shelf": "stellazh.png",
    "wardrobe": "shelf.png",
    "workbench": "workbench.png",
    "dressing": "garderob-sys.jpg"
};

document.addEventListener('mousemove', function(ev){
    cursor.style.transform = 'translateY('+(ev.clientY)+'px)';
    cursor.style.transform += 'translateX('+(ev.clientX)+'px)';

    if (!visible) {
        cursor.style.opacity = '.3';

        visible = true;
    }

    if (ev.target.tagName.toLowerCase() === 'button' || ev.target.tagName.toLowerCase() === 'a') {
        cursor.style.opacity = 0;
    } else if (!cursorHidden) {
        cursor.style.opacity = .5;
    }
},false);

document.addEventListener('mousemove', function(ev){
    cursorHero.style.transform = 'translateY('+(ev.clientY)+'px)';
    cursorHero.style.transform += 'translateX('+(ev.clientX)+'px)';

    if (!visible) {
        cursorHero.style.opacity = '.3';

        visible = true;
    }

    if (ev.target.tagName.toLowerCase() === 'button' || ev.target.tagName.toLowerCase() === 'a') {
        cursorHero.style.opacity = 0;
    } else {
        cursorHero.style.opacity = 1;
    }
},false);

document.querySelector('.second-section').addEventListener('mouseover', () => {
    document.getElementById("cursor").style.opacity = 1;
    cursorHidden = false;
})

document.querySelector('.main-screen-content').addEventListener('mouseover', () => {
    document.getElementById("cursor").style.opacity = 0;
    cursorHidden = true;
})
