/* 1) შექმენით ერთი ფაილი text.txt მასში დაწერეთ რაიმე წინადადება, თქვენი დავალებაა რომ დაა - import - ოთ fs მოდული, წაიკითხოთ ფაილი readFile მეთოდის 
გამოყენებით და დაბეჭდოთ ის */

const fs = require('fs'); 

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Something went wrong')
    } else {
        console.log('File data is:', data)
    }
})

// 2) 1 დავალების გაკეთება სცადეთ ხელახლა ამჯერად სინქრონიზირებულად fs.readFileSync - ის გამოყენებით, შეინახეთ ის ცვლადში და დაბეჭდეთ

const syncFs = fs.readFileSync('text.txt', 'utf-8');

console.log(syncFs);

/* 3) თქვენი დავალებაა რომ fs.readFile - ს გადასცეთ არასწორი ფაილის მისამართი (რომელიც არ არსებობს), ეს გამოიწვევს error - ს, იმ შემთხვევაში თუ error - ი (შეცდომა) 
დაფიქსირდა დაბეჭდეთ რომ 'File path incorrect', სხვა შემთხვევაში კი დაბეჭდეთ ფაილის content - ი */

fs.readFile('txt.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('File path incorrect')
    } else{
        console.log(data)
    }
})

/* 4) შექმენით ფაილი text1.txt მასში შეინახეთ რაიმე სიტყვები, თქვენი დავალებაა რომ fs.readFile - ის დახმარებით წაიკითხოთ ფაილი და console - ში დაბეჭდოთ, სიტყვები 
upperCase() - ში */

fs.readFile('text1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('File path icorrect')
    } else{
        console.log('words is uppercase-', data.toUpperCase())
    }
})

/* 5) buffer.from მეთოდს გადაეცით ascii - ის ცხრილიდან რიცხვები, თქვენი დავალებაა რომ console - ში გამოიტანოთ ეს რიცხვები როგორც string - ი, გამოიყენეთ 
toString() მეთოდი */

const buffer = Buffer.from([78, 73, 78, 79]);
console.log(buffer.toString());

// 6) buffer - ით შექმენით 5 ადგილიანი მეხსიერება, მეორე არგუმენტად კი გადეცით ascii - ის ცხრილიდან რომელიმე რიცხვი და დაბეჭდეთ საბოლოო შედეგი

const buffer2 = Buffer.alloc(5, 78);
console.log([...buffer2]);