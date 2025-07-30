#while ციკლის საშვალებით გამოიტანეთ რიცხვები 1-იდან 10-მდე
num=0
while num<10:
    num=num+1
    print(num)
#while ციკლის საშვალებით გამოიტანეთ რიცხვები 20-იდან 0-მდე
number=20
while number>0:
    number=number-1
    print(number)
#while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები
nur=20
while nur>0:
     nur=nur-2
     print(nur)
     
#while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი
counter=0
while counter<100:
    counter=counter+5
    print(counter)
#while ციკლისა და input-ის საშვალებით მომხარებელს შემოატანინეთ პაროლი სანამ
# არ იქნება ის "goa123"-ის ტოლი
password=""
password=(input("Enter your password:"))
while password!="goa1234":
    print("this is wrong password")
    password=input("enter your password:")
print("this password is right!")
