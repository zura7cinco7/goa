def most_frequent_item_count(collection):
    if not collection:
        return 0
    max_count = 0
    for i in collection:
        count = collection.count(i)
        if count > max_count:
            max_count = count
    return max_count

def move_ten(st):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    result = ''
    for i in st:
        if i in alphabet:
            new_list = (alphabet.index(i) + 10) % 26
            result += alphabet[new_list]
        else:
            result += i
    return result

def collatz(n):
    length = 1 
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = n * 3 + 1
        length += 1 
    return length

