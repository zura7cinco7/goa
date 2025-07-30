/* შექმენით arrow ფუნქცია რომელსაც გადაცემთ 2 არგუმენტს, სახელი და ასაკი, სახელი და ასაკი მომხმარებელმა უნდა შემოიტანოს prompt ის მეშვეობით, 
შემდეგ ფუყნქციააში უნდა მოხდეს ასაკის შემოწმება თუ მომხმარებელის ასაკი >= 18 დააბრუნეთ რომ "ლუკა შენ შეგიძლია შესვლა შენობაში" 
სხვა შემთხვაში კი დააბრუნეთ რომ მომხმარებელს არ შეუძლია */
const user = (name,age) => {
    return age >= 18 ? `${name} you can enter!`:`${name} you cant enter`
}

const name = prompt('Enter your Name:');
const age = parseInt(prompt("Enter your age:"))

console.log(user(name,age))


const addTwoNumbers = (num1,num2) => {
    console.log(num1 + num2)
}

addTwoNumbers(5,10)

const isItPositive = (number) => {
    if(number > 0){
        console.log('true')
    }else{
        console.log('false')
    }
}

isItPositive(-1)

const firstCharachter = (string) => {
    console.log(string[0])
}

firstCharachter('Hello World!')

const doubleNumber = (num) => {
    console.log(num ** 2)
}

doubleNumber(7)


const greet = (name) => {
    console.log( `Hello ${name}`);
}

greet('Nino');