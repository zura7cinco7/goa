#შექმენით ცვლადები და შეინახეთ სხვადასხვა მონაცემთა ტიპის მნიშვნელობები. შემდეგ
#შეამოწმეთ თითოეული ცვლადის მონაცემთა ტიპი.
varable1="float"
varable2="integer"
varable3="boolean"
varable4="string"

print(type(True))#boolean
print(type(356))#integer
print(type("5"))#string
print(type(2.45))#float

#მომხარებელს შემოატანინეთ რიცხვი და შეამოწმეთ მისი ტიპი, ისე რომ დაგიბრუნდეთ integer
print(type(456))

#გააკეთეთ 5-5 მაგალთი შედარების ოპერატორებზე
print((1345==90))
print((10==5))
print((20==20))
print((55>100))
print((789==450))
print((230==2.30))
print((33<45678))
print((90-56>67+56))
print((60+30==40+50))
print((896<89657))

#დაბეჭდეთ ყველა შესაძლო ვარიანტი and და or ოპერატორებზე
print((300==3.00 and 450==450))
print((10>5 or 20<10))
print((-2.4 and 670==345))
print((100==100 or 100==200))

#მომხარებელს შემოატანინეთ მისი ასაკი, როგორც სტრინგი და დაბეჭდეთ მისი ტიპი. შემდეგ შეუცვალეთ 
#მას მონაცემთა
#ტიპი ჯერ integer-ად, შემდეგ float-ად (ყოველ გარდაქმნაზე დაბეჭდეთ შედეგი)
age = input("Enter your age: ")
int_age = int(age)
float_age = float(age)
print(type(age))
#მომხარებელს შემოატანინეთ მისი საყვარელი რიცხვი და გაიგეთ არის თუ არა ის ლუწი
num=(input("enter your favorite number:"))
addoddnumbers=1,2,3,4,5,6,7,8,9,10
if num=="1":
    print("your number is odd")
elif num=="3":
     print("your number is odd")
elif num=="5":
     print("your number is odd")
elif num=="6":
     print("your number is odd")
elif num=="7":
     print("your number is odd")
elif num=="9":
     print("your number is odd")

if  num=="2":
    print("your number is even")
elif num=="4":
     print("your number is even")
elif num=="6":
      print("your number is even")
elif num=="8":
      print("your number is even")

#მომხარებელს შემოატანინეთ მისი ასაკი და სახელი, შემდეგ შეამოწმეთ არის თუ არა
#ის სრულწლოვანი და უდრის თუ არა მისი სახელი თქვენს სახელს
name=(input("Enter your name ad surname:"))
age=(input("Enter your age"))
if age=="<18":
     print("you are an adult")
elif age==">18":
     print("you are a kid")

print("nino"=="your name")

    
















