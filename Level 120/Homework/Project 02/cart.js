let products = [];

function addProductToTheCart(product){
    products.push(product);
    console.log(products)
}

module.exports = {addProductToTheCart,products};