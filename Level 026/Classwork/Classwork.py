#შექმენით ფუნქცია, manual_capitalize რომელიც იქნება capitalize ფუნქციის კლონი
def capitalize(name):
    if not name:
        return name
    return name[0].upper() + name[1:].lower()
text = "my name is nino"
print(capitalize(text))  
#შექმენით ფუნქცია, manual_title, რომელიც იქნება title ფუნქციის კლონი
def manual_title(string1):
    is_space = False
    result = ""
    for i in string1:
        if i == " ":
            result += i
            is_space = True
        elif is_space:
            result += i.upper()
            is_space = False
        else:
            result += i.lower()
    return result[0].upper() + result[1:]
print(manual_title("hEllo mY NAME is Nino"))