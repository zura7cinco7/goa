/* 1) შექმენით ფუნქცია სახელად randomError , გამოიყენეთ math.random იმისათვის რომ დააგენერიროთ 1 ან 0, თუ ერთი იქნება არ გამოიწვიოთ ერორ თუ ნული შექმენით 
ახალი ერორ ობიექტი რომელსაც ისვრით */

const randomError = () => {
    const random = Math.floor(Math.random() * 2);

    try{
        if(random === 0){
            throw new Error('Error')
        }
    } catch (err){
        console.log('error', err.message);
    }
}

randomError();

/* 2) გამოიყანეთ buffer მოდული იმსათვის რ0ომ შექმნატ ხელოვნურად რაღაცა მეხსიერება 10 ადგილით და შეავსეთ ეგ მასივი სიმბოლოებით, შემდეგ კი გამოიყენეთ toString 
მეთოდი რომ რეალურ სტრინგად გარდაქმნათ, აგრეტვე გამოიყენეთ buffer მოდულის from მეთოდი იმსიასათვის რომ გაიგო კონკრეტულ სტრინგიში ყველა სიმბიოლოს კოდი 
(კომენტარებით ახსენით რა არის buffer და რა არიოს ორობითი  binaryმონაცემი) */

const buffer = Buffer.alloc(10, 'n');

const buffer2 = Buffer.from('Nino');
console.log(buffer.toString());
console.log([...buffer2]);

// buffer არის მოდული რომელსაც ვიყენებთ ორობითი მონაცემების შესანახად
// ორობიეთი მონაცემი არის მონაცემი რომელიც არის წარმოდგენილი bit - ებში ის შედგება ორი რიცხვისგან 0, 1

const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Error happened')
    } else{
        console.log('File read successfully:', data)
    }
});


const syncFs = fs.readFileSync('text.txt', 'utf-8');

console.log(syncFs);

console.log('Nino');

// fs მოდულის readFile მეთოდი არის ასინქრონიზირებული, რაც იმას ნიშნავს, რომ ის არ ელოდება იმას თუ როდის შესრულდება მაგალითად ფაილის წაკითხვა, ის 
// პირდაპირ უშვებს შემდეგ ხაზზე არსებულ კოდს ამ შემთხვევაში console - ში დაიბეჭდებოდა Nino და შემდეგ დაიბეჭდებოდა ის მნიშვნელობა რაც დააბრუნა readFile მეთოდმა
// რადგან ის არის ასინქრონიზირებული

// readFileSync არის სინქრონიზირებული მეთოდი რომელიც ჯერ ელოდება თუ როდის შესრულდება ფაილის წაკითხვა და შემდეგ უშვებს შემდეგ ხაზზე არსებულ კოდს

// სინქრონიზირებული არის ისეთი კოდი რომელიც ბლოკავს შემდეგ ხაზზე არსებულ კოდს
// ასინქრონიზირებული არის ისეთი კოდი რომელიც არ ბლოკავს შემდეგ ხაზზე არსებულ კოდს

process.stdin.on('data', (userinput) => {
    const input = userinput.toString().trim();

    if(input){
        fs.appendFile('./text.txt', '\n' + input, (err) => {
            if(err){
                console.log('Error happened')
            } else {
                console.log('succesful')
            }
        });
    }
})