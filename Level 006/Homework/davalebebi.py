#მომხარებელს შემოატანინეთ რიცხვი ერთიდან შვიდამდე, შემოტანილი რიცხვის მიხედვით დაპრინტეთ კვირის დღე.
# (მაგალითად მომხარებელმა შემოიტანა 4 >>> "Thursday")
number=input("choose a number(1,2,3,4,5,6,7):")
if number=="1":
   print("Monday")
elif number=="2":
    print("Tuesday")
elif number=="3":
    print("Wednesday")
elif number=="4":
    print("Thursday")
elif number=="5":
    print("Friday")
elif number=="6":
    print("saturday")
elif number=="7":
    print("Sunday")

#მომხარებელს შემოატანინეთ ორი რიცხვი, შეინახეთ ორივე ცვლადში. მოახდინეთ მათ შორის შედარება და 
#შედეგი(True or False) გამოიტანეთ ტერმინალში
num1=70
num2=50
operation=input("enter an operation (/,*,-,+):")
if operation =="+":
    print(num1+num2)
    print(True)
elif operation=="-":
    print(num1-num2)
    print(True)
elif operation=="*":
    print(num1*num2)
    print(True)

elif operation=="/":
    print(num1/num2)
    print(True)
else:
    print("invalid operation!")
    print(False)
#მომხარებელს შემოატანინეთ თავისი ასაკი, თუ ის არის 18 წლის ან ზემოთ დაპრინტეთ 
#"You are adult", სხვა შემთხვევაში დაპრინტეთ "You are kid"
age=(input("enter your age:"))
if age=="<18":
    print("you are an adult")
elif age==">18":
    print("you are a kid ")

#მომხარებელს შემოატანინეთ 4 რიცხვი. შეინახეთ ისინი ცვლადებში და 
#დაბეჭდეთ მათი საშუალო არითმეტიკული
num1=(input("enter number 1:"))
num2=(input("enter number 2:"))
num3=(input("enter number 3:"))
num4=(input("enter number 4:"))

print(num1+num2+num3+num4/4)

#გააკეთეთ 3-3 მაგალითი int() და str() ფუნქციებზე
int()
#მაგალითად
print("5")
print("10")
print("20")
str()
#მაგალითად
print("JavaScrit")
print("Python")
print("Nino")

#კომენტარებით ახსენით რა არის კონკადინაცია და მოიყვანეთ მაგალითები
#კონკადინაცია - ორი სტრინგის ერთმანეთთან შეერთება
print("Sa"+"lo")
print("So"+"so")
print("La"+"na")




   






