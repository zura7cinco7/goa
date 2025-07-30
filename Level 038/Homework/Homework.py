def sum_cubes(n):
    result = 0
    for i in range (1, n + 1):
        result += i ** 3
    return result

def disarium_number(number):
    str_num = str(number)
    disarium_sum = sum(int(digit) ** (index + 1) for index, digit in enumerate(str_num))
    if  disarium_sum == number:
        return "Disarium !!"
    else:
        return "Not !!"
    
def most_frequent_item_count(collection):
    if not collection:
        return 0
    return max(collection.count(item) for item in set(collection))


def in_asc_order(arr):
    for num in arr:
        if sorted(arr) == arr:
            return True
    return False

def max_multiple(divisor, bound):
    return (bound // divisor) * divisor

def sum_dig_pow(a, b): 
    def is_eureka(num):
        digits = str(num)
        total_sum = sum(int(digit) ** (i + 1) for i, digit in enumerate(digits))
        return total_sum == num  
    return [num for num in range(a, b + 1) if is_eureka(num)]