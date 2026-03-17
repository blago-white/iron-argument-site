let visible = false;

const cursor = document.getElementById('cursor');
const cursorHero = document.getElementById('cursorHero');

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

    // console.log(ev.target.tagName === 'button', ev.target.classList.has('contect-type-switch-btn'), ev.target.classList)
    // if (ev.target.classList.contains("contect-type-switch-btn") &&) {
    //     cursor.src = `../static/img/${imageById[ev.target.id]}`
    //     cursor.style.opacity = 1;
    //     cursor.style.filter = 'none';
    //     cursor.style.height = '10vh';
    //     cursor.style.width = 'auto';
    //     cursor.style.top = '0';
    //     cursor.style.left = '0';
    //     return
    // } else {
    //     cursor.src = '../static/img/yellow-glow.png'
    // }

    if (ev.target.tagName.toLowerCase() === 'button' || ev.target.tagName.toLowerCase() === 'a') {
        cursor.style.opacity = 0;
    } else {
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

    // console.log(ev.target.tagName === 'button', ev.target.classList.has('contect-type-switch-btn'), ev.target.classList)
    // if (ev.target.classList.contains("contect-type-switch-btn") &&) {
    //     cursorHero.src = `../static/img/${imageById[ev.target.id]}`
    //     cursorHero.style.opacity = 1;
    //     cursorHero.style.filter = 'none';
    //     cursorHero.style.height = '10vh';
    //     cursorHero.style.width = 'auto';
    //     cursorHero.style.top = '0';
    //     cursorHero.style.left = '0';
    //     return
    // } else {
    //     cursorHero.src = '../static/img/yellow-glow.png'
    // }

    if (ev.target.tagName.toLowerCase() === 'button' || ev.target.tagName.toLowerCase() === 'a') {
        cursorHero.style.opacity = 0;
    } else {
        cursorHero.style.opacity = 1;
    }
},false);

document.querySelector('.second-section').addEventListener('mouseover', () => {
    document.getElementById("cursor").style.opacity = 1;
})

document.querySelector('.second-section').addEventListener('mouseover', () => {
    document.getElementById("cursor").style.opacity = 0;
})
