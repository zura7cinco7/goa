def in_asc_order(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
        if arr == arr[::-1]:
            return False
    return True


def maskify(cc):
    hided = '#' * (len(cc) - 4)
    four = cc[-4:]
    return hided + four

def valid_braces(string):
    while len(string) > 0:
        if '()' in string:
            string = string.replace('()','')
        elif '[]' in string:
            string = string.replace ('[]','')  
        elif '{}' in string:
            string = string.replace ('{}','')
        else:
            return False
    return True


def expanded_form(num):
    num_str = str(num)
    len_num = len(num_str)
    result = []
    for i in range(len_num):
        i1 = num_str[i]
        if i1 != '0':
            result.append(i1 + '0' *(len_num -i - 1))
    return ' + '.join(result)


def expanded_form(num):
    num_str = str(num)
    if '.' in num_str:
        int_num,num_str1 = num_str.split('.')
    else:
        int_num,num_str1 = num_str, ''

    result = []
    for i in range(len(int_num)):
        if int_num[i] != '0':
            result.append(int_num[i] + '0' * (len(int_num) - i - 1))
            
    for i in range(len(num_str1)):
        if num_str1[i] != '0':
            result.append(num_str1[i] + '/' + '1' + '0' * (i + 1))

    return ' + '.join(result)



