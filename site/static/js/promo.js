function applyPromocode() {
    document.querySelectorAll('.product-price').forEach((e) => {
        let newPrice = parseInt(e.getAttribute("price")) * 0.85;

        e.innerHTML = `
            ${e.innerHTML} 
            <span class="act-product-price" style="
            "> От ${Math.floor(newPrice / 1000)}.${parseInt(newPrice%1000)} ₽</span>
        `;
        e.querySelector('.act-product-price').style.textDecoration = 'line-through';
        e.querySelector('.act-product-price').style.opacity = .5;
    })
}
