let pickedProduct = 'shelf';

function setPicked(elem) {
    document.querySelectorAll('#shelf, #wardrobe, #safe, #dressing, #workbench').forEach((sw) => {sw.classList.remove('active');});

    elem.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#shelf, #wardrobe, #safe, #dressing, #workbench').forEach((item) => {
        console.log(item);

        item.addEventListener('click', (e) => {
            setPicked(e.target);
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#switchPH, #switchTG').forEach((item) => {
        console.log(item);

        item.addEventListener('click', (e) => {
            document.querySelectorAll('#switchPH, #switchTG').forEach((sw) => {sw.classList.remove('active');});

            e.target.classList.toggle('active');
        })
    })
})
