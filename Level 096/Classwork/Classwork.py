def sp_eng(sentence): 
    word = 'english'
    if word in sentence.lower():
        return True
    else:
        return False
    
def logical_calc(array, op):
    if op == 'AND' :
        result = True
        for i in array:
            result = result and i
    elif op == 'OR':
        result = False
        for i in array:
            result = result  or i
    elif op == "XOR": 
        result = False 
        for i in array: 
            result = result != i
    return result


def simplify(number): 
    if number == 0: 
        return ''
      
    result = ""
    num = 1
    number_length = len(str(number))
    
    for i in str(number)[:-1]:
        if i != "0":
            result += i + "*" + "1" + "0" * (number_length - num) + "+"
        num += 1
    return result + str(number)[-1] if str(number)[-1] != "0" else result[:-1]
