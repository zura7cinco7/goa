// 1) შექმენით კლასი სახელად Phone, ამ კლასის კონსტრუქტორს გადაეცით 3 არგუმენტი, name, color storage, ტელეფონის სახელი ფერი და მეხსიერების
//  მოცულობა, შემდეგ გამოიყენეთ ეს კლასი რომ შექმნათ 3 სხვადასხვა ტელეფონი (მინიშნება არ დაგავიწყდეთ new გამოყენება)

class Phone{
    constructor(name,color,storage){
        this.name = name;
        this.color = color;
        this.storage = storage;
    }
}

const Phone1 = new Phone('Iphone','white','120 GB');
const Phone2 = new Phone('Iphone','Black','64 GB');
const Phone3 = new Phone('Iphone','Gray','120 GB');
console.log(Phone1);
console.log(Phone2);
console.log(Phone3);

//2) შექმენით კლასი სახელად User , ამ კლასის კონსტრუქტორს უნდა გადავცეთ 3 მნიშვნელობა, email, password და username, დამატეთ ეს მნიშვნელობები ობიექტში, 
// შემდეგ შექმენით საერთო მეთოდი სახელად introduce() რომელიც კონკრეტული ობიექტის იმეილს და უსერნეიმს დაბეჭდავს, ახსენით კომენტარებთ რა არის კლასი, 
// კონსტრუქტორი და პროტორიპი, ყველაზე კარგად დაუფიქრდით პროტოტიპს, შემდეგ შექმენით კონკრუტელუ კლასით 3 სხვადასხვა მომხმარებელი და
//  3 ვე დაბეჭდეთ კონსოლში და შეამოწმეთ რისგან შედგება ობიექტი

class User{
    constructor(email,password,username){
        this.email = email;
        this.password = password;
        this.username = username;
    }

    introduce(){
        console.log(this.email,this.username)
    }

    // Class - ი არის იგივე გეგმა ობიექტების შესაქმნელად
    // Constructor - ი არის მეთოდი Class - ში რომელიც იღებს სხვადასხვა არგუმენტებს
    // Prototype - არის Box - ი სადაც ინახება სხვადასვა ფუნქცია მეთოდი რომელიც ხელმისაწვდომია სხვადასვა ობიექტისთვის

    // 3) User კლასში დაამატეთ ორი მეთოდი, პირველი გეთთერი რომელიც დააბრუნებს მომხმარებლის იმელს, დაარქვთ email, ხოლო მეორეს დაარქვით password ის 
    // იქნება სეტერი, რომლის დახმარებითაც შეიცვლება პაროლი, პაროლის შეცვლადე შეამოწმეთ არის თუ არა ის 6 სიმბოლოზე მეტი და 20 სიმბოლოზე ნაკლი, აგრეთვე 
    // შეამოწმეთ შეიცავს თუ არა წერტილ, თუ ჩამოთვლილი დაკმაყოფილდება მიეცით სეტერს იმის საშუალება რომ შეცვლოს პაროლი, სხვა შემთხვევაში გათიშეთ ის.
}

const user1 =  new User('Gvinjilia@gmail.com','1234567.','Nino Gvinjilia');
const user2 = new User('Lizi@gmail.com','12345','Lizi');
const user3 = new User('Anastasia@gmail.com','1234','Anastasia');

user1.introduce();
user2.introduce();
user3.introduce();

class User1{
    constructor(email,password,username){
        this._email = email;
        this._password = password;
        this.username = username;
    }

    get email(){
        return this._email
    }

    set password(pass) {
        if (pass.length > 6 && pass.length < 20 && pass.includes('.')) {
            this._password = pass;
            console.log("Password successfully updated");
        } else {
            return;
        }
    }
}

const user4 =  new User1('Gvinjilia@gmail.com','123456789.','Nino Gvinjilia');
console.log(user4.email);
user4.password = '123456789.@';
console.log(user4)