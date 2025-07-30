def high(x):
    alphabet = "|ABCDEFGHIJKLMNOPQRSTUVWXYZ".lower()
    
    words = x.split()
    
    scores = []
    
    for word in words:
        score = 0
        for char in word:
            score += alphabet.index(char)
        scores.append(score)
    
    max_score = max(scores)
    max_word = scores.index(max_score)    
    
    return words[max_word]

def array_diff(a, b):
    result = []
    for i in a:
        if i not in b:
            result.append(i)
    return result


def bouncing_ball(h, bounce, window):
    if h > 0 and bounce > 0 and bounce < 1 and window < h:
        pass
    else:
        return -1
    
    count = 0
    
    while h > window:
        count += 2
        h = h * bounce
    
    return count - 1


def even_fib(n):
    num1 = 0
    num2 = 1
    even = 0
    
    while num1 < n:
        if num1 % 2 == 0:
            even += num1
        num1,num2 = num2 ,num1 + num2
    return even

