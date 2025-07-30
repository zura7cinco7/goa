/* 2) შექმენით Class - ი სახელად Person რომელსაც უნდა ქონდეს ორი კუთვნილება სახელი და გვარი, ამ Class-ს უნდა ქონდეს მეთოდი სახელად think ამ 
მეთოდში დაწერეთ `${name} Is Thinking` - string literal - ის გამოყენებით, შექმენით მეორე Class - ი  სახელად Student რომელიც მემკვიდრეობით მიიღებს იგივე 
constructor - ს და მეთოდებს Person Class - დან, თქვენი დავალებაა, რომ ამ Class - ის constructors - ს დაუმატოთ კიდევ ერთი კუთვნილება სახელად gradeLevel, 
გამოიძახეთ მშობელი Class - ის კონსტრუქტორი super - ის გამოყენებით, Student Class - ის ობიექტში დაამტეთ gradeLevel კუთვნილება, ამ Class - ს უნდა ქონდეს ერთი 
მეთოდი სახელად study() რომლსაც გადაეცემა subject - ი (საგანი) ამ მეთოდში დაწერეთ რომ Student - ი მეცადინეობს subject - ს და მისი ქულაა gradeLevel - ი, შექმენით
ცლადი სადაც თქვენ ობიექტს გადასცემთ მნიშვნელობებს როგორიცაა სახელი,გვარი და gradeLevel (ქულა) ამ ცვლადზე გამოიძახეთ think - მეთოდი, ასევე ცვლადზე გამოიძახეთ 
study მეთოდი და გადაეცით მას არგუმენტად რაიმე საგანი (subject) და საბოლოო შედეგები გამოიტანეთ console - ში */

class Person{
    constructor(name,lastname){
        this.name = name;
        this.lastname = lastname;
    }

    think(){
        console.log(`${this.name} Is Thinking`);
    }
}

class Student extends Person{
    constructor(name,lastname,gradeLevel){
        super(name,lastname);
        this.gradeLevel = gradeLevel;
    }

    study(subject){
        console.log(`${this.name} Is learning ${subject} and ${this.name}'s grade is ${this.gradeLevel}`);
    }
}

const person = new Student('Nino','Gvinjilia',95);
person.think();
person.study('Math');
console.log(person);

/* 3) შექმენით Class - ი სახელად Dog რომელსაც ექნება ორი კუთვნილება(name და age) ეს კუთვნილებები დაამატეთ ობიექტში დაამატეთ კიდევ  ერთი კუთვნილება ობიექტში
energyLevel რომელიც უდრის = 100%, უნდა გქონდეთ მეთოდი სახელად run() რომელშიც თქვენ energyLevel - ის მნიშვნელობას შეამცირებთ 10 - ით და დაწერთ, რომ 
`Dog named ${name} Is now Running which means that it has lost 10 energy and it's energy Level now is ${energyLevel}`, შექმენით მეორე მეთოდი rest() რომელშიც 
energyLevel - კუთვნილების მნიშვნელობა გაიზრდება 5 - ით ეს ნიშნავს რომ უკვე Dog - ის energyLevel - ი უდრის 5 ენერგიით მეტს ამის შემდეგ დაწერთ, რომ 
`$Dog named {name} Is now resting which means that it's energy Level is now ${energyLevel}`, შექმენით მესამე მეთოდი სახელად showStatus - რომელიც დაბეჭდავს 
ამ ძაღლის სახელს ასაკს და საბოლოო energyLevel - ს,არგუმენტების ნაცვლად ჩაწერეთ თქვენთვის სასურეველი მნიშვნელობები და საბოლოო შედეგი გამოიტანეთ console - ში */

class Dog{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.energyLevel = 100;
    }

    run(){
        this.energyLevel -= 10;
        console.log(`Dog named ${this.name} Is now Running which means that it has lost 10 energy and it's energy Level now is ${this.energyLevel}`);
    }

    rest(){
        this.energyLevel += 5;
        console.log(`Dog named ${this.name} Is now resting which means that it's energy Level is now ${this.energyLevel}`);
    }

    showStatus(){
        console.log(`Dog name: ${this.name}, Dog age: ${this.age}, Dog EnergyLevel is ${this.energyLevel}`);
    }
}

const dog1 = new Dog('Bob',5);
dog1.run();
dog1.rest();
dog1.showStatus();
console.log(dog1);