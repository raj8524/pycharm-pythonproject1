"""
class a:
    def __init__(self):
        print("cc")
    def define(self,a,b):
        self.a=a
        self.b=b
        add1=self.a + self.b
        return add1
class b():
    # def __init__(self):
    #     super().__init__()
    #     print("ists class b")
    def define1(self,c):
        self.c=c
        add2=self.a+self.b+self.c
        return add2
class c(b,a):
    def define3(self,z):
        self.z=z
        addd=self.a+self.b+self.c+self.z
        return addd

obj2=c()
obj2.define(3,4)
print(obj2.define1(5))

# b.define()
print(obj2.define3(9))

# def mygen(*args):
#     for i in args:
#         yield(args)
# x=[2,4,5]
# for k in mygen(*x):
#     print(pow(k,2))
#
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

def ordinary():
    print("I am ordinary")
var=make_pretty(ordinary)
var()
"""

class First:
    def __init__(self,first,x,**kwargs):
        self.first = first
        self.x=x
        print("enter in 1st")
        super().__init__(**kwargs)
    def add2(self,y):
        self.y=y
        print(y+self.x)
class Second:
    def __init__(self,second,**kwargs):
        self.second = second
        print("enter in 2nd")
        super().__init__(**kwargs)
class Third:
    def __init__(self,third,**kwargs):
        self.third = third
        print("enter in 3rd")
        super().__init__(**kwargs)

class Combined(First,Second,Third):
    def __init__(self,f,s,t,x):
        print("combined classes")
        super().__init__(first=f,second=s,third=t,x=x)
c=Combined("abc","xyz",4,10)
print(c.first)
print(c.third)
print(c.x)
c.add2(40)








































