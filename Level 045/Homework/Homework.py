def valid_phone_number(phone_number):
    if len(phone_number) != 14:
        return False
    if phone_number[0] != '(' or phone_number[4] != ')' or phone_number[5] != ' ' or phone_number[9] != '-':
        return False
    for i in range(14):
        if i in [0, 4, 5, 9]:
            continue
        if not phone_number[i].isdigit():
            return False
    return True


def longest_palindrome (s):
    if len(s) == 0:
        return 0
    def is_palindrome(sub):
        return sub == sub[::-1]
    
    max_len = 1 
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            if is_palindrome(s[i:j]):
                max_len = max(max_len, j - i) 
    
    return max_len

def is_int_array(arr):

    if not isinstance(arr, list):
        return False
    
    for i in arr:
        if not isinstance(i, (int, float)) or (isinstance(i, float) and i != int(i)):
            return False

    return True

def compute_sum(N):
    total_sum = 0
    
    for num in range(1, N + 1):
        while num > 0:
            total_sum += num % 10 
            num //= 10 
    return total_sum


def sum_arrays(array1, array2):
    if array1==[] and array2==[]:return []
    a1=""
    a2=""
    r=[]
    for i in array1:a1+=str(i)
    for p in array2:a2+=str(p)
    if a1!="":a1=int(a1)
    else:a1=0
    if a2!="":a2=int(a2)
    else:a2=0
    sign=""
    for k in str(a1+a2):
        if k=="-":
            sign="-"
        else:
            if sign=="-":
                r+=[int("-"+k)]
                sign=""
            else:r+=[int(k)]
    return r