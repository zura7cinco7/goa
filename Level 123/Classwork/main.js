/* 1) შექმენით 1  html ის ფაილი და 3 ჯავასკრიპტის, mathFunctions, renderFunctions და  main, პირველ ფაილში შექმენით 4 მათემატიკური ფუნქცია მიმატება,
გამოკლება და ასშ და გააკეთეთ მათი named export, ხოლო renderFunctions შექმენით ფუნქცია სახელად render რომელსაც გადაეცემა  2 არგუმენტი, 1 html ის 
ობიექტი სადაც გინდა რომ გამოიტანო შედეგი და მეორე მნიშვნელობა რომელიც გინდა რომ ჩასვა პირველ html ის ელემენტში გამოიყენეთ export default, index.html 
ში შექმენით 2 input ორივეში შეიტანეთ რიცხვი და აგრეთვე 4 ღილაკი +, -, *, /, რომელზეც დაკლიკების შედეგად უნდა შესრულდეს შესაბამისი ფუნქცია, 
მოვლენის მსენელი და მთავარი ლოგიკა დაწერეთ main.js ში */
import { add, divide, multiply, subtract } from "./mathFunctions.js";
import render from "./renderFunctions.js";

const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const operation = e.submitter.textContent;

    const num1 = parseInt(form.num1.value);
    const num2 = parseInt(form.num2.value);

    switch (operation) {
        case "+":
            render(p, add(num1, num2));
            break;
        case "-":
            render(p, subtract(num1, num2));
            break;
        case "*":
            render(p, multiply(num1, num2));
            break;
        case "/":
            render(p, divide(num1, num2));
            break;
        default:
            render(p, "Operation is invalid");
            break;
    }
});