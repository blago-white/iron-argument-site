import { getCookie, setCookie } from "./cookies.js";

let pickedProduct = 'shelf';

let notificationCloseBtn = document.querySelector("#notification .cookie-btn");

function showError(text) {
    document.getElementById('notificationTextContent').innerHTML = text;
    notificationCloseBtn.style.background = '#992626';

    notificationCloseBtn.onclick = () => {
        notificationCloseBtn.parentElement.parentElement.style.visibility = 'hidden';
        notificationCloseBtn.style.background = '#004aa9';
    };

    document.getElementById('notification').style.visibility = 'visible';
}

function showSuccess(text) {
    document.getElementById('notificationTextContent').innerHTML = text;
    notificationCloseBtn.style.background = '#27a93d';
    notificationCloseBtn.style.borderRadius = "15px!important";

    notificationCloseBtn.onclick = () => {
        notificationCloseBtn.parentElement.parentElement.style.visibility = 'hidden';
        notificationCloseBtn.style.background = '#004aa9';
        notificationCloseBtn.style.borderRadius = "";
    };

    document.getElementById('notification').style.visibility = 'visible';
}

async function sendForm() {
    if (getCookie("formSended")) {
        showError("С вами уже связываются, форма уже была отправлена!")
        return;
    }

    const name = document.getElementById("formName").value;
    const contact = document.getElementById("formContact").value;
    const promo = document.getElementById("formPromo").value;

    if (!name || name.length > 60 || name.length == 1) {
        showError("Вы не указали имя, либо его длинна более 60 символов, или меньше 2-х.")
        return;
    }

    if (!contact || contact.length > 60 || contact.length < 3) {
        showError("Вы не указали телефон/юзернейм, либо его длинна более чем 60 или менее 3-х символов.")
        return;
    }


    let order = {
        "contact": contact,
        "name": name,
        "product": pickedProduct,
        "promocode": promo,
    };

    const response = await fetch("/order/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(order)
    })

    if (response.ok) {
        setCookie("formSended", 1);
        showSuccess((await response.json()).message);

        document.getElementById('orderForm').style = "opacity: .3;pointer-events: none;";
        document.getElementById('orderH').innerHTML = `СПАСИБО, В ТЕЧЕНИ ЧАСА С <span class="h-colorized">ВАМИ СВЯЖЕМСЯ!</span>`;
    } else {
        showError("Где-то заело! Но мы уже чиним. Свяжитесь с нами в мессенджерах/по телефону/по почте, пожалуйста!");
    }
}

function setPicked(elem) {
    document.querySelectorAll('#shelf, #wardrobe, #safe, #dressing, #workbench').forEach((sw) => {sw.classList.remove('active');});

    elem.classList.toggle('active');

    pickedProduct = elem.id;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#shelf, #wardrobe, #safe, #dressing, #workbench').forEach((item) => {
        item.addEventListener('click', (e) => {
            setPicked(e.target);
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#switchPH, #switchTG').forEach((item) => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('#switchPH, #switchTG').forEach((sw) => {sw.classList.remove('active');});

            e.target.classList.toggle('active');
        })
    })
})

document.getElementById("submitOrderButton").addEventListener("click", sendForm)

window.setPicked = setPicked;
