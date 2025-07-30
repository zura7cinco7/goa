/* 8) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ ასო, შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი ასო არის ხმოვანი მაშინ გამოუტენეთ რომ ${userInput} 
is vowel სხვა შემთხვევაში კი ${userInput} is consonant */

process.stdout.write('Enter a letter:');

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if(input.length === 1){
        if(vowels.includes(input)){
            console.log(`${input} is vowel`)
        } else {
            console.log(`${input} is consonant`)
        }
    } else {
        console.log('Enter a letter')
    }
})