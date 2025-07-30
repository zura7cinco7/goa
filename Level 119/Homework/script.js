/* 1) შექმენით website - ი სადაც თქვენ გექნებათ პრუდუქტები, fetch - ის გამოყენებით ლინკზე https://fakestoreapi.com/products/ გააგზავნეთ მოთხოვნა, ამ ლინკიდან 
ტექსტური მონაცემი გადააქციეთ javascript - ის ობიექტად json - ფორმატის გამოყენებით რომელითაც თქვენ შეგეძლებათ მის კუთვნილებებზე და მნიშვნელობებზე წვდომის 
მიღება, საიტზე უნდა გქონდეთ ერთი `<main></main>` თეგი რომლეზეც მიიღებთ წვდომას და მასში გამოიტანთ პროდუქტების სიას, ასევე უნდა დაწეროთ კოდი რომელიც 
ამ https://fakestoreapi.com/products/ ლინკიდან ყველა პროდუქტის ინფორმაციას როგორიცაა (image,description,title,price) გამოიტანს website - ზე, თქვენი დავალებაა, 
რომ თითოეულ პროდუქტზე დაამატოთ ღილაკი `<button></button>` რომელზე დაჭერისას პროდუქტი ყოველ ჯერზე უნდა დაემატოს ერთ მასივში სახელად ``products = []`` 
რომელიც თავიდან არის ცარიელი, ამ ღილაკზე დაჭერისას თქვენ website - ზე უნდა გამოიტნოთ კონკრეტული product - ი რომელიც დაემატა მასივში, შექმენით ერთი კალათა 
website - ის დასაწყისში, პროდუქტის ღილაკზე დაჭერისას თქვენი პროდუქტი უნდა დაემატოს ამ კალათაში რომლის უკანა ფერი იქნება ნაცრისფერი (gray), ეს პროდუქტი 
უნდა დაემატოს თავისი (image,description,title,price) - ით */

let mainTag = document.querySelector('main');
let header = document.querySelector('header');
let products = [];
let cartProducts = [];

function render(productsArr) {
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

function renderCart(){
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

function addToCart(productUniqueId){
    let product = products.find(product2 => product2.id === productUniqueId);
    if (product) {
        cartProducts.push(product);
        renderCart();
    }
}


fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((info) => {
        products = info;
        render(products)
});