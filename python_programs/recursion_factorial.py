n=6
def reco_fact(n):
    # mul = 1
    # print(n)
    if n==0:
        return 1
    while n!=0:
        # print(n)
        return n * reco_fact(n-1)

print(reco_fact(6))

def reco_fact(n):
    # mul = 1
    # print(n)
    if n==0:
        return 1
    else:
        return n * reco_fact(n - 1)
print(reco_fact(6))
