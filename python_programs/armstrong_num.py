x=1641
y,z=x,0
i=len(str(x))
while x!=0:
    a=x%10
    z=z+pow(a,i)
    x=x//10
if z==y:
    print("its armstrong")
    print(z)
else:
    print("not armstrong")
    print(z)