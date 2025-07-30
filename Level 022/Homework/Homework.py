def greet():
    return "hello world!"

def multiply(a, b):
    return (a*b)
final=multiply(2,2)
print(final)

def find_smallest_int(arr):
    smallest_int=arr[0]
    for number in arr:
        if number < smallest_int:
            smallest_int=number
    return smallest_int  

def solution(string):
    return string[::-1]

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

def square_digits(num):
    return int(''.join(str(int(digit) ** 2) for digit in str(num)))
#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა რიცხვი, ხოლო ამ ფუნქციამ უნდა დაბეჭდოს 1-დან გადმოცემულ რიცხვამდე ყველა რიცხვი
def greet (number):
    for i in range(1,number+1):
        print(i)
greet(4)

#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ორი რიცხვი, ხოლო ამ ფუნქციამ უნდა დააბრუნოს პირველი რიცხვი აყვანილი მე-2 რიცხვის ხარისხში
def greet(num1,num2):
    return num1**num2
final=greet(4,2)
print(final)