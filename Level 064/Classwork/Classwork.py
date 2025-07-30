def derive(coefficient, exponent): 
    return str(coefficient * exponent) + 'x^' + str(exponent - 1)

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a // b

def mod(a, b):
    return a % b

def exponent(a, b):
    return a ** b

def subt(a, b):
    return a - b 



def open_or_senior(data):
    result = []
    for i in data:
        if i [0] >= 55 and i[1] > 7:
            result.append('Senior')
        else:
            result.append('Open')
    return result