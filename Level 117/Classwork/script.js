/* 1) შექმენით კლასი სახელად Animal უნდა ჰქონდეს სამი კუთვნბილება, ცხოველის წონა, ფერი, ასაკი,  აგრეთვე უნდა ჰქონდეს ჭამის მეთოდი და წყლის დალევის 
მეთოდი, შემდეგ შექმენით Dog კლასი რომელიც მემკვედრიებით მიიღებს Animal კლასის მეთოდებს და კონსტურქტოორს, Dog კლასს დამატებიტ ექნება ერთი კუთვნელაბ 
სახელად ჯიში, პირველრგიში გამოიძახეთ მშობელი კლასის კონსტრუქტორი super ფუყნქციით და შემდეგ დაამატეთ კუთვნილება, აგრეთვე კლასს უნდა ჰქონდეს walk 
მეთოდი და  bark მეთოდი */

class Animal{
    constructor(animalWeight,color,age){
        this.animalWeight = animalWeight;
        this.color = color;
        this.age = age;
    }

    eat(){
        console.log("This Animal Is Eating");
    }

    drink(){
        console.log('This Animal is drinking Water');
    }
}

class Dog extends Animal{
    constructor(animalWeight,color,age,breed){
        super(animalWeight,color,age)
        this.breed = breed;
    }

    walk(){
        console.log('Dog is walking');
    }

    bark(){
        console.log('Dog is Barking')
    }
}

const dog = new Dog(15,'White',5,'American Eskimo dog');
console.log(dog);
dog.eat();
dog.drink();
dog.walk();
dog.bark();