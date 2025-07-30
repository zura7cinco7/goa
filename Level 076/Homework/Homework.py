def filter_string(st):
    numbers = '12345678910111213141516171819'
    result = ''
    for i in st:
        if i in numbers:
            result += i
    return int(result)



def highest_rank(arr):
    result = [arr[0]]
    first_int_count = arr.count(arr[0])
    for num in arr[1:]:
        if arr.count(num) > first_int_count:
            first_int_count = arr.count(num)
            result = [num]
        elif arr.count(num) == first_int_count:
            result.append(num)
    return max(result)



def up_array(arr):
    if len(arr) == 0:
        return None
    
    for num in arr:
        if num < 0 or num > 9:
            return None

        
    numbers = ""
    for num in arr:
        numbers += str(num)
    number = int(numbers) + 1

    result = []
    for char in str(number):
        result.append(int(char))
        
    while len(result) < len(arr):
        result = [0] + result
    
    return result


def solve(s):
    vowels = 'aeiou'
    subs = []
    sub = ''
    
    for char in s:
        if char.lower() not in vowels:
            sub += char
        else:
            if sub:
                subs.append(sub)
                sub = ''
    
    if sub:
        subs.append(sub)
    
    max_str = 0
    for i in subs:
        char_value = 0
        for char in i:
            char_value += ord(char.lower()) - ord('a') + 1
        if char_value > max_str:
            max_str = char_value
    
    return max_str
