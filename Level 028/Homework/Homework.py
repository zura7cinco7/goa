def boolean_to_string(b):
    return str(b)

def find_smallest_int(arr):
    smallest_integer=arr[0]
    for number in arr:
        if number < smallest_integer:
            smallest_integer = number
    return smallest_integer

def solution(text, ending):
    string1 = len(text) - len(ending)
    string2 = len(text) - string1
    string3 = text[string1:]
    if string3 == ending:
        return True
    else:
        return False

# return masked string
def maskify(cc):
    z= []
    y = len(cc)
    for  x in cc:
        if y <= 3:
            z.append(x)
        else:
            if y == 4:
                z.append(x)
            else:
                z.append('#')
                y -= 1
                
    return ''.join(z)

# write the function is_anagram
def is_anagram(test, original):
    word1 = test.replace(" ", "").lower()
    word2 = original.replace(" ", "").lower()
    if len(word1) != len(word2):
        return False
    for char in word1:
        if word1.count(char) != word2.count(char):
            return False

    return True

def find_it(seq):
    for x in seq:
        if seq.count(x) % 2 != 0:
            return x

def array_diff(a, b):
    int_1=[]
    for i in a:
        if i not in b:
            int_1.append(i)
    return int_1
        