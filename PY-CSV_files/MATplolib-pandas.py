import matplotlib.pyplot as plt
%matplotlib inline

plt.xlabel('Day')
plt.ylabel('Tempature')
plt.title('Weather')
plt.plot(x,y,color='green',linewidth=3,linestyle='dotted',marker='D',alpha=0.8)
------------------
import matplotlib.pyplot as plt
plt.xlabel('Day')
plt.ylabel('Tempature')
plt.title('Weather')
days=[1,2,3,4,5]
max1=[80,90,65,75,40]
min1=[40,60,50,30,10]
avg1=[5,7,8,10,20]
plt.plot(days,max1,label="max1")
plt.plot(days,min1,label="min1")
plt.plot(days,avg1,label="avg1")
plt.legend(loc="best",shadow=True,fontsize="large")
plt.grid()

--------------------------------------

import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv(r'/Users/raj.kumar/Desktop/pythonProject1/final1.csv')
df1=df.input_rate
df2=df.output_rate
df3=df.interface
interface1=[df3]
inRate=[df1]
outRate=[df2]
xlabels=('Int')
ylabels=('RATES')
plt.plot(interface1,inRate,labels='IN')
plt.plot(interface1,outRate,labels='OUT')

--------------------------------------
import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv(r'/Users/raj.kumar/Desktop/pythonProject1/final1.csv')

xlabels=('Int')
ylabels=('RATES')
df.plot(kind='scatter',x='input_rate',y='output_rate')

---------------------------------------
ax = plt.gca()

df.plot(kind='line',x='interface',y='input_rate',ax=ax)
df.plot(kind='line',x='interface',y='output_rate', color='red', ax=ax)

----------------------------------------
ax = plt.gca()

df.plot(x='interface',y=['input_rate','output_rate'],kind='bar')


























