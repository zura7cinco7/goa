#შექმენით სია სადაც, შეიტანთ მინიმუმ 10 რიცხვს, გადაუარეთ for 
#ციკლის დახმარებით და დაბეჭდეთ 
#თითოეული რიცხვი კენტია თუ ლუწი.
numbers=[1,2,3,4,5,6,7,8,9,10]
evens=[]
odds=[]
for index in range(len(numbers)):
    if numbers[index] % 2 == 0:
        evens.append(numbers[index])
    else:
        odds.append(numbers[index])
print("Evens:", evens)
print("Odds:", odds)
#შექმენით სახელების სია სადაც გექნებათ მინიმუმ 10 სახელი, 
#დაბეჭდეთ ამ სიიდან მხოლოდ 
#ის სახელები რომლების ინდექსებიც არის ლუწი
names=["james","lizi","eliza","jonny","lana","luka","elizabeth","mariam","elene","barbare"]
evens=[]
odds=[]
for index in range (len(names)):
   if index % 2 == 0:
     evens.append(names[index])
     print("Evens:", evens)
   else:
     odds.append(names[index])
     print("Odds:", odds)
#შექმენით სია სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა გაიგოთ ამ სიაში ყველა ლუწი და კენტი რიცხვიოს ჯამი და დაბეჭდოთ
num=[1,2,3,4,5,6,7,8,9,10]
evens=[]
odds=[]
for num in num:
  if num % 2 == 0:
   evens.append(num)
  else:
    odds.append(num)
evens = sum(evens)
odds = sum(odds)
print(evens)
print(odds)
#შექმენით სია სადაც გექნებათ 10 რიცვი, შემდეგ შექმენით ახალი სია, სადაც ჩაამატებთ პირველი სიიდან ყველა ლუწ რიცხვს და 
#გაიგებთ მათ საშუალო არითმეტიკულს.(ახალ სიაზე გამოიყენეთ len() ფუნქცია)
numbers=[1,2,3,4,5,6,7,8,9,10]
even_numbers=[]
for numbers in numbers:
  if numbers % 2 == 0:
   even_numbers.append(numbers)
average =(sum(even_numbers))/(len(even_numbers))
print("even numbers:", even_numbers)
print("odd numbers:", average)
