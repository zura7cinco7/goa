/* async - ის გამოყენებით გააგზავნეთ მოთხოვნა https://jsonplaceholder.typicode.com/posts try catch - ით დარწმუნდით გამოიწვევს თუ არა ეს კოდი რაიმე 
error - ს, თუ გამოიწვევს catch - ის გამოყენებით console - ში გამოიტანეთ ეს error - ი */

const errorCatcher = async (link) => {
    try{
        const res = await fetch(link);
        const fetchData = await res.json();
        console.log(fetchData);
        
    }catch(err){
        console.log('Error',err)
    }
}

errorCatcher('https://jsonplaceholder.typicode.com/posts');


const {add,multiply,devision,subtaction} = require('./math.js');
console.log(add(10,5));
console.log(multiply(5,5));
console.log(devision(10,5));
console.log(subtaction(20,10));