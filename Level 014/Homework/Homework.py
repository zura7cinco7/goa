#შექმენით სია სადაც ჩაამატებთ 1-დან 100-მდე ყველა ლუწ რიცხვს. საბოლოოდ 
#დაპრინტეთ ეს სია(გამოიყენეთ for loop)
evens=[]
for i in range(1,100):
    if i % 2 ==0:
     evens.append(i)
print(evens)
#შექმენით სია სადაც ჩაამატებთ ყველა რიცხვს 1-დან 50-ის ჩათვლით. შემდეგ გადაუარეთ 
#for loop-ით და ამ სიიდან წაშალეთ ყველა კენტი რიცხვი. საბოლოოდ დაპრინტეთ
#მიღებული სია
numbers = list(range(1, 51))
index = 0
while index < len(numbers):
    if numbers[index] % 2 != 0:
        numbers.pop(index)
    else:
        index += 1
print("Even numbers:", numbers)
#შექმენით ხილების სია სადაც გექნებათ მინიმუმ 10 ელემენტი, while loop-ის გამოყენებით 
#წაშალეთ სიის ბოლო ელემენტი იქამდე სანამ სიაში არ დარჩება ორი ელემენტი. ყოველი 
#ელემენტის წაშლისას დაბეჭდეთ ხილების სია
fruits=["peach","banana","strawberry","raspberry","cranberry","kiwi","mango","papaya","cherrys","apple"]
while len(fruits) > 2:
    fruits.pop()
    print(fruits)  
print(fruits)
#შექმენით პროგრამა, რომელიც დაითვლის თუ რამდენჯერ შედის
# სიაში რიცხვი 1 numbers = [1,2,0,1,32,1,30,1,1,21,1,1,1] 
#(ამისათვის გადაუარეთ სიას for loop-ით)
numbers = [1, 2, 0, 1, 32, 1, 30, 1, 1, 21, 1, 1, 1]
count = 0
for num in numbers:
    if num == 1: 
        count += 1
print(count)
#შექმენით ორი ცარიელი სია, for loop-ის გამოყენებით მომხარებელს 
#5-ჯერ შემოატანინეთ ნებისმიერი სიტყვა. 
# თუ შემოტანილი სიტყვის სიგრძე არ აღემატება 5-ს ჩაამატეთ პირველ სიაში, 
#სხვა შემთხვევაში მეორეში. საბოლოოდ დაბეჭდეთ ორივე სია
word1=[]
word2=[]
for i in range(5):
    word=input("Enter a word:")
    if len(word)<=5:
        word1.append(word)
    else:
     word2.append(word)
print("Word1:", word1)
print("Word2:", word2)