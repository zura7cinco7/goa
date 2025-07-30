def my_languages(results):
    result = []
    for i in sorted(results,key=results.get)[::-1]:
        if results[i] >= 60:
            result.append(i)
    return result


def smallest_integer(matrix):
    num = sum(matrix, [])
    smallest = 0
    while smallest in num:
        smallest += 1
    return smallest

def group_by_commas(n):
    str_n = str(n)
    if len(str_n) >= 4:
        reversed_n = str_n[::-1]
        sorted = []
        for i in range(0,len(reversed_n),3):
            sorted.append(reversed_n[i:i+3])
        result = ','.join(sorted)[::-1]
        return result
    else:
        return str_n
    


def find_arr(arr_a, arr_b, rng, wanted):
    counts_a = {}
    counts_b = {}

    for i in arr_a:
        if i not in counts_a:
            counts_a[i] = 0
        counts_a[i] += 1

    for i in arr_b:
        if i not in counts_b:
            counts_b[i] = 0
        counts_b[i] += 1

    result = []
    for i in counts_a:
        if i in counts_b:
            if counts_a[i] > 1 and counts_b[i] > 1:
                if rng[0] <= i <= rng[1]:
                    if wanted == "odd" and i % 2 != 0:
                        result.append(i)
                    elif wanted == "even" and i % 2 == 0:
                        result.append(i)

    return sorted(result)