let btn = document.getElementById('btn');
let form = document.getElementById('toDOListForm');
let input = document.getElementById('input');
let ul = document.getElementById('toDoListUls');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valueOfInput = input.value;
    let li = document.createElement('li');
    li.textContent = valueOfInput;
    ul.appendChild(li);
    input.value = '';

    let createdBtn = document.createElement('button');
    li.appendChild(createdBtn);
    createdBtn.textContent = 'Delete';
    createdBtn.addEventListener('click',() => {
        ul.removeChild(li);
    });

    let createEditBtn = document.createElement('button');
    li.appendChild(createEditBtn);
    createEditBtn.textContent = 'Edit';
    createEditBtn.addEventListener('click',() => {
        let editLi = prompt('Edit Task');
        li.textContent = editLi
        li.appendChild(createdBtn);
        li.appendChild(createEditBtn);
    });
});