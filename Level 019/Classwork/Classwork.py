#შექმენით რიცხვების სია, შემდგარი მინიმუმ 10 ელემენტისგან. გადაუარეთ ამ საის while loop-ის გამოყენებით. გაიგეთ ცალკე ლუწი და კენტი რიცხვების ჯამი, 
#საბოლოოდ შეადარეთ ისინი ერთმანეთს და დაპრინტეთ უდიდესი
numbers=[1,4,3,6,5,7,9,10]
index=0
even_sum=0
odd_sum=0
while index!=len(numbers):
    if numbers[index] % 2== 0:
        even_sum += numbers[index]
    else:
        odd_sum += numbers[index]
    index+=1

if even_sum > odd_sum:
    print(even_sum)
else:
    print(odd_sum)
#შექმენით სიმბოლოების სია, გადაუარეთ მას for loop-ით და სიიდან ყველა სიმბოლოს შორის მოახდინეთ კონკადინაცია. 
#ციკლის გარეთ დაგჭირდებათ ცვლადი სადაც შაამატებთ ამ სთრინგებს
symbolls=["a","b","c","d"]

result=""
for i in symbolls:
    result+=i
print(result)