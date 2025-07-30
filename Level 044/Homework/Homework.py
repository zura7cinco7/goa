def dup(arry):
    result = []
    for word in arry:
        new_word = ""
        for i in range(len(word)):
            if i == 0 or word[i] != word[i - 1]:
                new_word += word[i]
        
        result.append(new_word)
    
    return result

def encode(st):
    st = st.replace('a','1').replace('e','2').replace('i','3').replace('o','4').replace('u','5')
    return st
def decode(st):
    st = st.replace('1','a').replace('2','e').replace('3','i').replace('4','o').replace('5','u')
    return st