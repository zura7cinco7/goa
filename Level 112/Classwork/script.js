/* შექმენით ფორმა, რომელშიც მომხარებელს შემოატანინებთ ემაილს და პაროლს.

დაამატეთ ვალიდაცია. მომხარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ რომელიმე input-ი არის ცარიელი. ამ შემთხვევაში გამოუტანეთ alert მესიჯი "Please fill out all fields".

დაამატეთ ემაილის ვალიდაცია.

თუ მომხმარებელმა მონაცემები სწორად შეიყვანა გამოიტანეთ ისინი კონსოლში და გაასუფთავეთ ფორმა */

let btn = document.getElementById('btn');
let form = document.querySelector('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    
    if(email === '' || password === ''){
        alert('Please fill all the fields');
        return;
    }

    else if(email.length < 14 || !email.includes('@')){
        alert('Your Email Should Include @')
    }else{
        console.log(email);
        console.log(password);
    }

    e.target.reset();
});
