def compute_sum(n):
    total = 0
    for i in range (1 , n + 1):
        while i > 0:
            total += i % 10
            i //= 10
    return total


def str_sum(arr):
    result = ""
    minus = False
    
    for number in arr:
        if "-" in str(number):
            result += str(number).replace("-", "")
            minus = True
        else:
            result += str(number)
    
    if minus:
        return -int(result)
    else:
        return int(result)

def sum_arrays(array1,array2):
    if not array1 and not array2:
        return []
    if not array1:
        return array2
    if not array2:
        return array1
    
    result = []
    
    sum = str_sum(array1) + str_sum(array2)
    
    if sum >= 0:
        for char in str(sum):
            result.append(int(char))
    else:
        for char in str(sum)[1:]:
            result.append(int(char))
        result[0] *= -1