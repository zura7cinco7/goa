def vowel_indices(word):
    vowels = 'aeiouyAEIOUY'
    result = []
    for i in range(len(word)):
        if word[i] in vowels:
            result.append(i + 1)
    return result



def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def prime_factors(n):
    prime_numbers = []
    i = 2
    while i * i <= n:
        if n % i == 0:
            if is_prime(i):
                prime_numbers.append(i)
            n = n // i
        else:
            i += 1
    if n > 1 and is_prime(n):
        prime_numbers.append(n)
    return prime_numbers



def more_zeros(s):
    final = []
    for i in s:
        if i not in final:
            binary_num = ord(i)
            binary = ''
            while binary_num > 0:
                binary = str(binary_num % 2) + binary
                binary_num //= 2
            if binary.count('0')> binary.count('1'):
                final.append(i)
    return final


def arrays_similar(seq1, seq2): 
    if len(seq1) != len(seq2):
        return False
    for i in seq1:
        if seq1.count(i) != seq2.count(i):
            return False
    return True