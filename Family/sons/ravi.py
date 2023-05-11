class ravi_details:
   height=5.5
   def __init__(self,age,color,graduation):
       self.age=age
       self.color=color
       self._graduation = graduation
       self.deto=self.details()
   def ravi_academics(self,primary,secondary,name,college):
       self.primary=primary
       self.secondary=secondary
       self.name=name
       self.college=college

   class details:
       height = 5.1
       def ravi_setname(self,new_degree):
           self._graduation=new_degree
           print(self._graduation)
           # print(self.college)
       @classmethod
       def ravi_height(cls):
           return cls.height
       @staticmethod
       def hardwork():
           print("ur hardwork pays")
ravi_obj=ravi_details(22,'sawla',"MBBS")
# raj_obj1=raj_details(28,'fair',"b.tech") it wont let u create more than 1 object
ravi_obj.ravi_academics(10,12,"kalu","NMCH")
# print(raj_obj1.age)
print(ravi_obj.primary)
print(ravi_obj._graduation)
ravi_obj.deto.ravi_setname("PHD")
print(ravi_obj.deto.ravi_height())