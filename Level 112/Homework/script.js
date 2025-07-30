let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    let username = e.target.elements.name.value;

    let userInfoObj = {
        'Email' : email,
        'Password' : password,
        'User Name': username
    }

    const array = []

    if(email === '' || password === '' || username === ''){
        alert('Please Fill All Of The Fields');
        return;
    }else if(email.length < 14 || email.at(-10) !== '@'){
        alert('Your Email Should Include @');
        return;
    }else if(password.length < 4){
        alert('Password Should Have At Least 5 Charachters');
        return;
    }else if(username.length < 3){
        alert('Name Should Have More than 3 Charachters');
        return;
    }else{
        array.push(userInfoObj);
        console.log(array)
    }

    e.target.reset();
});


// at მეთოდი იღებს index - ს და ამის მიხედვით ის პოულობს string ში 
// ელემენტს გადმოცემული index - ის მიხედვით