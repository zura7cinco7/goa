const userNum = parseInt(prompt("Enter The Time in Seconds"));
let time = 0;
const timer = setInterval(function(){
    time++;
    console.log(`${time} seconds`);
    if(time === userNum){
        clearInterval(timer);
        console.log('Time is Out')
    }
},1000)


const p = document.querySelector("p");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let id = null;
let second = 0;

startBtn.addEventListener("click", () => {
    id = setInterval(() => {
        second++;
        p.textContent = `Time: ${second}`;
    }, 1000) 
});

pauseBtn.addEventListener("click", () => {
    clearInterval(id);
});

resetBtn.addEventListener("click", () => {
    second = 0;
    p.textContent = `Time: ${second}`;
});