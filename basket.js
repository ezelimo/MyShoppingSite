const listBasketJson = localStorage.getItem("listBasket");
const listBasket = JSON.parse(listBasketJson);



function addBasket() {
    const container = document.getElementById("basket-container");
    for (let i = 0; i < listBasket.length; i++) {
        const addedProduct = listBasket[i];

        const productBasketDiv = document.createElement("div");
        productBasketDiv.classList.add("outer-basket-div");

        // string template
        productBasketDiv.innerHTML = `
        <div class="outer-div">
        <div class="btn-div">
            <img class="product-img" src="${addedProduct.image}">
                <div class="overlay">
                    <button class="btn-price">${addedProduct.price}- Add Basket</button>
                </div>
            </div>
        <div class="product-name">${addedProduct.name}</div>
        <div class= "product-price">$${(Number(addedProduct.price)).toFixed(2)}</div>
        </div>
        `;

        container.appendChild(productBasketDiv);
    }

}

addBasket();