def hero(bullets, dragons):
    return bullets >= dragons * 2

def reverse_number(n):
    if n < 0:
        return -int(str(n)[:0:-1])
    else:
        return int(str(n)[::-1]) 

def factorial(n):
    l= 1
    for i in range (1,n+1):
        l *= i
    return l

def remove_url_anchor(url):
    return url.split("#")[0]

def stray(arr):
    for num in arr:
        if arr.count(num)==1:
            return num


def kebabize(string):
    result = ""
    for i, char in enumerate(string):
        if char.isupper():
            if i > 0:
                result += "-"
            result += char.lower()
        elif char.isdigit(): 
            continue
        else:
            result += char
    
    return result.lstrip('-') 