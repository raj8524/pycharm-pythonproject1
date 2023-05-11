import matplotlib.pyplot as plt

x=[4,5,6,7]
y=[60,50,40,70]
plt.xlabel('Day')
plt.ylabel('Tempature')
plt.title('Weather')
plt.plot(x,y,color='green',linewidth=3,linestyle='dotted')