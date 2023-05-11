# x=set()
# # l=[7,8,20,30,61,59,17]
# for i in range(1,20):
#     c=0
#     for j in range(2,i):
#         if i%j==0:
#             c=c+1
#             break
#     if i!=1 and c==0:
#         x.add(i)
# print(x)
# z={5,6,90,80,45}
# min1=list(z)
# min2=min1[2]
# for i in z:
#     if i<min2:
#         min2=i
# print(min2)

# x=12136
# m=str(x)
# i=len(m)
# j=0
# z=0
# while i!=0:
#     z=x//10
#     y=x%10
#     i = i - 1
#     j=(10**i)*y+j
#     x=z
# print(j)
# if x==j:
#     print("armstrong")
# else:
#     print("not armstrong")
# n=int(input("enter number :"))
# def power_sum(args):
#     str1=str(args)
#     addition = 0
#     l1=len(str1)
#     l2=l1
#     while l1!=0:
#         z=args//10
#         y=args%10
#         addition=addition+pow(y,l2)
#         l1 = l1 - 1
#         args=z
#     print(addition)
#     return addition
# def armstrong():
#     num = power_sum(n)
#     if num==int(n):
#         print("its armstrong")
#     else:
#         print("not armstrong")
# armstrong()

# def febonaci(*args):
#     n = int(input("enter number :"))
#     a, b, temp = args
#     for i in range(1, n + 1):
#         a = b
#         b = temp
#         temp = b + a
#         print(temp)
# febonaci(0,1,0)
# for i in range(1,n+1):
#     a=b
#     b=temp
#     temp=b+a
#     print(temp)


# import paramiko
# import time
# import getpass
# ssh_client=paramiko.SSHClient()
# ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
# password=getpass.getpass("enter password :")
# router={"hostname":'10.8.243.51','port':'22','username':'admin.raj','password':password}
# ssh_client.connect(**router)
# # ,look_for_keys=False,allow_agent=False
# shell=ssh_client.invoke_shell()
# shell.send('terminal length 0 \n')
# shell.send(' show version \n')
# shell.send(' show ip int brief \n')
# time.sleep(1)
# output=shell.recv(10000)
# output=output.decode('utf-8')
# print(output)

from netmiko import ConnectHandler
import getpass
import sys
p = getpass.getpass(stream=sys.stderr)
# p=getpass.getpass()
cisco_device={
    'device_type':'cisco_ios',
    'host':'10.8.243.51',
    'username':'admin.raj',
    'password':p,
    'port':22,
    'secret':'cisco',
    'verbose':True
    }
connection=ConnectHandler(**cisco_device)
output=connection.send_command('show ip int bri')
print(output)
connection.enable()
prompt=connection.find_prompt()
print(prompt)
# connection.config_mode()
# print(connection.check_config_mode())
print("closing connection")
connection.disconnect()
#
#

















































