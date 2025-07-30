def merge_strings(first, second):
    for i in range(len(first)):
        if first[i:] == second[:len(first) -i]:
            return first + second [len(first) - i:]
    return first + second


def reverse_it(data):
    if type(data) == str:
        return str(data[::-1])
    elif type(data) == int:
        return int(str(data)[::-1])
    elif type(data) == float:
        return float(str(data)[::-1])
    else:
        return data
    


def gimme_the_letters(sp):
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    start_of_sp = sp[0]
    end_of_sp = sp[-1]
    result = ''
    start_of_sp_index = alphabet.index(start_of_sp)
    end_of_sp_index = alphabet.index(end_of_sp)
    for i in range(start_of_sp_index,end_of_sp_index + 1):
        result += alphabet[i]
    return result


def number(bus_stops):
    sum = 0
    no_of_people = 0
    for item in bus_stops:
        sum = item [0] - item [1]
        no_of_people += sum
    return no_of_people



def largest_pair_sum(numbers): 
    sort = sorted(numbers)
    max_number = sort[-1]
    max_number2 = sort[-2]
    return max_number + max_number2


def find_missing_letter(chars):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if chars[0].isupper():
        alphabet = alphabet.upper()
    start_index = alphabet.index(chars[0])
    for i in range(len(chars)):
        if chars[i] != alphabet[start_index + i]:
            return alphabet[start_index + i]