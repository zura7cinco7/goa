def positive_sum(arr):
    return sum(number for number in arr if number > 0)

def square_sum(numbers):
    sum=0
    for number in numbers:
        sum+=number**2
    return sum

def sum_array(a):
    sum = 0
    for number in a:
        sum += number
    return sum

def find_average(numbers):
    if len(numbers) == 0:
        return 0
    sum = 0
    for number in numbers:
        sum += number
    average = sum / len(numbers)
    return average

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    count = 0
    sum_of_negatives = 0
    for number in arr:
        if number > 0:
            count += 1
        elif number < 0:
            sum_of_negatives += number
    return [count, sum_of_negatives]