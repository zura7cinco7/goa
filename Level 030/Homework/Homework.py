#შექმენით სია, სადაც გექნებათ 5 ელემენტი. წაშალეთ სიის მე-3 ელემენტი და დაამატეთ ახალი მე-0 ინდექსზე. საბოლოოდ დააბრუნეთ ეს სია
listn=["Book","Bus","Car","Window","Bag"]
listn.pop(3)
listn.insert(0,"Phone")
print(listn)
#შექმენით ფუნქცია manual_len, რომელსაც გადაეცემა სთრინგი ან სია, ხოლო ფუნქციამ უნდა დააბრუნოს გადმოცემული სთრინგის/სიის სიგრძე(არ გამოიყენოთ len-ი)
def manuel_len(string):
    count=0
    for i in string:
            count+=1
    return count
string_len="Phone"
print(manuel_len(string_len))
#შექმენით ფუნქცია manual_pop, რომელსაც გადაეცემა ორი არგუმენტი, სია და ინდექსი. წაშალეთ სიიდან, გადმოცემულ ინდექსზე მყოფი ელემენტი. 
#საბოლოოდ კი დააბრუნეთ ეს სია(არ გამოიყენოთ .pop ფუნქცია)
def manuel_pop(listn,index):
      result =[]
      index1 = 0
      for i in listn:
            if index1 !=index:
                  result.append (i)
            index1 +=  1
      return result
print(manuel_pop([1,2,4,56,8],3))


