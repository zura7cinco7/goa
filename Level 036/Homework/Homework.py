def digital_root(n):
    if n < 10: return n

    return digital_root(sum(int(digit) for digit in str(n)))

def spin_words(sentence):
    words = sentence.split(" ")
    words_tre = []
    
    for word in words:
        if len(word) >= 5:
            word = word [::-1]
            words_tre.append(word)
        else:
            words_tre.append(word)
    return " ".join (words_tre)