#შექმენით string-ების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ სიაში არსებული ყველა სიტყვის სიმბოლოთა რაოდენობა
#          0     1      2      3     4
strings=["one","two","three","four","five"]
for num in strings:

    print(len(num))
#შექმენით რიცხვების სია, while loop-ის გამოყენებით გაიგეთ ამ სიაში ყველა ლუწი რიცხვის ჯამი და დაპრინტეთ
numbers=["1","2","3","4","5","6","9","12"]
even_sum=0
index=0
while index < len(numbers):
    numbers_int= int(numbers[index])
    if numbers_int % 2 == 0:
      even_sum += numbers_int
    index += 1
print(even_sum)
#შექმენით სახელების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ ამ სიიდან მხოლოდ ის სახელები, რომლებიც იწყებიან "A"-ზე
list_of_names=["luka","jake","Ani","nuki","lana"]
for word in list_of_names:
   if word[0] == "A":
    print(word)
#შექმენით რიცხვების სია, სადაც გექნებათ დუბლიკატები. გადაუარეთ მას for loop-ით და დაბეჭდეთ მხოლოდ ისეთი რცხვების ჯამი, რომლებიც არ მეორდება სიაში
# რიცხვების სია დუბლიკატებით
numbers = [1, 2, 3, 2, 4, 5, 5, 6]
unique_numbers = []
for number in numbers:
    if numbers.count(number) == 1:
        unique_numbers.append(number)
print(unique_numbers)
#შექმენით პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს 1-დან შემოტანილ რიცხვამდე ყველა მარტივ რიცხვს
number = int(input("Please enter a number: ")) # 5

result = []

for num in range(1, number):
    dividers = []
    for i in range(1, num + 1):
        if num % i == 0:
            dividers.append(i)
    if len(dividers) == 2:
        result.append(num)
    
print(result)
# შექმენით სია შემდგარი 5 ელემენტისგან. slicing-ის გამოყენებით დაბეჭდეთ მე-3 და მე-4 ელემენტები
lists=["bob","kyle","james","lucas","Nino","james"]
sliced_lists=lists[3:5]
print(sliced_lists)
#შექმენით რიცხვების სია, შემდგარი 10 ელემენტისგან. slicing-ის გამოყენებით დაბეჭდეთ სიის ყოველი მეორე ელემენტი
numbers=["14","Kyle","james","15","18","a","j","13","nuki","lia"]
sliced_lists=numbers[::2]
print(sliced_lists)
#შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ სთრინგის ბოლო სამი სიმბოლო(გამოიყენეთ slicing და მინუსიანი ინდექსები)
str="Nino"
sliced_lists=str[-3:]
print(sliced_lists)
#შექმენით რიცხვების სია, დაბეჭდეთ სია თავიდან ბოლომდე slicing-ის გამოყენებით
numbers=["1","2","3","4","5"]
slice=numbers[0:5]
print(slice)