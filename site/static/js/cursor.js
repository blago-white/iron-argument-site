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
        if (['shelf', 'safe', 'wardrobe', 'dressing', 'workbench'].includes(ev.target.id)) {
            cursor.style.opacity = 1;
        } else {
            cursor.style.opacity = 0;
        }
    } else if (!cursorHidden) {
        cursor.style.opacity = .3;
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

document.querySelector('.second-section').addEventListener('mouseover', (ev) => {
    document.getElementById("cursor").style.opacity = 1;
    cursorHidden = false;
})

document.querySelector('.main-screen-content').addEventListener('mouseover', () => {
    document.getElementById("cursor").style.opacity = 0;
    cursorHidden = true;
})

document.querySelectorAll('#shelf, #wardrobe, #safe, #dressing, #workbench').forEach((e) => {
    let btnImg = imageById[e.id];

    e.addEventListener('mouseover', (event) => {
        document.getElementById("cursor").src = `../static/img/${btnImg}`;
        document.getElementById("cursor").style.filter = 'none';
        document.getElementById("cursor").style.opacity = '1';
        document.getElementById("cursor").style.width = '20ch';
        document.getElementById("cursor").style.top = '0ch';
        document.getElementById("cursor").style.left = '0ch';
    });

    e.addEventListener('mouseleave', (event) => {
        document.getElementById("cursor").src = '../static/img/yellow-glow.png';
        document.getElementById("cursor").style.filter = 'blur(50px)';
        document.getElementById("cursor").style.opacity = '.5';
        document.getElementById("cursor").style.width = '20vw';
        document.getElementById("cursor").style.top = '-9vw';
        document.getElementById("cursor").style.left = ' -10vw';
    });
})