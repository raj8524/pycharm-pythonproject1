
class monu_details:
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
   def setname(self,new_degree):
       self._graduation=new_degree
       print(self._graduation)
       print(self.college)
class strength(monu_details,physiq):
   @classmethod
   def monu_height(cls):
       return cls.height
   @staticmethod
   def hardwork():
       print("ur hardwork pays")
monu_obj=strength(28,'fair',"haryana college")
# raj_obj1=raj_details(28,'fair',"b.tech") it wont let u create more than 1 object
monu_obj.academics(10,12,"monu","Bal vikash")
# print(raj_obj1.age)
print(monu_obj.primary)
print(monu_obj._graduation)
monu_obj.setname("director")
print(monu_obj.monu_height())
