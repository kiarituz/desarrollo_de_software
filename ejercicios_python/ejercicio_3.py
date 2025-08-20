import sys


def suma(a,b):
  c=a+b
  return(c) 

def resta(a,b):
  c=a-b
  return(c) 

def multiplicacion(a,b):
  c=a*b
  return(c) 

def division(a,b):
  c=a/b
  return(c)  

if __name__ == "__main__":
  operacion = sys.argv[1]
  print("Operacion ", operacion)

  a=int(input("Ingrese operador 1: "))
  b=int(input("Ingrese operador 2: "))

  if operacion == "suma":
    c=suma(a,b)
  elif operacion == "resta":
    c=resta(a,b)
  elif operacion == "multiplicacion":
    c=multiplicacion(a,b)
  elif operacion == "division":
    c=division(a,b)
  
  print("Resultado: ",c)
