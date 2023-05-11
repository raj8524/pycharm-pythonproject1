"""
def add_fund(ori_func):
    def wrapper(args):
        return (ori_func(sum(args)))
    return wrapper
@add_fund
def display(a,b):
    print(a)

display(4,5)


# def mySum(*args):
#     return sum(args)
# # Driver code
# print(mySum(1, 2, 3, 4, 5))
# print(mySum(10, 20))


coreyMschafer@gmail.com
corey.schafer@university.edu
corey-321-schafer@my-work.net

import re
pattern=re.compile(r'\d\d\d.\d\d\d.\d\d\d\d')   #to find fon number like 456-345-8899
pattern=re.compile(r'\d{3}.\d{3}.\d{4}')   #to find fon number like 456-345-8899
pattern=re.compile(r'\d\d\d[-.]\d\d\d[-.]\d\d\d\d')
pattern=re.compile(r'[89]00[-.]\d\d\d[-.]\d\d\d\d')#more specific it will match - or . #will match number start with 8 0r 9 suceed by 00
pattern=re.compile(r'Mr\.?\s[A-Z]\w*')
pattern=re.compile((r"[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)"))
"""


#
# import collections
# str1="developer"
# dict1={}
# dict1=collections.Counter(str1)
# print(dict1)

# k={8,9,[5,6],"l",{1,2},{"a":45},(4,5)}
# k[4]=3
# print(k)


# l1=[1,2,3,4]
# l2=list(map(lambda i:i**2,l1))
# print(l2)


# L = ['a', 'b', 'c', 'd']
# print ("""".join(L))

# str1="abcabcd"
# c1=0
# k=[]
# t=""
# for i in str1:
#     if i in k:
#         c1+=1
#         k.append(i)
#     else:
#         t=t+i
#
# import collections
# print(k)
# dict1={}
# s="hello world"
# # [count,item for count,item in enumerate(s)]
# dict1=collections.Counter(s)
# for item,value in dict1.items():
#     if value>1:
#         print(item)
#
# [count for i,count in collections.Counter(s).items() if count>1]

# print(dict1)
# l=[]
# for count,item in enumerate(s):
#     if item in s[count:]:
#         l.append(item)
#
#
#     print(count,item)
# print(l)
# import collections
# from collections import Counter
# for i in collections.Counter.items(list(s)):
#     print(i)



# from itertools import permutations
# number=input()
# # choices=list(map(int,number)) #split the number and convert it to integer list of digits
# res=permutations(number)      #produce all combinations of the digits
# res2=[]
# for i in res:
#     res2.append(int(''.join(i)))
# res2=sorted(res2)
# print(res2[res2.index(int(number))+1])  #print second largest digit
#

# def PermutationStep(num):
#     if sorted(list(str(num)), reverse=True) == list(str(num)):
#         return -1
#     ls = list(str(num))
#     n = 0
#     inx = 0
#     for ind, i in enumerate(ls[::-1]):
#         if i < n:
#             n = i
#             inx = -(ind + 1)
#             break
#         n = i
#     ls[inx], ls[inx + 1] = ls[inx + 1], ls[inx]
#
#     nl = ls[inx::-1][::-1]
#     ln = sorted(ls[inx+1:])
#     return ''.join(nl) + ''.join(ln)
#
# print(PermutationStep(23514))


#
# def findnext(ii):
#     iis=list(map(int,str(ii)))
#     for i in reversed(range(len(iis))):
#         if i == 0: return ii
#         if iis[i] > iis[i-1] :
#             break
#     left,right=iis[:i],iis[i:]
#     for k in reversed(range(len(right))):
#         if right[k]>left[-1]:
#            right[k],left[-1]=left[-1],right[k]
#            break
#     return int("".join(map(str,(left+sorted(right)))))
# print(findnext(34522))
# x=int(input("enter string"))
# t1=(2,4,5,6)
# l1=[]
# for i in t1:
#     l1.append(i*2)
# print(tuple(l1))
# l2=[i*2 for i in t1]
# print(tuple([i*2 for i in t1]))

# names = ['Java', 'Python', 'Go']
# delimiter = ','
# single_str = delimiter.join(names)
# print('String: {0}'.format(single_str))

# split = single_str.split(delimiter, 1)
# print('List: {0}'.format(split))
# l1=str()
# l1=",".join(names)
# print(l1.replace('java','c++'))
# print(l1)
# print(type(l1))
#
# split1=l1.split(',')
# print(tuple(split1))
import requests
import json
import functools
data = {
    "president": {
        "name": "Zaphod Beeblebrox",
        "species": "Betelgeusian"
    }
}
json_string=json.dumps(data,indent=4)
# print(json_string)
response = requests.get("https://jsonplaceholder.typicode.com/todos")
# todos = json.loads(response.text)
#
# print(response.json())

# l1=[3,4,56,78,2]
#
# x=functools.reduce(lambda a,b:a+b,l1)
# print(x)
#
# print(functools.reduce(lambda a,b:a if a>b else b,l1))

list1 = ['2', '22' '5', '7', '8', '1', '111']
l2=list()
# print(sorted(list1))
l2=[int(i) for i in list1]
# print(l2)
# print(sorted(l2))
# print(list(map(lambda a:str(a)),l2))





x="0100,0011,1010,1001"
l=[int(i) for i in x.split(',') if int(i) % 5==0]

print(l)
print()
print(",".join(l))


































































