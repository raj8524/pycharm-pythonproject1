"""
# this method doesn't require __init__.py file to be imported

from mymod import heythere, byenow
from helper.helper1 import gethelp
from helperoutside.helper2 import helper2
import sys
sys.path.append("..")


def call_files():
    print("hellow ,how r u")
    heythere()  # from mymod.py
    byenow()  # from mymod.py
    gethelp()  # from helper/helper.py
    helper2()


if __name__ == '__main__':
    call_files()
"""


#m2  another method to import py files
import sys
sys.path.append("..")
from mymod import heythere, byenow
from helper import gethelp
from helperoutside import helper2  # because its local file function r first imported in __init__,then imported in main.py
def call_files():
    print("hellow ,how r u")
    heythere()  # from mymod.py
    byenow()  # from mymod.py
    gethelp()  # from helper/helper.py
    helper2()
if __name__ == '__main__':
    call_files()