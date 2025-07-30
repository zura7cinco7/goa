/* 1) მოიძიეთ map ეტოდის შესახებ ინფორმაცია და შექმენიტ მისი კოპიო ფუნქცია სახელად manualMap */
const manualMap = (arrayOfNumbers,callback) => {
    let res = [];
    for(let i = 0; i< arrayOfNumbers.length; i++){
        res.push(callback(arrayOfNumbers[i]));
    }
    return res
}
const numbers = [1,2,3,4,5,6,7,10,92,9];
const doubleTheNumber = manualMap(numbers, num => num * num)
console.log(doubleTheNumber);