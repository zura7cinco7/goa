// ### ✅ **დავალება 1: ღილაკზე დაჭერით ელემენტის დამატება**  **დონე:** მარტივი  **აღწერა:**  შექმენი ღილაკი, რომელზე დაჭერისას გვერდზე ჩნდება 
// ახალი პარაგრაფი (მაგ. "ახალი ელემენტი დამატებულია").  **ფუნქციონალი:**  - დინამიკური HTML ელემენტების შექმნა JavaScript-ით  - DOM-თან მუშაობა
let div = document.querySelector('#div1');
function CreateElement(){
    let p = document.createElement('p');
    p.textContent = 'This paragraph is added';
    div.appendChild(p);
};

// ✅ დავალება 2: შემთხვევითი ციტატების გენერატორიდონე: მარტივი/საშუალოაღწერა:შექმენი ღილაკი "მიჩვენე ციტატა", რომელზე დაჭერისას ეკრანზე 
// ჩანს შემთხვევითი ციტატა შენახული სიიდან.ფუნქციონალი:მასივი ციტატებით Math.random() გამოყენება DOM update
let div2 = document.querySelector('#div2')
function addQuote(){
    const array = ['Hello','Hello World','Hi'];
    let random = Math.floor(Math.random() * array.length);
    let p2 = document.createElement('p');
    p2.textContent = array[random];
    div2.appendChild(p2)
    return array[random];
};

// ✅ დავალება 3: სლაიდშოუ / სურათების გალერეადონე: საშუალო აღწერა:გააკეთე სურათების სლაიდშოუ ღილაკებით "შემდეგი" და "წინა", 
// რომელთა დახმარებით გადაერთები ფოტოებზე.ფუნქციონალი:მასივი ფოტოებით index კონტროლი სურათის src-ის ცვლა

let Img = document.getElementById('img1');
const imagesArry = ['./Images/CSS HTML JAVASCRIPT.png','./Images/CSS.png','./Images/HTML.jpg','./Images/JS.avif'];
let index = 0;
function slider(Index) {
    if(index + Index >= 0 && index + Index < 4){
        index += Index;
        Img.src = imagesArry[index];
    }
}

// ✅ დავალება 4: დინამიკური ელემენტის სტილის შეცვლა დონე: საშუალო/რთული აღწერა: შექმენი ღილაკი, რომელზე დაჭერისას ეკრანზე არსებული 
// ელემენტი (მაგ. კვადრატი) ცვლის ფერს, ზომას ან პოზიციას შემთხვევითად. ფუნქციონალი: JavaScript-ით CSS სტილების ცვლაშემთხვევითი ფერების გენერაცია 
// ანიმაციები (სურვილისამებრ)
let ChangeColorBtn = document.querySelector('.changeElemetsStyle');
let div4 = document.querySelector('.div4')
const colors = ['red','green','yellow','blue','purple','orange','']
ChangeColorBtn.addEventListener('click',() => {
    let random = colors[Math.floor(Math.random() * colors.length)];
    div4.style.backgroundColor = random
});

// ✅ დავალება 5: კარუსელი ციფრებით (Counter App) დონე: რთული აღწერა: შექმენი ციფრების კარუსელი, რომელიც ყოველ 3 წამში ცვლის ეკრანზე ნაჩვენე
//  რიცხვს 0-დან 9-მდე, ციკლურად. ფუნქციონალი: setInterval DOM update ლუწ/კენტ რიცხვებზე განსხვავებული სტილი

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;
let createdDiv = document.createElement('div');
let changeStyle = createdDiv.style.backgroundColor = 'skyblue';
let changeHeight = createdDiv.style.height = '50px';
let centerText = createdDiv.style.textAlign = 'center';
let fontSize = createdDiv.style.fontSize = '24px';
let color = createdDiv.style.color = 'white';
setInterval(() => {
    createdDiv.textContent = numbers[count];
    document.body.appendChild(createdDiv)
    count++;
    if (count === numbers.length) {
        count = 0;
    }else if(count % 2 === 0){
        createdDiv.style.backgroundColor = 'purple'
    }else{
        createdDiv.style.backgroundColor = 'skyblue';
    }
}, 3000);