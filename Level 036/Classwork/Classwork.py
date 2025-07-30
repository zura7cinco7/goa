def vaporcode(s):
    s = s.replace (" ","")
    string1 = s.upper ()
    strings = '  '.join (string1)
    return strings


def capitals(word):
    return[index for index in range (len(word)) if word [index].isupper()]

def nb_dig(n, d):
    count = 0
    for i in range(0, n + 1):
        squared_num = i ** 2
        count += str(squared_num).count(str(d))
    return count

def divisors(n):
    count = 0
    for i in range (1 , n + 1):
        if n % i == 0:
            count += 1
    return count

def number(bus_stops):
    sum = 0
    no_of_people = 0
    for item in bus_stops:
        sum = item [0] - item [1]
        no_of_people += sum
    return no_of_people

def count_bits(n):
    result = ""
    while n != 0:
        result += str(n % 2)
        n //= 2
    return result[::-1].count("1")