def get_middle(s):
    s_len = len(s)
    middle_char = s_len // 2
    if s_len % 2 == 0:
        return s[middle_char -1: middle_char + 1]
    return s[middle_char]


def high_and_low(numbers):
    nums = [int(num) for num in numbers.split()]
    highest = max(nums)
    lowest = min(nums)
    return str(highest) + " " + str(lowest)

#1 
def find_shortest_word_length(s):
    words = s.split()
    lengths = []
    for word in words:
        lengths.append(len(word))
    return min(lengths)

#2
def find_short(s):
    splited_str = s.split()
    min_len = len(splited_str[0])
    for i in splited_str[1:]:
        if len(i) < min_len:
            min_len = len(i)
    return min_len