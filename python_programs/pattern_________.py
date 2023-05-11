"""
*
**
***
****
*****


*                  #nuber of rows ==collumn,col=0,row=n-1,col=row has "*"
*  *
*    *
*      *
* * * * *

n=int(input("enter number of rows: "))
for row in range(n):
    for col in range(n):
        if col==0 or row==(n-1) or row==col:
            print("*",end="")
        else:
            print(end=" ")   #to print "space"
    print()

* * * * *
  *     *
    *   *
      * *
         *
"""

n=int(input("enter number of rows: "))
for row in range(n):
    for col in range(n):
        if col==(n-1) or row==0 or row==col:
            print("*",end="")
        else:
            print(end=" ")   #to print "space"
    print()

