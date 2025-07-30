def diamond(n):
    if n <= 0 or n % 2 == 0:
        return None
    
    result = "*" * n + "\n"
    spaces = 1
    n -= 2
    while n > 0:
        current = " " * spaces + "*" * n + "\n"
        result = current + result + current
        spaces += 1
        n -= 2
    
    return result

def matrix_addition(a, b):
    matrix_add= []
    for i in range(len(a)):
        result = []
        for char in range(len(a[0])):
            result.append(a[i][char] + b[i][char])
        matrix_add.append(result)
    return matrix_add