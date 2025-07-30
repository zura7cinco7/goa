/* 1) შექმენით რიცხვების სია. გადაუარეთ მას forEach-ით. შეამოწმეთ თუ რიცხვი არის ლუწი დაბეჭდეთ "Number is even", სხვა შემთხვევაში "Number is Odd"

კომენტარებით ახსენით, ქმნის თუ არა forEach-ი ახალ ნასივს.

2) შექმენით ალფაბეტის სია.
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

გადაუარეთ მას map-ით და შექმენით ახალი სია, სადაც ჩაამატებთ alphabet სიიდან ყველა ლუწ ინდექსზე მყოფ სიმბოლოს

3) გადაუარეთ შემდეგ სიას filter მეთოდით:

const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "David", age: 28, occupation: "Developer" },
    { name: "Eva", age: 32, occupation: "Manager" }
];

და შექმენით ახალი სია, სადაც ჩაამატებთ იმ ობიექტებს, რომლის age კუთვნილებაც 30-ზე მეტია ან ტოლია. შემდეგ კი დაბეჭდეთ ეს სია. */
const numbers = [1,2,3,4,5];
    numbers.forEach(num =>{
        if(num % 2 === 0){
            console.log(`${num} is Even`)
        }else{
            console.log(`${num} is Odd`)
        }
});
         
// forEach - ი არ ქმნის ახალ მასივს

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const evenIndexLetters = alphabet.map((letterIndex, index) => 
    `${letterIndex} - ${index + 1}`
);

console.log(evenIndexLetters);

    const people = [
        { name: "Alice", age: 30, occupation: "Engineer" },
        { name: "Bob", age: 25, occupation: "Designer" },
        { name: "Charlie", age: 35, occupation: "Teacher" },
        { name: "David", age: 28, occupation: "Developer" },
        { name: "Eva", age: 32, occupation: "Manager" }
     ];

console.log(people.filter(person => person.age >= 30));



const myP = document.getElementById("paragraph");

let num = 0;

const increment = () => {
    num++;
    myP.textContent = num;
}

const paragraph = document.getElementById("decreaseP");

let num2 = 200;

const decrease = () => {
    num2--;
    paragraph.textContent = num2;
}