let defaultProductsListShift = '28em';
let sliderStep = 20;
let sliderBorderLeft = 25;
let sliderBorderRight = 70;

var w = screen.width;
var h = screen.height;
var ratio = w / h;


if (ratio < 1) {
    defaultProductsListShift = '2em';
    sliderStep = 10;
    sliderBorderLeft = 0;
    sliderBorderRight = 65;
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.appearence-on-scroll');

    function checkElements() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.remove('appearence-on-scroll');
            }
        });
    }

    function shiftHeroBg() {
        const top = document.body.scrollTop;

        document.getElementsByClassName('main-screen-content')[0].style.transform = `translateY(${top/10}px)`;
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('scroll', shiftHeroBg);

    checkElements();
    shiftHeroBg();
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.from-down');

    function checkElements() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.remove('appearence-on-scroll');
                element.classList.remove('from-down');
            }
        });
    }

    function shiftHeroBg() {
        const top = document.body.scrollTop;

        document.getElementsByClassName('hero-bg')[0].style.transform = `translateY(${top/10}px)`;
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('scroll', shiftHeroBg);

    checkElements();
    shiftHeroBg();
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loaderScreenBg').style.opacity = '0';
    document.getElementById('loaderScreenBg').style.transform = 'translateY(-100%)';
});


const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

let followers = document.querySelectorAll(".gear");
// let objFollowers = document.querySelectorAll(".safe");
let mainBg = document.querySelectorAll(".hero-bg");

let bgParallax = (e) => {
    if (window.pageYOffset > 0) {
        return
    }

    // let x = (e.clientX - (windowInnerHeight / 2))/200;
    let y = (e.clientY - (windowInnerWidth / 2))/100;

    mainBg.forEach((f) => {
        f.style.transform = `translateY(${y}px)`;
        f.style.transition = `all .2s ease`;
    })
}

let gearsParallax = (e) => {
    let x = (e.clientX - (windowInnerHeight / 2))/20+200;
    let y = (e.clientY - (windowInnerWidth / 2))/20;

    followers.forEach((f) => {
        f.style.transform = `translateY(${y}px) translateX(${x}px)`;
        f.style.transition = `all .2s ease`;
    })
}

// let objParallax = (e) => {
//     let x = (e.clientX - (windowInnerHeight / 2))/50;
//     let y = (e.clientY - (windowInnerWidth / 2))/50;
//
//     objFollowers.forEach((f) => {
//         f.style = `transform: translateY(${y}px) translateX(${x}px)!important;transition: all 1s ease;`;
//     })
// }

document.addEventListener("mousemove", (e) => {
    if (ratio > 1) {
        gearsParallax(e);
        // objParallax(e);
        bgParallax(e);
    }
})


document.getElementById("arrowLeft").addEventListener("click", function (_) {
    let e = document.getElementById('products').style.marginLeft || defaultProductsListShift;

    document.getElementById('arrowRight').style.opacity = "1";
    document.getElementById('arrowLeft').style.opacity = "1";

    e = parseInt(e.replace('em', ''));

    if (e > sliderBorderLeft) {
        document.getElementById('arrowRight').style.opacity = ".25";
    }
    if (e < -sliderBorderRight) {
        document.getElementById('arrowLeft').style.opacity = ".25";
        return;
    }

    document.getElementById('products').style.marginLeft = `${e - sliderStep}em`;
})

document.getElementById("arrowRight").addEventListener("click", function (_) {
    let e = document.getElementById('products').style.marginLeft || defaultProductsListShift;

    document.getElementById('arrowRight').style.opacity = "1";
    document.getElementById('arrowLeft').style.opacity = "1";

    e = parseInt(e.replace('em', ''));

    if (e > sliderBorderLeft) {
        document.getElementById('arrowRight').style.opacity = ".25";
        return;
    }
    if (e < -sliderBorderRight) {
        document.getElementById('arrowLeft').style.opacity = ".25";
    }

    document.getElementById('products').style.marginLeft = `${e + sliderStep}em`;
})


function headerDissapearance() {
    const scrollTop = document.body.scrollTop;
    const windowHeight = window.innerHeight;

    const percent = (scrollTop / windowHeight) * 10;

    if (scrollTop < windowHeight) {
        document.getElementById("mainHeader").style.transform = `translateX(${percent}%)`;
        document.getElementById("mainHeaderSecondWord").style.transform = `translateX(${-2 * percent}%)`;
    }
}

window.addEventListener('scroll', headerDissapearance);
