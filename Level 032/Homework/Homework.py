def find_short(s):
    words=s.split()
    lenghts=[]
    for word in words:
        lenghts.append(len(word))
    return min(lenghts)


def xo(s):
    s = s.lower()
    return s.count("x") == s.count("o")

def is_isogram(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1: return False
    return True

def validate_pin(pin):
    if len(pin)==4 and pin.isnumeric():
        return True
    if len(pin)==6 and pin.isnumeric():
        return True
    else:
        return False
    
def longest(a1, a2):
    ne_list=[]
    a1=a1+a2
    for i in a1:
        if i not in ne_list:
            ne_list.append(i)
    return "".join(sorted(ne_list))

def to_camel_case(s):
    if not s:
        return s
    words = s.replace('-', '_').split('_')
    first_word = words[0]
    capitalized_words = [first_word] + [word.capitalize() for word in words[1:]]
    return ''.join(capitalized_words)



