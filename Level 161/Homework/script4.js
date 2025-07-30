/* 9) შექმენით ფაილი text2.txt მასში შეინახეთ წინადადებები, process ობიექტის დახმარებით მომხმარებელს შემოატანინეთ რაიმე წინადადება, enter - ზე დაჭერის შემდეგ 
მომხმარებლის მიერ შემოტანილი წინადადება უნდა დაემატოს text2.txt - ის ფაილში */

const fs = require('fs');

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    if(input){
        fs.appendFile('text2.txt', '\n' + input, (err) => {
            if(err){
                console.log('Error occurred')
            } else {
                console.log(`${input} added successfully to the text2.txt file`)
            }
        })
    }
})