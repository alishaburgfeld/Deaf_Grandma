def deaf_grandma():
    count=0
    response=input("HEY KID!")
    while count<2:
        if len(response)==0:
            response=input("WHAT?!")
        if response==response.upper():
            if response=="GOODBYE!":
                if count==1:
                    print("LATER,SKATER")
                    count+=1
                else:
                    response=input("LEAVING SO SOON?")
                    count+=1
            else:
                response=input("NO, NOT SINCE 1946!")
        else:
            response=input("WHAT?! SPEAK UP KID!")

deaf_grandma()
