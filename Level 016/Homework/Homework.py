#შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე დიდი რიცხვი
numbers = [1, 4, 2, 77, 9, 3, 2]
max_number = numbers[0]
for number in numbers:
    if number > max_number:
        max_number = number
print("Max_Number:", max_number)
#შექმენით რიცხვების სია და დაბეჭდეს სიის თითოეული რიცხვის ფაქტორიალი
numbers = [5, 7, 3, 2, 6]
for number in numbers:
    product = 1
    for i in range(1, number + 1):
        # product = product * i
        product *= i
    print(product)
#შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე პატარა რიცხვი
numbers=[2,9,8,6,5,3,5]
min_numbers=numbers[0]
for number in numbers:
    if number<min_numbers:
        min_number=number
print("Min_Numbers:",min_numbers)
#შექმენით რიცხვების სია სადაც გექნებათ დადებითი და უარყოფითი რიცხვები, შემდეგ შექმენით ახალი სია სადაც გექნებათ 
#მხოლოდ უარყოფითი რიცხვები და დაბეჭდეთ ის(გამოიყენეთ while).
numbers = [10, 5, 3, -2, -8, 7, -1, 6]
negative_numbers = []
index = 0

while index < len(numbers):
    if numbers[index] < 0:
        negative_numbers.append(numbers[index])
    index += 1

print("Negative_Numbers:", negative_numbers)
#შექმენით რიცხვების სია და დაპრინტეთ სიის თითოეული ელემენტი უკუღმა(გამოიყენეთ range() ფუქნცია ან შექმენით ცვლადი)
numbers = [1, 2, 3, 4, 5, 6, 7]
for i in range(len(numbers) - 1, -1, -1):
    print(numbers[i])
#შექმენით სიმბოლოების სია, სადაც იქნება დუბლიკატები. შექმენით ახალი სია სადაც ყველა სიმბოლო მხოლოდ ერთხელ გვხვდება
chars = ["a", "c", "a", "c", "c", "b", "c"]
no_duplicates = []
for char in chars:
     if no_duplicates.count(char) == 0:
         no_duplicates.append(char)
#შექმენით ცლვადი სადაც შეინახავთ string-ს, შემდეგ შექმენით ახალი ცვლადი სადაც შეინახავთ ამ სტრინგს შემოტრიალებულად და დაბეჭდეთ ის
str="Nino"
str2="oniN"
print(str2)
#დაწერეთ პროგრამა, რომელიც მომხამრებელს შემოატანინებს რიცხვს და აბრუნებს სიას, სადაც იქნება გამდოცემული რიცხვის ყველა გამყოფი
number=int(input("Enter a number:"))
divisors = []
for i in range(1, number + 1):
    if number % i == 0:
        divisors.append(i)
print("number devisiors are:", divisors)
#შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და დაპრინტავს რომელი საუკუნეა ის
years = int(input("Enter the number of years: "))

century = years // 100
remaining_years = years % 100

if remaining_years == 0:
    print(century)
else:
    print(century + 1)