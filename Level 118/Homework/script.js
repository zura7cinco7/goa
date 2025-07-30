/* 2) შექმენით ცვლადი სახელად coffeeOrder (ყავის შეკევთა) სადაც თქვენ შეინახავთ new Promise - ს რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმნით 
მეორე ცვლადი სახელად isorderSuccessful რომლშიც შეინახავთ Boolean მნიშვნელობას true ან false შეამოწმეთ if statment - ის გამოყებით თუ isorderSuccessful 
ცვლადში ინახება true მაშინ გამოიძახეთ resolve ფუნქცია რომელშიც დაწერთ,რომ 'Your Coffee is Ready' (თქვენი ყავა მზადაა) სხვა შემთხვევაში თუ თქვენი isorderSuccessful 
ცვლადი ინახავს false მნიშვნელობას მაშინ გამოიძახეთ reject ფუნქცია რომელშიც დაწერთ, რომ 'Your order had been declined', coffeeOrder - ს დაუმტეთ then მეთოდი 
რომელიც დაბეჭდავს console - ში, რომ 'Your Coffee is Ready' სხვა შემთხვევაში კი გამოიტანეთ, რომ 'Your order had been declined' catch - მეთოდის გამოყენებით */

const coffeeOrder = new Promise((resolve,reject) => {
    const isorderSuccessful = true;
    if(isorderSuccessful){
        resolve('Your Coffee is Ready');
    }else{
        reject('Your order had been declined');
    }
});

coffeeOrder.then(message => console.log(message));
coffeeOrder.catch(reject => console.log(reject));

/* 3) შექმენით ცვლადი სახელად fileDownload (ფაილის გადმოწერა) შეინახაეთ აქაც new Promise რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject),შექმენით 
მეორე ცვლადი hasInternet (აქვს ინტერნეტი) რომელსაც გაუტოლებთ Boolean მნიშვნელობას ან true - ს ან false, შექმნეით setTimeout რომელშიც უნდა შეამოწმოთ, 
თუ ჩვენ მიერ შემნილი hasInternet ცვლადის მნიშვნელობა უდრის true - ს მაშინ resolve ფუნქციას გადაეცით, 'File Downloaded successfully', სხვა შემთხვევაში 
თუ hasInternet ცვლადის მნივნელობა უდრის false - მნიშვნელობას მაშინ reject ფუნქციას გადაეცით 'Check Your Internet Connection' ეს ყველაფერი უნდა მოხდეს 
2000 ms - ში (2 წამში), fileDownload - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ 'File Downloaded successfully' სხვა შემთხვევაში კი 
გამოიტანეთ, რომ 'Check Your Internet Connection' catch - მეთოდის გამოყენებით */

const fileDownload = new Promise((resolve,reject) => {
    const hasInternet = false;
    setTimeout(() => {
        if(hasInternet){
            resolve('File Downloaded successfully');
        }else{
            reject('Check Your Internet Connection')
        }
    },2000)
});

fileDownload.then(internetConnection => console.log(internetConnection));
fileDownload.catch(error => console.log(error));

/* 4) შექმენით ცვლადი სახელად checkPassword (პაროლის შემოწმება) აქაც წინა დავალებების მსგავსად უნდა შეინახოთ new Promise რომელსაც გადასცემთ ორ ფუნქციას 
(resolve,reject), შექმენით ორი ცვლადი correctPass, enteredPass რომლებსაც გადასცემთ თქვენთვის სასურველ მნიშვნელობებს თქვენი დავალებაა, რომ შეამოწმოთ, 
თუ ჩვენ მიერ შეყვანილი Password რომელიც ინახება enteredPass - ში, უდრის correctPass (სწორ პაროლს) მაშინ resolve ფუნქციას გადაეცით 'Access granted' 
სხვა შემთხვევაში კი reject ფუნქციას გადეცით 'Access Denied Try again later', checkPassword - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ
'Access granted' სხვა შემთხვევაში კი გამოიტანეთ, რომ 'Access Denied Try again later' catch - მეთოდის გამოყენებით */

const checkPassword = new Promise((resolve,reject) => {
    const correctPass = '1234abc';
    const enteredPass = '54321cba';
    if(enteredPass === correctPass){
        resolve('Access granted');
    }else{
        reject('Access Denied Try again later');
    }
});

checkPassword.then(accessGranted => console.log(accessGranted));
checkPassword.catch(accessDenied => console.log(accessDenied));

/* 5) შექმენით ცვლადი სახელად shoppingCart (კალათა)  აქაც წინა დავალებების მსგავსად უნდა შეინახოთ new Promise რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), 
შექმენით ორი ცვლადი cartItems რომელიც უდრის პროდუქტების სიას,შექმენით მეორე ცვლადი სახელად requestedItem (მოთხოვნილი ნივთი/პროდუქტი), შეამოწმეთ თუ 
cartItems - სიაში არსებობს requestedItem - ი (მოთხოვნილი ნივთი/პროდუქტი) მაშინ resolve ფუნქციას გადაეცით `${requestedItem} is available at the moment` 
(თქვენი მოთხოვნილი ნივთი/პროდუქტი ამ ეტაპზე ხელმისაწვდომია), სხვა შემთხვევაში კი reject ფუნქციას გადაეცით `sorry we dont have the ${requestedItem}` 
shoppingCart - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ `${requestedItem} is available at the moment` სხვა შემთხვევაში კი გამოიტანეთ, რომ 
`sorry we dont have the ${requestedItem}` catch - მეთოდის გამოყენებით */

const shoppingCart = new Promise((resolve,reject) => {
    const cartItems = ['apple','strawberry','mango'];
    const requestedItem = 'apple';

    if(cartItems.includes(requestedItem)){
        resolve(`${requestedItem} is available at the moment`)
    }else{
        reject(`sorry we dont have the ${requestedItem}`)
    }
});

shoppingCart.then(available => console.log(available));
shoppingCart.catch(notAvailable => console.log(notAvailable));

/* 6) შექმენით ცვლადი სახელად alarm (მაღვიძარი) აქაც წინა დავალებების მსგავსად უნდა შეინახოთ new Promise რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმენით 
ერთი ცვლადი სახელად currentTime რომელშიც შეინახავთ დღევანდელი დღის საათს (მინიშნება უნდა გამოიყენეოთ Date ობიექტი new Date().getHours()), შექმენით მეორე 
ცვლადი სახელად wakeUpTime რომელშიც დაწერთ იმ დროს რომელ დროსაც გინდათ, რომ დარეკოს მაღვიძარამ (alarm), შეამოწმეთ თუ currentTime - ის მნიშვნელობა უდრის 
wakeUpTime - ის მნიშვნელობას მაშინ resolve ფუნქციაში დაწერეთ 'Wake up it is time to start the day', სხვა შემთხვევაში კი reject ფუნქციას გადაეცით 
'You can sleep a bit longer', alarm - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ 'Wake up it is time to start the day' სხვა შემთხვევაში 
კი გამოიტანეთ, რომ 'You can sleep a bit longer' catch - მეთოდის გამოყენებით */

const alarm = new Promise((resolve,reject) => {
    const currentTime = new Date().getHours();
    const wakeUpTime = 2

    if(currentTime === wakeUpTime){
        resolve('Wake up it is time to start the day');
    }else{
        reject('You can sleep a bit longer');
    }
});

alarm.then(wakeUpTime => console.log(wakeUpTime));
alarm.catch(notWakeUpTime => console.log(notWakeUpTime));