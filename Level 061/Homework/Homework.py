def twice_as_old(dad_years_old, son_years_old):
    years = dad_years_old - 2 * son_years_old
    if years < 0 :
        return -years
    return years

def is_palindrome(s):
    s = s.lower()
    if s == s[::-1]:
        return True
    else:
        return False
    

def whatday(num):
    if num == 1:
        return 'Sunday'
    elif num == 2:
        return 'Monday'
    elif num == 3:
        return 'Tuesday'
    elif num == 4:
        return 'Wednesday'
    elif num == 5:
        return 'Thursday'
    elif num == 6:
        return 'Friday'
    elif num == 7:
        return 'Saturday'
    else:
        return 'Wrong, please enter a number between 1 and 7'
    


def problem(a):
    if isinstance(a, str):
        return 'Error'
    else:
        return a * 50 + 6


def distinct(seq):
    result = []
    for i in seq:
        if i >= 1 and i not in result:
            result.append(i)
    return result


def two_sort(array):
    sorted_array = sorted(array)
    first_letter_of_array = sorted_array[0]
    list = '***'.join(first_letter_of_array)
    return list

def create_array(n):
    num = []
    for i in range(1,n + 1):
        num.append(i)
    return num

def billboard(name, price=30):
    length = len(name)
    result = 0
    for i in range(length):
        result += price
    return result

def name_shuffler(str_):
    split = str_.split()
    if len(split) == 2:
        return ' '.join(split[::-1])
    return str_


def reverse(st):
    split = st.split()
    if len(split) >= 2:
        return ' '.join(split[::-1])
    return st


def hex_to_dec(s):
    hex_decimal = int(s,16)
    return hex_decimal


def get_real_floor(n):
    if n > 13:
        return n - 2
    elif n > 0:
        return n - 1
    else:
        return n 
    


def _if(bool, func1, func2):
    if bool:
        return func1()
    else:
        return func2()
    

def position(letter):
    if letter == 'a':
        return 'Position of alphabet: 1'
    if letter == 'b':
        return 'Position of alphabet: 2'
    if letter == 'c':
        return 'Position of alphabet: 3'
    if letter == 'd':
        return 'Position of alphabet: 4'
    if letter == 'e':
        return 'Position of alphabet: 5'
    if letter == 'f':
        return 'Position of alphabet: 6'
    if letter == 'g':
        return 'Position of alphabet: 7'
    if letter == 'h':
        return 'Position of alphabet: 8'
    if letter == 'i':
        return 'Position of alphabet: 9'
    if letter == 'j':
        return 'Position of alphabet: 10'
    if letter == 'k':
        return 'Position of alphabet: 11'
    if letter == 'l':
        return 'Position of alphabet: 12'
    if letter == 'm':
        return 'Position of alphabet: 13'
    if letter == 'n':
        return 'Position of alphabet: 14'
    if letter == 'o':
        return 'Position of alphabet: 15'
    if letter == 'p':
        return 'Position of alphabet: 16'
    if letter == 'q':
        return 'Position of alphabet: 17'
    if letter == 'r':
        return 'Position of alphabet: 18'
    if letter == 's':
        return 'Position of alphabet: 19'
    if letter == 't':
        return 'Position of alphabet: 20'
    if letter == 'u':
        return 'Position of alphabet: 21'
    if letter == 'v':
        return 'Position of alphabet: 22'
    if letter == 'w':
        return 'Position of alphabet: 23'
    if letter == 'x':
        return 'Position of alphabet: 24'
    if letter == 'y':
        return 'Position of alphabet: 25'
    if letter == 'z':
        return 'Position of alphabet: 26'
    

def subtract_sum(number):
    return 'apple'