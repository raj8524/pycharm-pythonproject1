# created by me
from django.http import HttpResponse
from django.shortcuts import render
def index(request):
    # s='''<h2>Navigation bar <br></h2>
    #   <a href ="https://www.youtube.com" target="_blank">utube</a><br>
    #   <a href ="https://www.facebook.com/" target="_blank">facebook</a><br>'''
    return render(request,'index.html')
    # return HttpResponse('Home')
def removepunc(request):
    #Get the text
    djtext = request.GET.get('text', 'default')
    print(djtext)
    #Analyze the text
    return HttpResponse("remove punc")