def missing_values(seq): 
    x = 0
    y = 0
    for i in seq:
        if seq.count(i) == 1:
            x = i
        elif seq.count(i) == 2:
            y =  i
    return x * x * y

def largest_pair_sum(numbers): 
    sorted_numbers = sorted(numbers)
    first_number = sorted_numbers[-1]
    second_number = sorted_numbers[-2]
    return first_number + second_number


def smaller(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for x in arr[i+1:]:
            if arr[i] > x:
                count += 1
        result.append(count)
    return result


def transpose(matrix):
    transpose_matrix = []
    for i in range(len(matrix[0])):
        result = []
        for j in range(len(matrix)):
            result.append(matrix[j][i])
        transpose_matrix.append(result)
    return transpose_matrix


def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += i ** 2
    return sum


def transpose(matrix):
    transpose_matrix = []
    for i in range(len(matrix[0])):
        result = []
        for char in range(len(matrix)):
            result.append(matrix[char][i])
        transpose_matrix.append(result)
    return transpose_matrix