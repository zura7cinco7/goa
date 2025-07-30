let mainTag = document.querySelector('main');
let header = document.querySelector('header');
let products = [];
let cartProducts = [];

const render = async(productsArr) => {
    mainTag.innerHTML = "";
    
    for(const product of productsArr) {
        mainTag.innerHTML += `
            <section id='${product.id}'>
                <h2>${product.title}</h2>
                <img width='200' src='${product.image}'/>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick=addToCart(${product.id})>Add To Cart</button>
            </section>

            <hr />
        `
    }
}

const renderCart = async() => {
    header.innerHTML = "";
    header.innerHTML += `<h2>Cart Products</h2>`;
    for(let product of cartProducts){
        header.innerHTML += `
        <section style="background-color:grey">
            <h2>${product.title}</h2>
            <img width="200px" src="${product.image}" />
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
        </section>
        `
    }
}

const addToCart = async(productUniqueId) => {
    let product = products.find(product2 => product2.id === productUniqueId);
    if (product) {
        cartProducts.push(product);
        renderCart();
    }
}


const link = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        products = data;
        render(products)
        console.log(data)
    }catch(err){
        console.log('Error',err)
    }
}

link('https://fakestoreapi.com/products/');