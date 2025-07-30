# 4) შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს string-ს. ამ ფუნქციამ უნდა გაიგოს გადმოცემულ string-ში თითოეული სიმბოლოს რაოდენობა და 
# ჩაამატოს ახალ სიაში(ერთი სიმბოლის რაოდენობა მხოლოდ ერთხელ უნდა ჩაამატოთ. მგალითად თუ string-ში 5 "a" გვხვდება, რიცხვი 5 მასივში მხოლოდ 
# ერთხელ უნდა ჩავამატოთ, მაგრამ სხვა სიმბოლოც თუ გვხვდება იგივე რაოდენობით, მას ვამატებთ ჩვეულებრივ). საბოლოდ დაასორტირეთ მიღებული სია 
# ზრდადობით და დააბრუნეთ
def argument_string(string):
    listn=[]
    for i in string:
            count=string.count(i)
            if count not in listn:
                  listn.append(count)
    return list(listn)
string="hello"
print(argument_string(string))
# 5) შექმენთ ფუნქცია, რომელიც არგუმენტად იღებს სიმბოლოების სიას. დაასორტირეთ ეს სია ანბანის მიხედვით, გადააქციეთ string-ად და დააბრუნეთ
def argument_list_of_symbols(symbols_list):
    symbols_as_strings = []
    for i in symbols_list:
        symbols_as_strings.append(str(i))
    sorted_symbols = sorted(symbols_as_strings) 
    return " ".join(sorted_symbols)
symbols_list = [1,5,3,2,4]
print(argument_list_of_symbols(symbols_list))
# 6) შექმენით ფუნქცია, რომელიც არგუმენტად იღებს რიცხვების სიას და აბრუნებს მას კლებადობის მიხედვით დასორტირებულს
def list_of_numbers(numbers):
     numbers.sort()
     numbers.reverse()
     return numbers
print(list_of_numbers([1,2,3,4,5,6,7,8,9]))