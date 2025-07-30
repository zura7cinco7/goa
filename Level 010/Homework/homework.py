#მომხარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ, რამდენჯერ შედის შემოტანილი რიცხვი 100-ში. 
#გააკეთეთ ყველაზე 
#მოკლე გზით(ამისათვის გამოიყენეთ გაყოფის სწორი ტიპი)
number=int(input("Enter a number:"))
number2=100
if number2>0:
     number2=number2//number
print(number2)
#while ციკლის გამოყენებით გამოიტანეთ 1-დან 20-მდე ყველა კენტი რიცხვის ჯამი
num = 1
sum = 0
while num <= 20:
    if num % 2 != 0:  
        sum += num
    num += 1
print(sum)
#მომხარებელს შემოატანინეთ ორი რიცხვი და დაბეჭდეთ ის, რომელიც არის მეტი. თუ ორივე რიცხვი ტოლია დაბეჭდეთ "Both numbers are equal"
num1=int(input("Enter number 1:"))
num2=int(input("Enter number 2:"))
if num1>num2:
    print("your first number is higher than the second")
elif num2>num1:
    print("your second number is higher than  the firt")
else:
    print("Both numbers are equal")
#მომხარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ შემოტანილი რიცხვის ფაქტორიალი
#(დასერჩეთ რა არის ფაქტორიალი)
number = int(input("Enter number: "))
for num2 in range(0, number):
    num2 = num2 - 1
    num2 = num2 * (num2 -1)
    print(num2)
#მომხარებელს შემოატანინეთ რიცხვი და შეინახეთ ის ცვლადში. შემდეგ დაბეჭდეთ შემოტანილი რიცხვის ჩათვლით ყველა რიცხვის კვადრატის ჯამი
num = int(input("Enter a number: "))

sum = 0
for num in range(num + 1):
    sum = sum + num * num
print(sum)
#თამაში "რიცხვის გამოცნობა". შექმენით ცვლადი და შეინახეთ რომელიმე რიცხვი 1-დან 20-ის ჩათვლით(ეს იქნება ჩაფიქრებული რიცხვი). გამოიყენეთ while loop-ი და 
#მომხარებელს შემოატანინეთ რიცხვი იქამდე სანამ არ გამოიცნობს მას. თუ მომხარებლის მიერ შემოტანილი რიცხვი 
#მეტია ჩაფიქრებულზე, დაპრინტეთ To high, თუ ნაკლებია Too low, ხოლო იმ შემთხვევაში თუ მომხარებელი გამოიცნობს რიცხვს დაპრინტეთ "You win"
secret_num=9
num2=0

while num2!=secret_num:
     num2=int(input("Guess the number:"))

     if num2 >secret_num:
        print("Your number is too high")
     elif num2 < secret_num:
        print("Your number is too low:")
     else:
        print("CONGRATULATIONS,YOU GUESSED THE NUMBER ")