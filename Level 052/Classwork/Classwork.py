def valid_phone_number(phone_number):
    splited_ph = phone_number.split()
    if len(splited_ph) != 2 or phone_number.count("-") == 0:
        return False
    string1 = "()-0123456789"
    if phone_number[0] != "(" or phone_number[4] != ")":
        return False
    elif len(splited_ph[1]) != 8:
        return False
    
    for i in "".join(splited_ph):
        if i not in string1:
            return False
    return True


def clean_string(s):
    
    if not s: return ""

    result = []
    
    for i in s:
        if i == "#" and len(result) > 0:
            result.pop()
        elif i != "#":
            result.append(i)
    return "".join(result)

def highest_rank(arr):
    result = [arr[0]]
    
    count = arr.count(arr[0])
    
    for i in arr[1:]:
        if arr.count(i) > count:
            count = arr.count(i)
            result = [i]
        elif arr.count(i) == count:
            result.append(i)
    return max(result)