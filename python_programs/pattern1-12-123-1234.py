"""
1
12
123
1234
12345

i=1
while i !=6:
    for j in range(1,i+1):
        print(j,end="")
    print()
    i +=1
"""
"""
1
22
333
4444
55555

i=1
while i !=6:
    for j in range(1,i+1):
        print(i,end="")
    print()
    i +=1
"""
"""
1
2 3
4 5 6
7 8 9 10

k=1
for row in range(4):
    for col in range(row+1):
        if k!=11:
            print(k,end=" ")
        else:
            print(end ="")
        k += 1
    print()


k=1
i=1
while i !=5:
    for j in range(1,i+1):
        print(k,end=" ")
        k += 1
    print()
    i +=1

"""



