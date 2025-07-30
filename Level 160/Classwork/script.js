/* 1) დააიმპორტეთ events მოდული, დაიმპორტების შემდეგ ახსენით რას წარმოადგენს ის და რაში შეიძლება ამ მოდულის გამოყენება, შემდეგ გამოიყენეთ მაგ მოდულში 
არსებული კლასი EventEmitter, რომ შექმნათ მოვლენის გამომწვევი ობიექტი, შეინახეთ ის კონსტანტაში სახელად myEvents, ამ ობიექტით შექმენით 2 მოვლენა click and 
submit ორივე მოვლენა გამოიწვიეთ emit მეთოდით, აგრეთვე კომენტარებით ახსენით რა არის on და emit მეთოდები */

const events = require('events');

// events მოდულის გამოყენება შეგვიძლია მაშინ როდესაც გვინდა რომ შევქმნათ მოვლენა და emit - ის გამოყენებით გამოვიწვიოთ ის

const myEvents = new events.EventEmitter();

myEvents.on('click', (num1, num2) => { // on მეთოდის დახმარებით ჩვენ ვუსმენთ გადმოცემულ მოვლენას ამ შემთხვევაში click - ს
    console.log('button clicked')
    console.log(num1 + num2)
})

myEvents.on('submit', () => {
    console.log('form submitted')
})


myEvents.emit('click', 5, 10); // emit მეთოდის გამოყენებით ჩვენ შეგვიძლია რომ გამოვიწვიოთ მოვლენა ამ შემთხვევაში ჩვენ გამოვიწვიეთ click მოვლენა 
// რის შედეგადაც console - მა გამოგივიტანა მნიშვნელობა - button clicked
myEvents.emit('submit');

let sum = 0;

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    if(input === 'exit'){
        console.log(sum);
        process.exit();
    }

    sum += parseInt(input);
});