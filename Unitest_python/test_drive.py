# import pymysql
# conn = pymysql.connect(host='localhost', user='root', passwd='Ankita@1', db='test')
# myCursor = conn.cursor()
# # myCursor.execute("use test")
# myCursor.execute("""CREATE TABLE names (
#    id int(5) primary key,
#    name varchar(20),
#    address varchar(10)
#    )
#
# """)
# myCursor.execute("INSERT INTO student (id,name,address) values(1,'xyz','abc');")
# conn.commit()
# conn.close()
