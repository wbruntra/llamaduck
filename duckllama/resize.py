from PIL import Image
import os, sys

path = "C:\\Bill\\duck-llama\\duckllama"
dirs = os.listdir( os.getcwd() )

for item in dirs:
    print item
    if item[-4:] == '.jpg':
      im = Image.open(item)
      f, e = os.path.splitext(item)
      imResize = im.resize((200,200), Image.ANTIALIAS)
      imResize.save(os.getcwd()+'\\resize\\'+f + '.jpg', 'JPEG', quality=90)