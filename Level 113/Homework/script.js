const registrationForm = document.querySelector("#registration"); // იქმნება ერთი ცვლადი სახელად registrationForm რომელიც იღებს წვდომას ფორმაზე რომლის Id 
// არის registration ამ ელემენტზე წვდომას ვიღებთ querySelector - ის გამოყენებით
const signinForm = document.querySelector("#signin"); // იქმნება ერთი ცვლადი სახელად signinForm რომელიც იღებს წვდომას მეორე ფორმაზე რომლის Id - ი არის 
// signin ამ ელემენტზე წვდომას ვიღებთ querySelector - ის გამოყენებით

const users = []; // ვქმნით ახალ მასივს სადაც შევინახავთ მომხმარებლის ინფორმაციას როგორიცაა Email - ი password - ი და repeated - იგივე განმეორებითი password - ი

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // იქმნება ცვლადი const - ით სახელად alphabet რომელიც ინახავს ასოებს იმისთვის,
// რომ შევამოწმოთ შეიცავს თუ არა ჩვენი პაროლი რაიმე ასოს
const digits = "0123456789"; // იქმნება ცვლადი const - ით სახელად digits რომელიც ინახავს რიცხვებს რადგან შევამოწმოთ შეიცავს თუ არა ჩვენი password - ი 
// რაიმე რიცხვს
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`; // იქმნება ცლადი const - ით სახელად punctuationChars რომელიც ინახავს პუნქტუაციის სიმბოლოებს
// იმისთვის რომ შევამოწმოთ შეიცავს თუ არა password - ი რაიმე პუნქტუაციის სიმბოლოს

function isValidPassword(pass) { // ვქმნით ფუნქციას სახელად isValidPassword რომელიც არგუმენტად იღებს პაროლს password
    let hasAlphabet = false; // შექმნილი არის ცვლადი let keyword ის გამოყენებით რომლის სახელია hasAlphabet რომელიც ჯერ უდრის false მნიშვნელობას 
    let hasDigits = false; // შექმნილი არის ცვლადი let keyword ის გამოყენებით რომლის სახელია hasDigits რომელიც უდრის false მნიშვნელობას 
    let hasPunctuation = false; // შექმნილი არის ცვლადი let keyword ის გამოყენებით რომლის სახელია hasPunctuation რომელიც უდრის false მნიშვნელობას 

    for(let i = 0; i < pass.length; i++){ // ვიყენებთ for loop ს იმისთვის, რომ გადავუაროთ pass პაროლის თითოეულ სიმბოლოს
        if(alphabet.includes(pass[i])){ // ვამოწმებთ თუ ჩვენ მიერ შექმნილი alphabet ცლადი ინახავს პაროლის რომელიღაცა სიმბოლოს,
            hasAlphabet = true; // მაგ შემთხვევაში ჩვენ hasAlphabet ცლადის მნიშვნელობას ვხდით true ს რადგან ჩვენ უკვე შევამოწმეთ რომ ჩვენ მიერ ჩაწერილი პაროლი
            // შეიცავს alphabet ცვლადის მნიშვნელობიდან ერთ ერთ სიმბოლოს
        }

        if(digits.includes(pass[i])){ // ვამოწმებთ თუ ჩვენ მიერ შექმნილი digits ს ცვლადი ინახავს პაროლის რომელიღცა სიმბოლოს 
            hasDigits = true; // მაგ შემთხვევაში hasDigits ცვლადის მნიშვნელობას გავხდით true ს რადგან უკვე შევამოწმეთ რომ ჩვენ მიერ ჩაწერილი პაროლი შეიცავს
            // digits ცვლადის მნიშვნელობიდან რომელიმე რიცხვს
        }

        if(punctuationChars.includes(pass[i])){ // ვამოწმებთ თუ ჩვენ მიერ შექმნილი punctuationChars ს ცვლადი ინახავს პაროლის რომელიღცა სიმბოლოს
            hasPunctuation = true; // მაგ შემთხვევაში hasPunctuation ცვლადის მნიშვნელობას გავხდით true ს რადგან უკვე შევამოწმეთ რომ ჩვენ მიერ ჩაწერილი 
            // პაროლი შეიცავს punctuationChars ცვლადის მნიშვნელობიდან რომელიღაც პუნქტუაციის სიმბოლოს
        }
    }

    return hasAlphabet && hasDigits && hasPunctuation // საბოლოოდ ვაბრუნებთ hasAlphabet hasDigits hasPunctuation ცვლადებს და მათ მნიშვნელობებს
};

registrationForm.addEventListener("submit", (e) => { // ჩვენ registrationForm - ს ვუმატებთ მოვლენის მსმენელს რომელიც მოუსმენს submit მოვლენას ფრჩხილებში 
    // გადავეცით e იგივე event handler ეს ასახავს მოვლენის ობიექტს
    e.preventDefault(); // e.preventDefault() preventDefault - ი ჩვენ გვეხმარება იმაში რომ ჩვენ მიერ შეტანილი ინფორმაცია არ დაიკარგოს 

    const userExsist = users.find((user) => user.email === registrationForm.email.value); // აქ ჩვენ ვქმნით userExsist ცვლადს რომელიც users მასივში
    // პოულობს იმ კონკრეტულ user - ს მომხმარებელს რომლის Email - ი უდრის registrationForm - იდან Email ის value - ს, მნიშვნელობას

    if(userExsist) { // ვამოწმებთ თუ მომხმარებელის Email - ი უდრის registrationForm - იდან Email ის value - ს, მნიშვნელობას
        alert("Email already registered"); // მაშინ  alert - ის დახმარებით ვეუბნებით მომხმარებელს, რომ Email უკვე დარეგისტრირებულია
        registrationForm.reset(); // ამ alert - ის შემდეგ ვასუფთავებთ registrationForm რეგისტრაციის ფორმის ველს
        return; // საბოლოოდ ვწერთ return - ს იმისთვის რომ არ მოხდეს საიტზე რაიმე ზედმეტი ცვლილებების მოხდენა
    }

    if(!isValidPassword(registrationForm.newPassword.value)){ // ვამოწმებთ თუ isValidPassword ფუქციაში გადაცემული Password - ის მნიშვნელობა არ 
        // შეადგენს ასოებს რიხვებს ან პუნქტუაციის სიმბოლოებს
        alert("Pass must contain one digit, punctuation and alphabet"); // მაშინ alert ის დახმარებით მომხმარებელს ვაფრთხილებთ რომ მისი Password - ი 
        // უნდა შეადგენდეს ერთ რიცხვს უნდა ქონდეს პუნქტუაცია და უნდა შეადგენდეს ასოებს როგორიცაა abc
        registrationForm.reset(); // ვასუფთავებთ registrationForm - ის ველს რადგან მომხმარებელმა ხელახლა შემოიტანოს სწორი ინფორმაცია
        return; // საბოლოოდ ვწერთ return - ს იმისთვის რომ არ მოხდეს საიტზე რაიმე ზედმეტი ცვლილებების მოხდენა
    }
    
    if(registrationForm.newPassword.value !== registrationForm.repeatPassword.value) { // ვამოწმებთ თუ ჩვენი განმეორებითი Password - ი არ უდრის
    // თავდაპირველად ჩაწრილ password - ს
        alert("Your repeated password is incorrect!"); // მაშინ alert ის დახმარებით მომხმარებელს ვეუბნებით, რომ ხელახლა შემოტანილი Password - ი არის არასწორი
        registrationForm.reset(); // ვასუფთავებთ registrationForm - ის ველს რადგან მომხმარებელმა ხელახლა შემოიტანოს სწორი ინფორმაცია
        return; // საბოლოოდ ვწერთ return - ს იმისთვის რომ არ მოხდეს საიტზე რაიმე ზედმეტი ცვლილებების მოხდენა
    }

    const user = { // ვქმნით user ობიექტს რომელიც უტოლდება Email - ს და Password - ს და ასევე მათ მნიშვნელობებს
        email: registrationForm.email.value, // Email - ში ინახება მომხმარებლის Email - ის მნიშვნელობა
        pass: registrationForm.newPassword.value // ხოლო password - ში მომხმარებლის Password - ის მნიშვნელობა
    }

    users.push(user); // ვამატებთ ამ ობიექტს ჩვენ მიერ შექმნილ users მასივში
    registrationForm.reset(); // საბოლოოდ კი ვასუფთავებთ registrationForm - ს
});

signinForm.addEventListener("submit", (e) => { // signinForm ვუმატებთ მოვლენის მსმენელს რომელიც მოუსმენს submit მოვლენას ფრჩხილებში 
    // გადავეცით e იგივე event handler ეს ასახავს მოვლენის ობიექტს
    e.preventDefault(); // // e.preventDefault() preventDefault - ი ჩვენ გვეხმარება იმაში რომ ჩვენ მიერ შეტანილი ინფორმაცია არ დაიკარგოს

    const profile = users.find((user) => user.email === signinForm.email.value && user.pass === signinForm.password.value); // აქ ჩვენ ვქმნით 
    // ცვლადს const ით სახელად profile - ი რომელიც users - ს მასივში პოულობს ისეთ user - ს, მომხმარებელს რომლის Email - ი
    // უდრის === signinForm - იდან Email - ის მნიშვნელობას და რომლის Password - ი უდრის signinForm - იდან Password - ის მნიშვნელობას

    if(profile) { // თუ profile - ის ცვლადში შენახული მნიშვნელობა არის სწორი 
        console.log(profile, "User succesfully signedin") // მაშინ console - ში გამოვიტანთ რომ მომხმარებელი წარმატებით დარეგისტრირდა
    } else { // სხვა შემთხვევაში კი
        console.log("Invalid credentials") // გამოვუტანთ რომ ჩაწერილი მონაცემები არის არასწორი
    }
});