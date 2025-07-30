#input-არის პროცესი როდესაც ყველა ჩვენი ჩაწერილი ინფორმაცია შეგვაქვს და ეკრანზე
# გამოდის
#output-არის ის პროცესი როდესაც ჩვენი ინფორმაცია გამოდის
name=input("enter your name:")
print(name)
surname=input("enter your surname:")
print(surname)
email=input("enter your email:")
print(email)
age=input("your age is :")
print(age)
#შექმენით კალკულატორის პროგრამა სადაც მომხარებელი შემოიტანს ორ რიცხვს და 4 
# არითმეტიკული ოპერაციიდან ერთერთს.
# შეასრულეთ ამ ორ რიცხვს შორის არჩეული არითმეტიკული ოპერაცია
num1=int(input("enter number 1:"))
num2=int(input("enter number 2:"))

print(num1/num2)
print(num1+num2)
print(num1*num2)
print(num1-num2)

num1=int(input("enter number 1:"))
num2=int(input("enter number 2:"))
operation=input("enter an operator(+,-,/,*):")
if operation == "+":
    print(num1 + num2)
elif operation == "-":
    print(num1 - num2)
elif operation == "*":
    print(num1 * num2)
elif operation == "/":
    print(num1 / num2)
else:
    print("Invalid operator!")











