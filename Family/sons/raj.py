class Meta(type):
    _instance={}
    def __call__(cls,*args, **kwargs):
        if cls not in cls._instance:
            cls._instance[cls]=super(Meta,cls).__call__(*args, **kwargs)
            return cls._instance[cls]

class raj_details(metaclass=Meta):
   height=7.5
   def __init__(self,age,color,graduation):
       self.age=age
       self.color=color
       self._graduation = graduation
   def academics(self,primary,secondary,name,college):
       self.primary=primary
       self.secondary=secondary
       self.name=name
       self.college=college
   def setname(self,new_degree):
       self._graduation=new_degree
       print(self._graduation)
       print(self.college)
   @classmethod
   def raj_height(cls):
       return cls.height
   @staticmethod
   def hardwork():
       print("ur hardwork pays")
raj_obj=raj_details(28,'fair',"b.tech")
# raj_obj1=raj_details(28,'fair',"b.tech") it wont let u create more than 1 object
raj_obj.academics(10,12,"raj","LPU")
# print(raj_obj1.age)
print(raj_obj.primary)
print(raj_obj._graduation)
raj_obj.setname("m.tech")
print(raj_obj.raj_height())
