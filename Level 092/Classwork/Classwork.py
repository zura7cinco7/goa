def count_letters_and_digits(s):
    numbers = 123456789
    count = 0
    for i in s:
        if i.isupper() or i.islower() or i.isdigit():
            count += 1
    return count

def even_last(numbers): 
    if not numbers:
        return 0
    sum = 0
    for i in range(len(numbers)):
        if i % 2 == 0:
            sum += numbers[i] * numbers[-1]
    return sum

def elevator_distance(array):
    result = 0
    
    for index in range(1, len(array)):
        result += abs(array[index - 1] - array[index])
    
    return result

def is_alt(s):
    vowels = 'aeiou'
    for i in range(len(s) - 1):
        if (s[i] in vowels and s[i + 1] in vowels):
            return False
        elif  (s[i] not in vowels and s[i + 1] not in vowels):
            return False
    return True

def longest_collatz(arr):
    result = []
    
    for number in arr:
        count = 0
        while number != 1:
            if number % 2 == 0:
                number /= 2
            else:
                number = 3 * number + 1
            count += 1
        result.append(count)
    
    index = result.index(max(result))
    
    return arr[index]