# num1=[45,76,"xy",'z1',345]
# num4=[89,23,3]
# num2=[]
# for i in num4:
#     num2=num1.insert(5,i)
# print(num2)
    
    
# print(num1.extend(num4))

# num2=num1.copy()
# print(num2)

# user='raj 45'.split()
# print(user)  
 
# user=['raj', '45']
# print(''.join(user))

# while num!=0:
    
# num2=''
# def parrendrome(num):

#     num2=num[::-1]
#     print(num2)
#     return num2==num
# print(parrendrome(num))
num1=input("enter number")
def pallendrome(num1):
    
    z=len(num1)
    num2=0
    num3=0
    num4=0
    for i in range(1,z+1):
        num2=int(num1)%10
        num1=int(num1)//10
        # num3=(pow(10,(z-i)))*num2
        num3=10**(z-i)*num2
        num4=num4+num3
    return num4
print(pallendrome(num1))    



