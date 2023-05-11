# from netmiko import ConnectHandler
# import getpass
from csv import DictWriter
import sys
import pandas as pd
from operator import itemgetter
from netmiko import ConnectHandler
from getpass import getpass
from netmiko.ssh_exception import NetmikoTimeoutException
from netmiko.ssh_exception import NetmikoAuthenticationException
from paramiko.ssh_exception import SSHException
p = getpass(stream=sys.stderr)
# p=getpass.getpass()
def final_out(output1):
    with open('final8.csv', 'a', newline="")as f:
        csv_write = DictWriter(f, fieldnames=['interface', 'link_status', 'protocol_status', 'hardware_type',
                                              'address', 'bia', 'description',
                                              'ip_address', 'mtu', 'duplex', 'speed', 'media_type', 'bandwidth',
                                              'delay', 'encapsulation', 'last_input', 'last_output',
                                              'last_output_hang', 'queue_strategy', 'input_rate', 'output_rate',
                                              'input_packets', 'output_packets', 'input_errors', 'crc', 'abort',
                                              'output_errors']
                               )
        if f.tell() == 0:
            csv_write.writeheader()
        csv_write.writerow({'interface': output1['interface'], 'link_status': output1['link_status']})

with open(r"/Users/raj.kumar/Desktop/pythonProject1/Network-automation/Netmiko/device1.txt")as f:
    devices=f.read().splitlines()
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

        # k=0
    #     l = len(output)
    #     # print(l)
    #     # row_labels = range(1)
    #     for i in range(0, l):
    #     for i in output:
    #         df = pd.DataFrame(i)
    #         df.to_csv("sh_int_ge.csv")
        l=len(output)
    # def final_out(output1):
    #
    #     with open('final8.csv', 'a',newline="")as f:
    #         csv_write = DictWriter(f, fieldnames=['interface', 'link_status', 'protocol_status', 'hardware_type',
    #                                               'address', 'bia', 'description',
    #                                               'ip_address', 'mtu', 'duplex', 'speed', 'media_type', 'bandwidth',
    #                                               'delay', 'encapsulation', 'last_input', 'last_output',
    #                                               'last_output_hang', 'queue_strategy', 'input_rate', 'output_rate',
    #                                               'input_packets', 'output_packets', 'input_errors', 'crc', 'abort',
    #                                               'output_errors']
    #                                )
    #         if f.tell()==0:
    #             csv_write.writeheader()
    #         csv_write.writerow({'interface': output1['interface'], 'link_status': output1['link_status']})
    #     # dict1 = dict
        for j in range(0, l):
            if output[j]['status'] == 'up' and output[j]['proto'] == 'up':
                interface = output[j]['intf']
                # command=print(f"show int {interface}")
                command = "sh int" + " " + interface
                output1 = net_connect.send_command(command, use_textfsm=True)[0]
                final_out(output1)
                # csv_write.writerow({'interface':output1['interface'],'link_status' : output1['link_status']})
                print(output1)
                    # print(len(output1))

                # for k in output1:
                #     if 'sh' in k:
                #         dict1=dict1.update(
                #         csv_write.writerow()
                # for k in dict1:


                    # print(j)
        # print(len(dict1))
        #             with open('final3.csv','a')as f:
        #                 csv_write=DictWriter(f,fieldnames=['interface', 'link_status', 'protocol_status', 'hardware_type', 'address', 'bia', 'description',
        #                                 'ip_address', 'mtu', 'duplex', 'speed', 'media_type', 'bandwidth','delay','encapsulation', 'last_input', 'last_output', 'last_output_hang', 'queue_strategy', 'input_rate', 'output_rate', 'input_packets', 'output_packets', 'input_errors', 'crc', 'abort', 'output_errors']
        #                                          )
        #
        #                 csv_write.writerow(k)
        #

                # print("/n")
                # output2=print(f" \n{output}")
            # print('\n')
                # ax = {}
                # for i in output1:
                #     ax.update(i)
                # print(len(ax))
                # df = pd.DataFrame(output1)
                # df.to_csv("sh_int_ge.csv")
        # connection=ConnectHandler(**cisco_device)
        # output=connection.send_command('show ip int bri')
        # print(output)
        # connection.enable()
        # prompt=connection.find_prompt()
        # print(prompt)
        # # connection.config_mode()
        # # print(connection.check_config_mode())
        # print("closing connection")
        # connection.disconnect()
        # print("connecting to device", i.strip())
        # try:
        #     net_connect = ConnectHandler(**cisco_device)
        # except NetmikoTimeoutException:
        #     print("Device not reachable")
        #     continue
        # except NetmikoAuthenticationException:
        #     print("Authentication Failure")
        #     continue
        # except SSHException:
        #     print("Make sure SSH is enabled")
        # output =net_connect.send_command("show ip int bri",use_textfsm=True)
        #
        # l=len(output)
        # row_labels=range(1)
        # for i in range(0,l):
        #     if output[i]['status']=='up' and output[i]['proto']=='up':
        #         interface=output[i]['intf']
        #         # command=print(f"show int {interface}")
        #         command="sh int"+" "+interface
        #         output1 = net_connect.send_command(command, use_textfsm=True)
        #         ax={}
        #         for i in output1:
        #             ax.update(i)
        #         # print(len(ax))
        #         df = pd.DataFrame(ax,index=[0])
        #         df.to_csv("sh_int_ge.csv")
        # k=[]
        # k.append(ax)
        # df = pd.DataFrame(k)
        # df.to_csv("sh_int_ge.csv")

                    # ax=ax+(i,)
                # print(list(ax))
                # df = pd.DataFrame(output1)
                # df.to_csv("sh_int_ge.csv")
                # print(output1)
                # print(command)
                # if 'show' in command:
                #     print(command)
                #     # output1 = net_connect.send_command(command, use_textfsm=True)
                #     # print(output1)
                #
                # print(command)
                # print(interface)
                # print(output[i]['intf'],output[i]['status'],output[i]['proto'])
        #         # df = pd.DataFrame(data=output,index=row_labels)
        #         df = pd.DataFrame(output)
        #         df.to_csv("out.csv")
        #         print(df)
        # df = pd.DataFrame(output)
        # df.to_csv("sh_ip_ospf_brief.csv")
        # print(df)

        # l=len(output)
        # print(l)
        # x=[]
        # for i in output:
        #     i[0]
        #     x.append(i)
        # # df = pd.DataFrame(x)
        # # df.to_csv("out.csv")
        # # print(x)
        # print(len(x))

        # print('\nList of interfaces which are UP \n')
        # for i in range(0, l):
        #     if output[i]['status']=='up':
        #         # print(output[i]['intf'] + ' ' + output[i]['status'])
        #         df = pd.DataFrame(i)
        #         df.to_csv("out.csv")









        # print(len(output))
    # df = pd.DataFrame(ax)
    # df.to_csv("out.csv")
    # print(ax)

        # for j in output:
        #     df=pd.DataFrame(j,index=[0])
        #     df.to_csv("IP_INT_brief1.csv")

        # df.to_excel("new2.xlxs",startrow=1,startcol=2)
        # print(df)
        # interface0 = output[1]
        # getint = itemgetter('intf')
        # getstatus = itemgetter('status')
        # name = getint(interface0)
        # status = getstatus(interface0)
        # print('\nInterface ' + name + ' status is ' + status)