#print("12312")
from bs4 import BeautifulSoup
import requests
source_code="hola amigos\n how do yoou do"
#file = open(“h.cpp”, “r”) 
#print (file.read() )
code = open('h.cpp', 'r')
source_code=(code.read())

data = {'api_option':'paste', 
        'api_paste_code':source_code, 
        'api_paste_format':'python'} 
#code = open('h.cpp', 'r')
#source_code=(code.read())



aaddad = requests.post(url="http://01b674cb.ngrok.io/GameToDebug/catch_requst.php?idd=lolqwwwwwwwwwww0", data = data)

soup1 = BeautifulSoup(aaddad.text, 'html.parser')


#print("hahaha")








print (soup1.prettify())
