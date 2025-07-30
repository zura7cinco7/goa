def is_valid_IP(strng):
    splited_string = strng.split('.')
    for i in splited_string:
        if i.isdigit() == False:
            return False
        elif len(splited_string) != 4:
            return False
        elif i.startswith('0') and len(i) > 1:
            return False
        elif int(i) > 255:
            return False
    return True


def shortest_steps_to_num(num):
    step = 0
    while num > 1:
        if num % 2 == 0:
            num = num // 2
        else:
            num = num - 1
        step += 1
    return step