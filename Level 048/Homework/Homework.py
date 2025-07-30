def dont_give_me_five(start,end):
    count = 0
    for num in range(start,end + 1):
        if '5' not in str(num):
            count += 1
    return count


def capitalize(s):
    even_index = []
    odd_index = []
    for i in range(len(s)):
        if i % 2 == 0:
            even_index.append(s[i].upper())
            odd_index.append(s[i].lower())
        else:
            even_index.append(s[i].lower())
            odd_index.append(s[i].upper())
    return [''.join(even_index),''.join(odd_index)]


def fizzbuzz(n):
    result = []
    for i in range (1,n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
            
        else:
            result.append(i)
    return result

def up_array(arr):
    if len(arr) == 0:
        return None
    for num in arr:
        if num < 0 or num >9:
            return None
    number = 0
    for num in arr:
        number = number * 10 + num
    number += 1
    result = []
    for i in str(number):
        result.append(int(i))
    while len(result) < len(arr):
        result = [0] + result 
    return result