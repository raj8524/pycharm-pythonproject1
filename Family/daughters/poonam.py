
class poonam_details:
   height=6.0
   def __init__(self,age,color,graduation):
       print("its parent class ")
       self.age=age
       self.color=color
       self._graduation = graduation
   def academics(self,primary,secondary,name,college):
       self.primary=primary
       self.secondary=secondary
       self.name=name
       self.college=college
class physiq:
   def __init__(self):
       pass
   def setname(self,new_degree):
       self._graduation=new_degree
       print(self._graduation)
       # print(self.college)
class strength:
   height=5.2
   def __init__(self):
       pass
   @classmethod
   def poonam_height(cls):
       return cls.height
   @staticmethod
   def hardwork():
       print("ur hardwork pays")


poonam_obj=poonam_details(28,'fair',"netaji")
# raj_obj1=raj_details(28,'fair',"b.tech") it wont let u create more than 1 object
poonam_obj.academics(10,12,"poonam","DAV")
# print(raj_obj1.age)
print(poonam_obj.primary)
phy1=physiq()
print(poonam_obj._graduation)
phy1.setname("java developer")
str23=strength()
print(str23.poonam_height())