/* 7) process.stdout - ის დახმარებით მომხმარებელს მოსთხოვეთ რომ შემოიტანოს password - ი, process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ პაროლი და 
გამოუტანეთ თავისი პაროლი xxxx - ების სახით მაგალთად - შევიტანეთ პაროლი - securedPassword123, უნდა გამოიტანოთ როგორც x * securedPassword123 - სიმბოლოების 
რაოდენობაზე */

process.stdout.write('Enter Your Password:');

process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim();

    if(input){
        console.log('Your password:', 'x'.repeat(input.length))
    }
})