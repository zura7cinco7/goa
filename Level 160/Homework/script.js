/* 1) დაა - import - ეთ 'events' module - ი, EventEmitter - ის დახმარებით შექმენით მოვლენა სახელად greet რომელსაც console ში გამოაქვს მისალმება მაგალითად 
'Hello თქვენი სახელი', emit - მეთოდის დახმარებით გამოიძახეთ (გამოიწვიეთ) greet მოვლენა

2) დაა - import - ეთ 'events' module - ი, შექმენით მოვლენა სახელად userJoined, რომელიც იღებს მომხმარებლის სახელს არგუმენტად და console ში გამოაქვს 
`User: ${username} has joined` გამოიყენეთ EventEmitter ობიექტში არსებული მეთოდი სახელად emit - ი იმისთვის რომ გამოიწვიოთ (გამოიძახოთ) მოვლენა */

const events = require('events');

const myEvents = new events.EventEmitter();

myEvents.on('greet', () => {
    console.log('Hello Nino');
})

myEvents.on('userJoined', (username) => {
    console.log(`User: ${username} has joined`);
})

myEvents.emit('greet');
myEvents.emit('userJoined', 'Nino');

/* 3) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ password - ი, იმ შემთხვევაში თუ მომხმარებელმა შემოიტანა 'securedPassword123' მაგ შემთხვევაში 
console - ში დაბეჭდეთ რომ Access granted სხვა შემთხვევაში კი, გამოუტანეთ Wrong password, process.stdout.write  - ის დახმარებით მომხმარებელს მოსთხოვეთ რომ 
გამოიცნოს (პაროლი) password */

process.stdout.write('Enter Password:');

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    if(input === 'securedPassword123'){
        console.log('Access granted');
        process.exit();
    } else {
        console.log('Wrong Password');
    }
});