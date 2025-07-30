/* 3) შექმენით ვებ-გვერდი სადაც მომხმარებელმა უნდა გამოიცნოს რიხვი 1-20 - ის ჩათვლით, შექმენით ერთი ცვლადი სადაც თქვენ შეინახავთ random რიცხვს 1-20-ის 
ჩათვლით გააკეთეთ ეს Math.random() - ის გამოყენებით, უნდა გქონდეთ ერთი შესაყვანი ველი სადაც მომხმარებელი შემოიტანს გამოსაცნობ რიცხვს ამ შესაყვან ველს უნდა 
ქონდეს ვალიდაცია,თუ მომხმარებელი შემოიყვანს რიცხვს რომელიც 20 - ს გადასცდა მაშინ alert - ის საშუალებით გამოუტანეთ, რომ "Number is Too high Try again"  თუ 
რიცხვი არის 20 - ზე ნაკლები alert - ის დახმარებით მომხმარებელს აცნობეთ, რომ "Number is Too low Try again" სხვა შემთხვევაში აცნობეთ, რომ მან გამოსაცნობი რიცხვი 
გამოიცნო და დაუწერეთ თუ რამდენი მცდელობა დასჭირდა random რიცხვის გამოსაცნობად. მომხმარებლს ექნება 10 მცდელობა, თუ ეს მცდელობები დაიხარჯა გამოუტანეთ 
"You have reached the maximum attempts" submit - ღილაკზე დაკლიკებისას შეტანილი ინფორმაცია უნდა გასუფთავდეს რადგან მომხმარებელმა ხელახლა შემოიტანოს გამოსაცნობი 
რიცხვი. */

const randomNum = Math.floor(Math.random() * 20 + 1);
console.log(randomNum);
let userAttempts = 1;
let maxAttempts = 10;

const form = document.querySelector('form');
const p = document.getElementById('resultText');
const div = document.getElementById('result');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let userNum = form.number.value;
    

    if(userAttempts === maxAttempts){
        alert('You have reached the maximum attempts');
        form.reset();
        return;
    };

    if(userNum > randomNum){
        alert('Number is Too high Try again');
        form.reset();
        userAttempts++;
        return;
    };

    if(userNum < randomNum){
        alert('Number is Too low Try again');
        form.reset();
        userAttempts++;
        return;
    };
    
    if(userAttempts === 1){
        p.textContent = `You Have Guessed The Random Number It Took You ${userAttempts} Attempt`;
        div.appendChild(p);
    }else{
        p.textContent = `You Have Guessed The Random Number It Took You ${userAttempts} Attempts`;
        div.appendChild(p);
    };
});