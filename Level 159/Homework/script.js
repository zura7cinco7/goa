// os.type(), os.arch(), os.networkInterfaces(), os.homedir(), os.hostname(), os.uptime()

const os = require('os');
const { sumToNumbers, multiply } = require('./mathUtils');

console.log(os.type()); // os.type აბრუნებს კომპიუტერის operating system - ის ტიპს
console.log(os.arch()); // os.arch აბრუნებს operating system - ის არქიტექტურას
console.log(os.networkInterfaces()); // os.networkInterfaces() აბრუნებს ინფორმაციას ჩვენი კომპიუტერის network interfaces - შესახებ
console.log(os.homedir()); // os.homedir აბრუნებს მომხმარებლის ამჟამინდელ directory - ის მისამართს
console.log(os.hostname()); // os.hostname აბრუნებს operating system - ის hostname - ს
console.log(os.uptime()); // os.uptime აბრუნებს სისტემის მუშაობის დროს წამებში

console.log(sumToNumbers(20, 5));
console.log(multiply(10, 7));

console.log(process.argv[1]);
console.log(process.version);

// ჩაშენებული მოდული არის ისეთი მოდული რომელიც თავიდანვე მოყვა პროგრამას მაგალითად os არის ჩაშენებული მოდული რომელიც თავიდანვე მოყვა პროგრამას
// მას გააჩნია მეთოდებიც მაგალითად os.type() - რომელიც აბრუნებს კომპიუტერის operating system - ს
// path - იც არის ჩაშენებული მოდული ის ჩვენ გვეხმარება file - ების ან folder - ების path - ებთად მუშაობაში

console.log(os);