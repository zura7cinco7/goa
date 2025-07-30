#შექმენით ფუნქიცა, manual_find, რომელსაც გადაეცემა არგუმენტად სთრინგიმ და ერთი სიმბოლო, რომელიც უნდა ვიპოვოთ ამ სთრინგში.
def manual_find(input_string, char_to_find):
    if char_to_find not in input_string:
        return -1
    index=0
    for i in input_string:
        if i == char_to_find:
            return index
        index+=1
print(manual_find("Nino","n"))
#შექმენით ფუნქცია manual_count, რომელსაც არგუმენტად გადაეცემა რიცხვბის სია, და ერთი რიცხვი, რომლის რაოდენობაც უნდა ვიპოვოთ ამ სიაში. დააბრუნეთ მიღებული რაოდენობა
def manual_count(numbers_list, nums_to_count):
    count=0
    for num in numbers_list:
        if num == nums_to_count:
            count += 1
    return count
num = [1,2,21,1,4,5]
result = manual_count(num,1)
print(result)