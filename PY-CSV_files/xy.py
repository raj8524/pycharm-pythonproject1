# devices=f.read().splitlines()
# df = pd.DataFrame()
# for i in devices:
#     ...
#     df2 = pd.DataFrame(output2)
#     df.append(df2)
# df.to_csv("sh_int_ge.csv")

#
# with open('final1.csv', mode='a') as csv_file:
#    fieldnames=['interface', 'link_status', 'protocol_status', 'hardware_type',
#                                          'address', 'bia', 'description',
#                                           'ip_address', 'mtu', 'duplex', 'speed', 'media_type', 'bandwidth',
#                                          'delay', 'encapsulation', 'last_input', 'last_output',
#                                         'last_output_hang', 'queue_strategy', 'input_rate', 'output_rate',
#                                         'input_packets', 'output_packets', 'input_errors', 'crc', 'abort',
#                                           'output_errors']
#    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
#    writer.writeheader()
#    for data in show_interface_parsed:
#
#      writer.writerow(data)
import sys
from csv import DictWriter
import pandas as pd
from operator import itemgetter
from netmiko import ConnectHandler
from getpass import getpass
from netmiko.ssh_exception import NetmikoTimeoutException
from netmiko.ssh_exception import NetmikoAuthenticationException
from paramiko.ssh_exception import SSHException
p = getpass(stream=sys.stderr)
# p=getpass.getpass()

with open(r"/Users/raj.kumar/Desktop/pythonProject1/Network-automation/Netmiko/device1.txt")as f:
    devices=f.read().splitlines()
    # df = pd.DataFrame()
    for i in devices:
        cisco_device={
            'device_type':'cisco_ios',
            'host':i,
            'username':'admin.raj',
            'password':p,
            'port':22,
            'secret':'cisco',
            'verbose':True
            }
        print("connecting to device", i.strip())
        try:
            net_connect = ConnectHandler(**cisco_device)
        except NetmikoTimeoutException:
            print("Device not reachable")
            continue
        except NetmikoAuthenticationException:
            print("Authentication Failure")
            continue
        except SSHException:
            print("Make sure SSH is enabled")
        output = net_connect.send_command("show ip int bri", use_textfsm=True)

        l = len(output)
        row_labels = range(1)
        for i in range(0, l):
            if output[i]['status'] == 'up' and output[i]['proto'] == 'up':
                interface = output[i]['intf']
                # command=print(f"show int {interface}")
                command = "sh int" + " " + interface
                output1 = net_connect.send_command(command, use_textfsm=True)
                with open('final5.csv', mode='a') as csv_file:
                    fieldnames = ['interface', 'link_status', 'protocol_status', 'hardware_type',
                                  'address', 'bia', 'description',
                                  'ip_address', 'mtu', 'duplex', 'speed', 'media_type', 'bandwidth',
                                  'delay', 'encapsulation', 'last_input', 'last_output',
                                  'last_output_hang', 'queue_strategy', 'input_rate', 'output_rate',
                                  'input_packets', 'output_packets', 'input_errors', 'crc', 'abort',
                                  'output_errors']
                    writer = DictWriter(csv_file, fieldnames=fieldnames)
                    writer.writeheader()
                    for data in output1:
                        writer.writerow(data)
    #             df2 = pd.DataFrame(output1)
    #             df.append(df2)
    # df.to_csv("sh_int_ge.csv")
                # output2=print(f" \n{output}")
            # print('\n')
