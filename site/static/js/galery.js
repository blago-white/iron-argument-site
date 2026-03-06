
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.appearence-on-scroll');

    function galeryTop() {
        const top = document.body.scrollTop;
        const top1 = document.getElementById("galery").offsetTop - 100;
        console.log(top)

        if (top1 < top) {
            document.getElementById('galery').style.transition = 'transform 2s .5s ease-in-out, opacity 2s 1s ease, translate 0s 0s linear';
            document.getElementById('galery').style.translate = `0px ${-1 * (top - (top1 + 1000))/2}px`;
            document.getElementById('galery').style.rotate = `${(((top - top1)/2) / 50) - 15}deg`;
        }
    }

    window.addEventListener('scroll', galeryTop);
});
