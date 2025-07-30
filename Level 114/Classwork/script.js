/* ) შექმენით ფუნქცია სახელად copyObj რომელსაც გადაეცემა ორი მნიშვნელობა საწყისი ობიექტი და დასაკოპირებელი ობიექტი, თქვენი დავალებაა დააკოპიროთ ყველა 
კუთხვნილება for in ის გამოყენებით და ჩასვათ პირველი ობიექტში, საბოლოოდ დააბრუნეთ ეგ ობიექტი */

function copyObj(obj,copyObj){
    for(let i in copyObj){
        obj[i] = copyObj[i]
    }

    return obj;
};

const finalObj = copyObj({},{name:'Nino',Lastname:'Gvinjilia'});

/* 2) როდესაც ფუნქცია დააბრუნებს ობიექტს, მაგ ობიექტიდან destruction (დესტრუქციის მეშვეობით ამოიღეთ მნიშვლებობი) */

const {name,Lastname} = finalObj;

console.log(name,Lastname);


// 3) გამოიყენეთ Object.assign და გატესტეთ მისი მუშაობა

let newObj = { 'favorite color' : 'orange'};
let result = Object.assign({}, { name: 'Anastasia', Lastname: 'Gvinjilia' }, newObj);

console.log(result);
console.log(finalObj);

/* 4) გამოიყენეთ მასივის და ობიექტის დესტრუქცია, ახსენით კომენტარებით როგორ მუშაობს თითოეული, აგრეთვე გამოიყენეთ ობვიექტის დესტრუქცისს შემთხვევაში სახელის 
შეცვლა და აგრეთვე გატესტეთ როგორ მუშოაბს ქარხნულკი მნიშვნელობები */

const numbers = [1,2,3,4,5,6];

const [first,second,third] = numbers; // first,second,third - ის 
// ადგილას ინახება რიხვები first - ზე 0 ინდექსზე მყოფი რიცხვი 
// second - ზე 1 ინდექსზე მყოფი რიცხვი და third - ზე 2 ინდექსზე მყოფი 
// რიცხვი
console.log(first);
console.log(second);
console.log(third);

const numbersArray = [1,5];
const [firstArrayNum = 10,secondArrayNum = 20,thirdArrayNum = 30] = numbersArray;
console.log(firstArrayNum,secondArrayNum,thirdArrayNum);

const user = {
    name: 'Lizi',
    surname: 'Gvinjilia'
}

const {name: Name, surname} = user;
console.log(Name,surname);