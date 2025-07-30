/* 1) შემქენით დაულაგებელი სია html, მიანიჭეთ მას id და აირჩიეთ
ეგ სია getElementByIdის მეშვეობით, შემდეგ შექმენით ღილაკი, 
რომელზეც დაწკაპების შედეგად უნდა გამოიძახოთ promptფუნქცია, 
სადაც მომხმარებელს შემოატანინებთ პროდუქტის სახელს, 
საბოლოოდ createElement მეთოდის გამოყენებით შექმენით ა
ხალი li თეგი, რომელშიც ჩასვამთ მომხმარებლის
მიერ შემოტანილ ტექსტს და appendChild დაამატეთ li თეგი სიაში */

let ul = document.getElementById('unordered-list');
function appendInUl() {
    let productName = prompt('Enter Product name:');
    let li = document.createElement('li');
    li.textContent = productName;
    ul.appendChild(li);

    li.addEventListener('click',(event) => {
        ul.removeChild(event.target)
    })
};