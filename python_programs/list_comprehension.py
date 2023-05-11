mylist = ["a", "b", "a", "c", "c"]
l1=[]
[l1.append(mylist[k]) if mylist[k] not in l1 else (k+1) for k in range(len(mylist)) ]
print(l1)


x=[i for i in range(8) if i%2==0 and i!=0 if i%3==0]
print(x)

# [[i*j for j in range(1,11)] for i in range(7,9)]



s = ['son','abc','pro','bro']
b = ['son','bro','pro']
c = ['pro','quo']
list1 = [s.index(item) if item in b else s.index(item)+10 for item in s if item in c]
print(list1)

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
     [9, 10, 11, 12]]

print([[row[i] for row in matrix] for i in range(4)])