#შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას, ფუნქციამ ამ წინადადების თითოეული სიტყვა უნდა შეინახოს სიაში, როგორც ცალკე ელემენტი. საბოლოოდ გადააქციეთ სია ისევ წინადადებად,
#სადაც სიტყვებს შორის არის მძიმე და ერთი დაშორება(", ")
def sentences (sentence):
    words=sentence.split()
    result=" "
    i=0
    for word in words:
        if i > 0:
            result += ", "
        result+=word
        i+=1
    return result
print(sentences("This test is not right it is wrong"))
#შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების რაოდენობას(ცალ-ცალკე)
def sentences_sentence(sentence):
    words=sentence.split()
    for word in words:
        print(word + " " + str(len(word)))
sentences_sentence("This test is wrong and not right")
#შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space). თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). საბოლოოდ დააბრუნეთ ეს წინადადება
def spaced_sentence(sentence):
    words=sentence.split()
    result=" "
    i=0
    for word in words:
        if i > 0:
            result += " "
        result+=word
        i+=1
    return result
print(spaced_sentence("This        test      is       right"))
#შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-"). საბოლოოდ კი აბრუნებს მას
def replace_spaces_with_dashes(sentence):
    words=sentence.split()
    result=" "
    i=0
    for word in words:
        if i > 0:
            result += "-"
        result+=word
        i+=1
    return result
print(replace_spaces_with_dashes("my name is nino"))
#შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. თქვენი დავალებაა ამ წინადადების სიტყვები შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული)
def reverse_words(sentence):
    words=sentence.split()
    result=""
    i=0
    reversed_words=list(reversed(words))
    for word in reversed_words:
        if i > 0:
            result += ""
        result+=word
        i+=1
    return result
print(reverse_words("Hello world!"))
#მაგალითად: "Hello World!" >>> "World! Hello"