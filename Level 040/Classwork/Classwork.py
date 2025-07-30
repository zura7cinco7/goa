def reverse_bits(n):
    bynary = bin(n)[2:]
    result = 0
    index = 0
    for i in bynary[::-1]:
        result += int(i) * (2 ** (len(bynary) - (index + 1)))
        index += 1
    return result


def calculator(txt):
    str_list = txt.split()
    
    s1 = len(str_list[0])
    s2 = len(str_list[2])
    
    if str_list[1] == "+": return (s1 + s2) * "."
    elif str_list[1] == "-": return (s1 - s2) * "."
    elif str_list[1] == "*": return (s1 * s2) * "."
    
    return (s1 // s2) * "."

def move_zeros(lst):
    result = []
    zero_count = 0
    for num in lst:
        if num != 0:
            result.append(num)
        else:
            zero_count += 1
            
    for _ in range(zero_count): 
            result.append(0) 
    return result