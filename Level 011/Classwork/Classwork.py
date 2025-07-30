#პაროლის ვალიდაციის პროგრამა:
#შექმენით ცვლადი სადაც შეინახავთ პაროლს(მაგალითად: goa1234)
#სანამ მომხარებელი არ შემოიყვანს სწორ პაროლს მანამდე შემოატანინეთ ხელახლა. 
#მომხარებელს ექნება 3 ცდა. თუ შემოიყვანა სწორი პაროლი დაუპრინტეთ , სხვა შემთხვევაში "Try again" და 
#დაპრინტეთ რამდენი მცდელობა დარჩა და გამოაკელით ცდას ერთი
my_password="goa1234"
your_password= ''

count=  3

while count > 0 and your_password != my_password:
    your_password=input("Enter your password (you have " + str(count) + " tries left):")
    count=count - 1

    if  your_password==my_password:
        print("Access Granted")
    elif count== 0:
        print("You've reached the maximum number of tries. Access denied!")
    else:
        print("Access denied! Try again")