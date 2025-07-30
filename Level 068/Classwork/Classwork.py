def count_smileys(arr):
    eyes = [':',';']
    nose = ['-','~']
    mouth = [')','D']
    
    count = 0
    
    for smile in arr:
        if len(smile) == 2 and smile[0] in eyes and smile[1] in mouth:
            count += 1
        elif len(smile) == 3 and smile[0] in eyes and smile[1] in nose and smile[2] in mouth:
            count += 1
    return count


def dup(arry):
    result = []
    for word in arry:
        new_word = ""
        for i in range(len(word)):
            if i == 0 or word[i] != word[i - 1]:
                new_word += word[i]
        
        result.append(new_word)
    
    return result


def pyramid(n):
    result = []

    for i in range(0, n):
        sub_array = []
        for count in range(i + 1):
            sub_array.append(1)
        result.append(sub_array)

    return result



def shortest_steps_to_num(num):
    step = 0
    while num > 1:
        if num % 2 == 0:
            num = num // 2
        else:
            num = num - 1
        step += 1
    return step