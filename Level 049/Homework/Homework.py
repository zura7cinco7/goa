def shared_bits(a, b):
    count = 0
    while a > 0 and b > 0:
        count += (a & 1) & (b & 1)
        if count >= 2:
            return True
        a >>= 1
        b >>= 1
    return False


def freq_seq(s, sep):
    return sep.join(str(s.count(char)) for char in s)


def reverse_it(data):
    if type(data) == str:return data[::-1]
    elif type(data) == int:return int(str(data)[::-1])
    elif type(data) == float:return float(str(data)[::-1])
    else:
        return data


def find_missing_numbers(arr):
    if not arr:
        return [] 
    result = []
    min_num = min(arr)
    max_num = max(arr)
    for num in range(min_num, max_num + 1):
        if num not in arr:
            result.append(num)
    return result


def only_duplicates(st):
    result = ''
    for i in st:
        if st.count(i) > 1:
            result += i
    return result