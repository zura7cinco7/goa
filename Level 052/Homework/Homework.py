def multiple_of_index(arr):
    if len(arr) <= 1:
        return arr
    new_arr = []
    if arr[0] == 0:
        new_arr.append(arr[0])
    for i in range(1, len(arr)):
        if arr[i] % i == 0:
            new_arr.append(arr[i])
    return new_arr


def gimme(input_array):
    listed = sorted(input_array)
    middle = listed[1]
    return input_array.index(middle)

def sum_of_minimums(numbers):
    result = 0
    for num in numbers:
        result += min(num)
    return result


def two_oldest_ages(ages):
    oldest = max(ages)
    ages.remove(oldest)
    oldest2 = max(ages)
    return [oldest2,oldest]


def even_fib(n):
    a = 0
    b = 1
    even = 0
    
    while a < n:
        if a % 2 == 0:
            even += a
        a,b = b, a + b
    return even