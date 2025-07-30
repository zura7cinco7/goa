#შექმენით პროგრამა while ციკლის საშვალებით რომელიც გამოთვლის ყველა ნატურალური 
#რიცხვის ჯამს 1-იდან 50-მდე
num=1
while num<50:
    num=num+1
    print(num)
#შექმენით პროგრამა რომელიც მომხმარებელს შეეკითხება pin კოდს (4 ციფრიანი კოდი) 
#მანამდე სანამ არ შეიყვანს 1234-ს
password=""
password=input("enter your pin code:")
while password!="1234":
    print("this pin code is incorrect,please try again")
    password=(input("enter your pin code:"))
print("your code is right")
#შექმნით რიცხვის გამოცნობის თამაში while ციკლით, რომელიც მომხმარებელს შეეკითხება რიცხვს 1-დან 10-მდე,
#სანამ მომხმარებელი არ შეიყვანს თქვენთვის სასურველ რიცხვს
number=""
input("enter a number:")
while number!="9":
    print("try again")
    number=input("enter a number:")
print("correct you won")
#while-ფუნქციას ვიყენებთ მაშინ როდესაც არ ვიცით iteration-ების რაოდენობა
#for-ფუნქციას ვიყენებთ მაშინ როდესაც ვიცით iteration-ების რაოდენობა