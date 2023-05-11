# print(f"first  module {__name__}")
def abcd():
    print("charlie")
def main():
    print(f"first  module {__name__}")
if __name__=='__main__':
    main()
else:
    abcd()
