import { User } from "./module/user.model.js";
import {store , get } from "./database/localStorage.js";

const users = get('users');
const form = document.getElementById('RegistrationForm');
const form1 = document.getElementById('logIn');
const section = document.getElementById('section3');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    let username = form.username.value;
    let email = form.email.value;
    let password = form.password.value;

    const user = new User(username,email,password);
    users.push(user);
    store('users',users)
    form.reset();
});

form1.addEventListener('submit',(e) => {
    e.preventDefault();

    let username1 = form1.username.value;
    let email1 = form1.email.value;
    let password1 = form1.password.value;
    let password2 = form1.password1.value;

    if(password1 !== password2){
        alert('Passwords do not match')
    }
    const equal = users.find(user => user.username === username1 && user.email === email1 && user.password === password1);

    if(equal){
        section.innerHTML = `
            <h2>Profile</h2>
            <p>Username: ${equal.username}</p>
            <p>Email: ${equal.email}</p>
            <p>ID: ${equal.id}</p>
        `
    }else{
        alert('Incorrect information')
    }
});