#for ციკლით მომხარებელს შემოატანინეთ 5 ელემენტი სიაში და დაბეჭდეთ სია
numbers = []

for i in range(5):
    number = int(input("Enter a number: "))
    numbers.append(number)

print(numbers)
#შექმენით ხილების სია, სადაც გექნებათ მინიმუმ 3 ელემენტი. მომხარებელს შემოატანინეთ 
#თავისი საყვარელი ხილი, თუ სიის ბოლო ელემენტის ინდექსი არის ლუწი ჩაამატეთ 
#შემოტანილი 
#ხილი სიაში, სხვა შემთხვევაში არ ჩაამატოთ 
fruits = ["apple", "banana", "cherry", "orange"]

last_index = len(fruits) - 1

user_favorite_fruits = input("Enter your favorite fruit: ")

if last_index % 2 == 0:
    fruits.append(user_favorite_fruits)

print(fruits)
#შექმენით სია შემდგარი სახელებისგან. მომხარებელს შემოატანინეთ მისი სახელი,
#თუ მისი სახელი იქნება 5 სიმბოლოს ტოლი ან მეტი. ჩაამატეთ სიაში, 
#სხვა შემთხვევაში დაუბეჭდეთ "Name is too short"
names = []

for i in range(5):
    name = input("Enter your name: ")
    
    if len(name) >= 5:
        names.append(name)
    else:
        print("Name is too short")

#შექმენით სია შემდგარი 10 ელემენტისგან. დაპრინტეთ ის და მომხარებელს შემოატანინეთ 
#რიცხვი 1-დან 10-ჩათვლით. შემდეგ წაშალეთ სიის ის ელემენტი რომელი რიცხვიც 
#გადმოგეცათ და დაპრინტეთ განახლებული სია
numbers = [1,2,3,4,5,6,7,8,9,10]
print(numbers)

index = int(input("Please enter a number: "))

numbers.pop(index - 1)
print(numbers)