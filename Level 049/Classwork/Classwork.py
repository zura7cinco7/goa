def calculate(s):
    
    string1 = " ".join(s.replace("plus", "+").replace("minus", "-").split("+"))
    str2 = string1[0]
    for i in string1[1:]:
        if i == "-":
            str2 += " -"
        else:
            str2 += i
    
    result = 0
    
    for i in str2.split():
        result += int(i)
    return str(result)


def even_or_odd(s):
    even = 0
    odd = 0
    
    for i in s:
        if int(i) % 2 == 0:
            even += int(i)
        else:
            odd += int(i)
            
    if even > odd: return "Even is greater than Odd"
    elif even < odd: return "Odd is greater than Even"
    else: return "Even and Odd are the same"


def nth_char(words):
    result = ''
    i = 0
    for word in words:
        result += word[i]
        i += 1
    return result