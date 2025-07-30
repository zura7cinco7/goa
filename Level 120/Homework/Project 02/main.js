const {addProductToTheCart,products} = require('./cart');
addProductToTheCart('apple');

const {add,subtraction,multiply,devision} = require('./math');
console.log(add(10,5));
console.log(subtraction(20,5));
console.log(multiply(2,5));
console.log(devision(25,5));

const roundTheNumber = require('./roundTheNumber');
console.log(roundTheNumber(15.5));

const greetUser = require('./greetUser');
console.log(greetUser('Nino'));