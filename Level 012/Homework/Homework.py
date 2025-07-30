#while ციკლის გამოყენებით დაპრინტეთ 1-დან 50-მდე ყველა 4-ის ჯერადი რიცხვის კუბი
counter=4
while counter<50:
    print(counter*counter*counter)
    counter=counter+4
#შექმენით რიცხვების დიაპაზონი 1-დან 100-მდე, შეამოწმეთ თუ რიცხვი იყოფა 3-ზე დაბეჭდეთ "Fizz" და გვერდზე მიუწერეთ რიცხვი. თუ რიცხვი იყოფა 5-ზე დაბეჭდეთ "Buzz" და გვერდზე მიუწერეთ რიცხვი, 
#ხოლო თუ იყოფა 3-ზეც და 5-ზეც დაბეჭდეთ "FizzBuzz" და გვერდზე მიუწერეთ რიცხვი
for num in range (1,101):
    if num % 3 ==0 and num % 5==0:
        print(f"Fizzbuzz {num}")
    elif num % 3==0:
        print(f"Fizz {num}")
    elif num % 5==0:
        print(f"Buzz {num}")
#შექმენით ორი ცვლადი, პირველში შეინახეთ 1-დან 20-ის ჩათვლით ყველა ლუწი რიცხვის ჯამი, მეორეში კი ყველა კენტის. აიყვანეთ ორივე მე-5 ხარისხში და დაპრინტეთ ის, რომელიც არის მეტი
even_sum = 0
odd_sum = 0

for i in range(1, 21):
    if i % 2 == 0:
        even_sum = even_sum + i
    else:
        odd_sum = odd_sum + i


if even_sum ** 5 > odd_sum ** 5:
    print("Even sum is greater than odd sum", even_sum ** 5)
else:
    print("Odd sum is greater than even sum", odd_sum ** 5)
#True or False and 5 > 3 or "name" == "name" and 123 == "123" and 5 >= 5 <--- გაიგეთ რას გამოიტანს ეს კოდი და ახსენით რატომ.
# True      #False
print(True or False and 5 > 3 or "name" == "name" and 123 == "123" and 5 >= 5)
#True or False=True
#True and 5>3 (True)=True
#True or "name"=="name"(True)=True
#True and 123=="123"(False)=False
#False and 5>=5=False 
#True or False=True

#მომხარებელს შემოატანინეთ რიცხვი და გაიგეთ არის თუ არა ის მარტივი, თუ მარტივია დაპრინტეთ "Number is prime", სხვა შემთხვევაში "Number is not prime"
#(მარტივია რიცხვი, რომელიც იყოფა მარტო თავის თავზე და ერთზე)
number=int(input("Enter number:"))
if number > 2:
    print("your number is not prime")
else:
    is_prime=True
    for i in range(2,number):
        if i % 1 ==0:
            print("your number is prime")
            break
    if is_prime:
        print("your number is prime")
    else:
        print("your number is not prime")
# კომენტარებით ახსენით თქვენი თითოეული მოქმედება
