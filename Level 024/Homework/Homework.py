def square_digits(num):
    str_num=str(num)
    result=""
    for char in str_num:
        result +=str(int(char)**2)
    return int(result)


def high_and_low(numbers):
    numbers = numbers.split() 
    numbers = [int(num)for num in numbers  ]
    highest = max(numbers)
    lowest = min(numbers)
    return str(highest) + " " + str(lowest)
print(high_and_low("1 -2 3 4"))


def accum(st):
    result = ""
    for i in range(len(st)):
        part = st[i].upper() + st[i].lower() * i
        result += part + "-"
    return result[:-1] 
print(accum("abcd"))
print(accum("RqaEzty"))
print(accum("cwAt")) 

def summation(num):
    return sum(range(1,num+1))

def spin_words(sentence):
    words=sentence.split(" ")
    words_r = []
    for word in words:
        if len(word) >= 5:
            word = word[::-1]
            words_r.append(word)
        else:
            words_r.append(word)
    return  " ".join(words_r)

def century(year):
    century=(year-1)//100+1
    return century


def find_smallest_int(arr):
    smallest_int=arr[0]
    for number in arr:
        if number > smallest_int:
            smallest_int=number
    return smallest_int


def maskify (cc):
    return "#" * (len(cc)-4) + cc [-4:]

def is_istogram (string):
    string=string.lower()
    counter=0
    for letter in string:
        isogramz=string.count(letter)
        counter+=isogramz
    return counter == len(string)


def solution (number):
    sum=0
    for i in range(1,number):
        if i % 3 == 0 and i % 5 == 0:
            sum+=i
    return sum
