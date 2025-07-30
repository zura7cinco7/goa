function increase(num1,num2,num3,num4,num5){
    return (num1+num2+num3+num4+num5) / 5
}

console.log(increase(1,2,3,4,5))

const averagesum = (num1,num2,num3,num4,num5) => (num1+num2+num3+num4+num5) / 5

console.log(averagesum(1,2,3,4,5))

function user(){
    let userName = prompt('Enter Your Name');
    let UserSurname = prompt("Enter Your Surname");
    let Userage = prompt('Enter your age');
    console.log(`Your Name Is ${userName} Your Surname Is ${UserSurname} Your age is ${Userage}`)
}

user();

const arrowFunction = (price,quantity = 1) => price * quantity
console.log(arrowFunction(20,100));
console.log(arrowFunction(20));

/* function userInfo(){
    let name = 'Nino';
}

userInfo();
console.log(name); */

/* console ში არაფერი არ დაბეჭდილა რადგან ჩვენ ცვლადი დავბეჭდეთ 
ფუნქციის გარეთ */

/*function userInfo(){
    var name = 'Nino';
}

userInfo();
console.log(name);*/

/* აქაც ანალოგიურად console ში არაფერი არ დაბეჭდილა მიუხედავად
იმისა რომ var keyword მუშაუბს განსხვავებულად */