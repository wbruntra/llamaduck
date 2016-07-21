import os

files = os.listdir(os.getcwd())

for f in files:
  newname = f.replace('-','')
  os.rename(f,newname)