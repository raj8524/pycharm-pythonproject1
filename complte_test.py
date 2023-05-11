"""
class arithmatic:
    def __init__(self,func):
        self.func=func
    def __call__(self,*args):
        a,b=args
        self.a=a
        self.b=b
        print(self.a*self.b)
        return self.func(*args)
@arithmatic
def addition(a,b):
    print(a+b)
addition(5,6)


class pro:
    def __init__(self,first,last,x):
        self.first=first
        self.last=last
        self.x=x
        email=f"{self.first}.{self.last}@gmail.com"
        # print(email)
    def email1(self):
        print(f"{self.first}.{self.last}@gmail.com")
    @property
    def fullname(self):
        return f"{self.first} + ' '+{self.last}"

    @fullname.setter
    def fullname(self,name):
        first,last=name.split(" ")
        self.first=first
        self.last=last
# pro_obj=pro("raj","kumar",10)
# pro_obj.email1()
# pro_obj.fullname=("corey sanchar")
# pro_obj.email1()


class nest_try(pro):
    def square(self,z):
        self.z=z
        return z*z
    def nested_mul(self,args):
        self.args=args
        l=[self.square(i) for i in args]
        return l

nest_try_obj=nest_try("raj","kumar",10)
print(nest_try_obj.nested_mul([5,6,7,8,2]))

nest_try_obj.email1()
nest_try_obj.fullname=("corey sanchar")
nest_try_obj.email1()
"""
import concurrent.futures
import time
start=time.perf_counter()
def add(a,b):
    print(f"sleeping")
    print(a+b)
    time.sleep(1)
    return 'done sleeping'
def main():
    with concurrent.futures.ProcessPoolExecutor() as executor:
        results=[executor.submit(add,10,20) for _ in range(1)]
        for f in concurrent.futures.as_completed(results):
            print(f.result())

    with concurrent.futures.ThreadPoolExecutor() as executor:
        results=[executor.submit(add,4,5) for _ in range(1)]
        for f in concurrent.futures.as_completed(results):
            print(f.result())

if __name__=="__main__":
    main()
    finish=time.perf_counter()
    print(f"finished in {round(finish-start,2)} seconds")




