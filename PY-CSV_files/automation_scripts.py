from netmiko import Netmiko
from getpass import getpass
import sys
password1=getpass(stream=sys.stderr)
net_connect=Netmiko(host="10.8.243.61",username='admin.raj',password=password1,device_type='cisco_ios',port=22,secret='cisco',verbose=True)
net_connect.find_prompt()
output=net_connect.send_command("show ip int bri",use_textfsm=True)
print(output)