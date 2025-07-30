#შექმენით სია შემდგარი მინიმუმ 5 ელემენტისგან. წაუშალეთ ამ სიას ბოლო ორი ელემენტი და დაბეჭდეთ ის
ellements=["a","b","c","k","d"]
ellements.pop()
ellements.pop()
print(ellements)
#შექმენით ცვლადი, სადაც შეინახავთ სთრინგს. slicing-ის მეშვეობით დაბეჭდეთ ის უკუღმა
name="Nino"
sliced_name=name[::-1]
print(name)
#შექმენით რიცხვების სია შემგარი 10 მინიმუმ ელემენტისგან. გაიგეთ ამ სიაში ყველაზე პატარა და დიდი რიცხვი, შემდეგ კი დაბეჭდეთ მათი ჯამი
numbers=[1,4,9,100,11,2,10,20,8,19]
max_numbers=0
min_numbers=0
max_numbers = numbers[0]
min_numbers=numbers[0]
for number in numbers:
    if number > max_numbers:
        max_numbers = number
    if number<min_numbers:
        min_numbers=number
print(max_numbers+min_numbers)
# შექმენით ცვლადი სადაც შეინახავთ სთრინგს და გაიგეთ, არის თუ არა ის პალინდრომი(პალინდრომი არის ისეთი სიტყვა, რომელიც ორივე მხრიდან ერთნაირად იკითხება, მაგალითად, "ana"...)
string="Ana"
if string==string[::-1]:
    print("your string is palindrom")
else:
    print("your string is not palindrom")
# შექმენით რიცხვების სია, გადაუარეთ მას for loop-ით, გაიგეთ რამდენი ლუწი და რამდენი კენტი რიცხვი გვაქვს სიაში და დაბეჭდეთ მათი რაოდენობა
numbers=[1,7,3,5,8,9,10]
even_count=0
odd_count=0
for number in numbers:
    if number % 2 ==0:
        even_count+=1
    else:
        odd_count+=1
print(even_count)
print(odd_count)
#შექმენით სია, სადაც გექნებათ 1-ანები და 0-ანები, შექმენით ახალი სია, რომელიც თავიდან იქნება ცარიელი. for loop-ით გადაუარეთ პირველ სიას და თუ საიტერაციო ცვლადის მნიშვნელობა იქნება 1, 
#ახალ სიაში ჩაამატეთ True, სხვა შემთხვევაში False. საბოლოოდ დაბეჭდეთ ახალი სია
numbers=[1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1]
number=[]
for num in numbers:
    if num == 1:
        number.append (True)
    else:
        number.append (False)
print(number)