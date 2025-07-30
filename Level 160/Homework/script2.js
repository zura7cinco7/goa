/* 4) process.stdin - ის დახმარებით, შეამოწმეთ თუ მომხმარებელმა შემოიტანა 'bye' მაშინ გამოუტანეთ 'Goodbye' და გათიშეთ პროგრამა process.exit() - ის დახმარებით, სხვა 
შემთხვევაში კი ჩვეულებრივ გამოუტენთ მის მიერ შემოტანილი მნიშვნელობა */

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    if(input === 'bye'){
        console.log('Goodbye');
        process.exit();
    } else {
        console.log(input)
    }
});