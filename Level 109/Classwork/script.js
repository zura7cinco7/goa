//1) შექმენით თქვენი დაბადების თარიღის ობიექტი, Date კონსტრუქტორის გამოყენებით და დაბეჭდეთ ის.
let myBirthDate = new Date(2011,5,1,10,23,30,100);
console.log(myBirthDate)
//შემდეგ წამოიღეთ ამ ობიექტიდან წელიწადი, თვე, რიცხვი, კვირის დღე, საათი, წუთი, წამი, მილიწამი 
//და დაბეჭდეთ ისინი ცალ-ცალკე.
console.log(`Year: ${myBirthDate.getFullYear()} Month: ${myBirthDate.getMonth()} Date: ${myBirthDate.getDate()}  Week Day: ${myBirthDate.getDay()} 
Hour: ${myBirthDate.getHours()} Minutes: ${myBirthDate.getMinutes()} Seconds: ${myBirthDate.getSeconds()} Miliseconds: ${myBirthDate.getMilliseconds()}`)