const form = document.querySelector('form');
const table = document.querySelector('table');
const users = [];
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const randomId = Math.random().toString(36).slice(2);

    let email = e.target.elements.email.value;
    let name = e.target.elements.name.value;
    let password = e.target.elements.password.value;
    let id = randomId;

    if(users.find(user => user.email === email || user.password === password)){
        alert('This student is already registered');

        form.reset();
        return;
    }

    if(name === '' || email === '' || password === ''){
        alert('Please fill all of the Fields');
        return;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

    function isValidPassword(pass) {
        let hasAlphabet = false;
        let hasDigits = false;
        let hasPunctuation = false;

        for(let i = 0; i < pass.length; i++){
            if(alphabet.includes(pass[i])){
                hasAlphabet = true;
            }

            if(digits.includes(pass[i])){
                hasDigits = true;
            }

            if(punctuationChars.includes(pass[i])){
                hasPunctuation = true;
            }
        }

        return hasAlphabet && hasDigits && hasPunctuation
    }

    if(!isValidPassword(form.password.value)){
        alert("Pass must contain one digit, punctuation and alphabet");
        form.reset();
        return;
    }

    let nameCell = document.createElement('td');
    let emailCell = document.createElement('td');
    let passCell = document.createElement('td');
    let idCell = document.createElement('td');
    let row = document.createElement('tr');

    nameCell.textContent = name;
    emailCell.textContent = email;
    passCell.textContent = password;
    idCell.textContent = id;


    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(passCell);
    row.appendChild(idCell);

    table.appendChild(row);

    const user = {
        name: name,
        email:  email,
        password: password
    }

    users.push(user);
    console.log(users);
});