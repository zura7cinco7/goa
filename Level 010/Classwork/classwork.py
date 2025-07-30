#მომხარებელს შემოატანინეთ მისი ასაკაი, შეინახეთ ის ცვლადში და შეადარეთ. თუ 
#ასაკი არის ლუზი დაბეჭდეთ თქვენი ასაკი არის ლუწი. სხვა შემთხვევაში: თქვენი ასაკი არის კენტი
age=int(input("please add number:"))
if age % 2==0:
        print("your age is even")
else:
    print("your age is odd")
#გამოიტანეთ 10-დან 50-ის ჩათვლით ყველა ლუწი რიცხვი. გამოიყენეთ for loop-ი
for number in range(10,50+1):
    if number % 2==0:
        print(number)

