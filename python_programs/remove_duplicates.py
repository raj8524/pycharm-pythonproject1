import collections
mylist = ["a", "b", "a", "c", "c"]
print(list(collections.Counter(mylist)))

l1=[]
for k in range(len(mylist)):
    if mylist[k] not in l1:
        l1.append(mylist[k])
    else:
        k=k+1
print(l1)


[l1.append(mylist[k]) if mylist[k] not in l1 else (k+1) for k in range(len(mylist)) ]
print(l1)


x=[i for i in range(8) if i%2==0 and i!=0 if i%3==0]
print(x)

[[i*j for j in range(1,11)] for i in range(7,9)]
