const listProduct=[];
const listBasket=[];

function createProduct() {
    const container = document.getElementById("container");
    container.innerHTML= '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];     
        
        const productDiv = document.createElement("div");
        productDiv.classList.add("outer-div");

        // string template
        productDiv.innerHTML = `
        <div id="product-id-${product.id}" >${product.id}</div>
        <div class="btn-div">
            <img class="product-img" src="${product.image}">
                <div class="overlay">
                    <button class="btn-price" onclick="addProduct(this)" data-id="${product.id}">${product.price}- Add Basket</button>
                </div>
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <div class= "product-description">${product.description}</div>
        `;
        
        container.appendChild(productDiv);
        listProduct.push(product);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
    }
}


function addProduct(product) {
    const addedId = product.getAttribute("data-id");
    console.log(product.getAttribute("data-id"));
    listBasket.push(listProduct.find((item) => item.id == addedId));
    localStorage.setItem("listBasket", JSON.stringify(listBasket));
    console.log(listBasket);
}

createProduct();
function addNewProduct(){
    const titleInput= document.getElementById("productTitle");
    console.log(titleInput.value);
    let productName= titleInput.value;
    const descInput= document.getElementById("productDesc");
    console.log(descInput.value);
    let productDesc= descInput.value;
    const imgInput= document.getElementById("productImg");
    console.log(imgInput.value);
    let productImg= imgInput.value;
    const priceInput= document.getElementById("productPrice");
    console.log(priceInput.value);
    let productPrice= priceInput.value;

    const newProduct= new Product(products.length +1,productImg, productName, productDesc, productPrice);
    console.log(newProduct);
    products.push(newProduct);
    createProduct();

    titleInput.value='';
    descInput.value='';
    imgInput.value='';
    priceInput.value='';


}







