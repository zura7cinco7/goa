let btns = document.getElementsByClassName('btn1');
let submitBtn = document.querySelector('.submit');
let div = document.querySelector('.selection-div');
let chosenElementBtn = '';

for(let i = 0; i< btns.length; i++){
  btns[i].addEventListener('click',() => {
    chosenElementBtn = btns[i].textContent;
    console.log(chosenElementBtn)
  });
}

function nextInfo(){
let newDiv = document.createElement('div');
document.body.innerHTML = "";
newDiv.innerHTML = `
    <div class="main2">
      <div class="image-div">
        <img src="images/illustration-thank-you.svg" class="img2">
      </div>
      <div class="info1">
          <div class="selection">
          <div class="selection-div">You selected ${chosenElementBtn} out of 5</div>
      </div>
      <h2 class="h2-2">Thank you!</h2>
      <p class="paragraph2">We appreciate you taking the time to give a <br>rating. If you ever need more support, 
        don’t<br>hesitate to get in touch!</p>
      </div>
`;

document.body.appendChild(newDiv);
};
