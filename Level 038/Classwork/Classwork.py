def check_exam(arr1,arr2):
    score = 0
    
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            score += 4
        elif arr2[i] == "":
            score += 0
        else:
            score -= 1
    if score < 0:
        return 0
    return score

def is_prime (numbers):
    if numbers <= 1:
        return False
    for i in range(2,int(numbers ** 0.5) + 1):
        if numbers % i == 0:
            return False
    return True

def reverse_number(n):
    return int(str(n)[::-1])

def backwards_prime(start, stop):
    result = []
    for  num in range (start,stop + 1):
        if is_prime(num):
            reversed_num = reverse_number(num)
            if num != reversed_num and is_prime(reversed_num):
                result.append(num)
    return result