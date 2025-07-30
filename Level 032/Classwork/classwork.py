def smash(words):
    return " ".join(words)
    

def minimum(arr):
    min = arr[0]
    for i in arr[1:]:
        if i < min:
            min = i
    return min

def maximum(arr):
    max = arr[0]
    for i in arr[1:]:
        if i > max:
            max = i
    return max

def reverse_seq(n):
    result=[]
    for i in range(1,n+1):
        result.append(i)
    return result[::-1]

def solution(s):
    result = ""
    for i in s:
        if i != i.upper():
            result += i
        else:
            result += " " + i
    return result