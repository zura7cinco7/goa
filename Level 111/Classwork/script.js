let previousBtn = document.getElementById('PreviousBtn');
let img = document.querySelector('img')
let nextBtn = document.getElementById('NextBtn');
const imgArray = ['./Images/house1.jpg','./Images/house2.jpg','./Images/house3.jpg','./Images/house4.jpg'];
let index = 0;
imgArray.src = imgArray[index]
nextBtn.addEventListener('click',() => {
    if(index < imgArray.length - 1){
        index++;
    }else{
        index = 0;
    }
    img.src = imgArray[index];
});

previousBtn.addEventListener('click',() =>{
    if(index > 0){
        index--;
    }else{
        index = imgArray.length - 1
    }
    img.src = imgArray[index];
});

setInterval(() => {
    if (index < imgArray.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = imgArray[index];
}, 3000);


let form = document.getElementById('form');
let input = document.getElementById('input')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = input.value;
    console.log(inputValue);
    let ul = document.getElementById('Ul');
    let createdLiTag = document.createElement('li');
    createdLiTag.textContent = inputValue;
    ul.appendChild(createdLiTag)
});