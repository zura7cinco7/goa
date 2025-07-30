const p = document.getElementById('mainparagraph');
const mainbutton = document.getElementById('mainbutton');

let count = 0;

function increasebyone(){
    count ++;
    p.textContent = `Count: ${count}`
}

mainbutton.onclick = increasebyone;

const paragraph = document.getElementById('paragraph');
const btn = document.getElementById('btn');

let count2 = 200;

function decreasebyone(){
    count2 --;
    paragraph.textContent = `Count: ${count2}`
}

btn.onclick = decreasebyone;