fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((value) => {
        productArr = value;
        render(value);
    });
    
// fetch - server - იდან ინფორმაციის წამოღება

let mainTag = document.getElementById('mainTag');
let selectTag = document.getElementById('selectTag');
const categories = ["electronics","jewelery","men's clothing","women's clothing"];
let productArr = [];

function render(productArray){
    mainTag.innerHTML = "";
    for(product of productArray){
        mainTag.innerHTML += `
        <section id='${product.id}'>
            <h2>Product Title: ${product.title}</h2>
            <img width='200px' src='${product.image}'/>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
        </section>
        `
    }
}

selectTag.addEventListener('change', (e) => {
    let category = e.target.value;
    const filterCategories = productArr.filter(product => product.category === category);

    render(filterCategories);
});