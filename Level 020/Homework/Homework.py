#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა სახელი და დაბეჭდავს მისთვის მიესალმებას (მაგალითად: "Hello Nika"). გამოძახეთ ეს ფუნქცია 2-ჯერ და გადაეცით სხვადასხვა სახელი
def greet(name):
    print("Hello",name)
greet("Nika")
greet("Giorgi")
#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა 2 რიცხვი. ფუნქციამ უნდა დაბეჭდოს ამ რიცხვების ნამრავლი. საბოლოოდ გამოიძახეთ ის
def numbers(a,k):
    print(a*k)
numbers(10,2)
#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა სია. ფუნქციამ უნდა დაბეჭდოს ეს სია შებრუნებულად(არ გამოიყენოთ slicing-ი)
def reversed_list(lst):
    for i in range(len(lst) - 1, -1, -1):
        print(lst[i])
my_list=[1,8,4,3,9,10]
reversed_list(my_list)
#შექმენით ფუნქცია, რომელსაც გადასცემთ რიცხვების სიას. გადაუარეთ გადმოცემულ სიას for ციკლით და დააბრუნეთ ახალი სია, სადაც ჩამატებული იქნება გადმოცემული სიიდან მხოლოდ ის რიცხვები, 
#რომლებიც მეტია 10-ზე. საბოლოოდ დააბრუნეთ ეს სია
def list_of_numbers(numbers):
    result=[]
    for number in numbers:
        if number > 10:
            result.append(number)
    return result
my_numbers=[1,3,2,22,23,10,11,10]
list=list_of_numbers(my_numbers)
print(list)
#შექმენით ფუნქცია, რომელსაც გადაეცემა სიმბოლოების სია. ფუნქციამ უნდა დააბრუნოს ეს სია პირველი და ბოლო ელემენტების გარეშე, გამოიყენეთ slicing-ი
def my_symbolls(symbolls):
    return symbolls[1:-1]
my_symbols = ["g", "b", "c", "a", "j"]
sliced_symbols = my_symbolls(my_symbols)
print(sliced_symbols)
#შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვების სია, გადაურეთ ორივეს for ციკლით და გაიგეთ თითოეულ
#სიაში რიცხვების ჯამი(შეინახეთ ცალკე ცვლადებში), გაამრავლეთ ორივე ერთმანეთზე და დააბრუნეთ
def numbers(list1,list2):
    sum1=0
    for num in list1:
        sum1 +=num
    sum2=0
    for num in list2:
        sum2+=num
    return sum1*sum2
number1=[1,2,3,4,5]
number2=[2,4,8,3,9]
result=numbers(number1,number2)
print(result)
#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას while ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია
def list_of_numbers(numbers):
    result = []
    i = 0
    while i < len(numbers):
        result.append(numbers[i] * 2)
        i += 1
    return result
my_numbers = [1, 2, 3, 4, 5]
doubled_numbers = list_of_numbers(my_numbers)
print(doubled_numbers)
#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია
def list_of_numbers(numbers):
    result=[]
    for number in numbers:
        if number % 2== 0:
            result.append(number)
        return result
#შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. შექმენით ახალის სია, სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, რომლებიც იწყება "N"-ზე`. საბოლოოდ დააბრუნეთ ეს სია
def greet(names):
    names_with_N=[]
    for name in names:
      if name.startswith("N"):
        names_with_N.append(name)
    return names_with_N
the_names=["Nanuka","Nika","Giorgi"]
the_names_N=greet(the_names)
print(the_names_N)

