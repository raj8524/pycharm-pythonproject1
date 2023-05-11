from netmiko import ConnectHandler
from getpass import getpass
from netmiko.ssh_exception import NetmikoTimeoutException
from netmiko.ssh_exception import NetmikoAuthenticationException
from paramiko.ssh_exception import SSHException
IP_LIST=open('devices')
for IP in IP_LIST:
    RTR={
	    "device_type":"cisco_ios",
	    "ip":IP,
	    "username":'admin.raj',
	    "password":"pass",
        "port":22,
        "verbose":True
}
    print("connecting to device",IP.strip())
    try:


        net_connect=ConnectHandler(**RTR)
    except NetmikoTimeoutException:
        print("Device not reachable")
        continue
    except NetmikoAuthenticationException:
        print("Authentication Failure")
        continue
    except SSHException:
        print("Make sure SSH is enabled")
    output=net_connect.send_command("show ip int brief")
    print(f" '\n'{output}")
print('\n')
# from netmiko import ConnectHandler
# from getpass import getpass
# from netmiko.ssh_exception import NetmikoTimeoutException
# from netmiko.ssh_exception import NetmikoAuthenticationException
# from paramiko.ssh_exception import SSHException
#
# IP_LIST=open('/Users/raj.kumar/ntc-template/python-scripts/devices.txt')
# with open("/Users/raj.kumar/ntc-template/python-scripts/devices.txt") as rd:
#     lines = rd.read()
#     for IP in lines:
# RTR = {
#
#     "device_type": "cisco_ios",
#     "ip": "10.8.240.2",
#     "username": 'admin.raj',
#     "password": "pass",
#     "port": 22
#  }
# print("connecting to device",)
# try:
#
#     net_connect = ConnectHandler(**RTR)
# except NetmikoTimeoutException:
#     print("Device not reachable")
#     continue
# except NetmikoAuthenticationException:
#     print("Authentication Failure")
#     continue
# except SSHException:
#     print("Make sure SSH is enabled")
# output = net_connect.send_command("show ip int brief")
# print(output)

