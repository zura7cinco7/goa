#მომხარებელს შემოატანინეთ ორი რიცხვი, აიყვანეთ ისინი მე-3 ხარისხში და გაიგეთ მათი ჯამი, თუ ჯამი ლუწია დაპრინტეთ "Result is Even", სხვა შემთვევაში "Result is Odd"
num1=int(input("Enter number 1:"))
num2=int(input("Enter number 2:"))
num3=num1**3
num4=num2**3
sum=num3+num4
print(sum)
if sum % 2==0:
    print("Your number is even")
else:
    print("your number is odd")