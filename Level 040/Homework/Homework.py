def sum_digits(number):
    number_str = str(number).replace("-","")
    sum = 0
    for digit in number_str:
        sum += int(digit)
    return sum

def solution(nums):
    if nums is None or len(nums) == 0:
        return []
    return sorted(nums)

# პირველი ხერხი
def high (x):
    alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    split = x.split()
    score = 0
    high_word_score = 0
    big_word = []
    for each in split:
        print(each)
        for every in each:
            if every in alphabet:
                score = score + alphabet.index(every) + 1
                print(score)
        if score > high_word_score:
            high_word_score = score
            big_word = each
            score = 0
        else:
            score = 0
    return big_word
    
# მეორე ხერხი
def high(x):
    sentence = x.split()
    max = 0
    high = ''
    for word in sentence:
        score = 0
        for character in word:
            score += ord(character) - 96
        if score > max:
            max = score
            high = word
    return high

def find_missing_letter(chars):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if chars[0].isupper():
        alphabet = alphabet.upper()
    start_idx = alphabet.index(chars[0])
    for i, char in enumerate(chars):
        if char != alphabet[start_idx + i]:
            return alphabet[start_idx + i]
    

def variance(numbers): 
    total = 0
    variance = 0
    for i in numbers:
        total += i
    total /= len(numbers)
    for i in numbers:
        variance += (i - total) ** 2
    return variance / len(numbers)