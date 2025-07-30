def reverse_bits(n):
    result = 0
    while n > 0:
        result = result * 2 + n % 2
        n //= 2
    return result

def spot_diff(s1, s2):
    result = []
    min_len = min(len(s1), len(s2))
    for i in range(min_len):
        if s1[i] != s2[i]:
            result.append(i)
    if len(s1) != len(s2):
        for i in range(min_len, max(len(s1), len(s2))):
            result.append(i)
    
    return result
