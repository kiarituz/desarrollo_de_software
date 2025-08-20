import sys

def a_celsius(fahrenheit):
    return (fahrenheit - 32) * 5 / 9

def a_fahrenheit(celsius):
    return celsius * 9 / 5 + 32

if __name__ == "__main__":
    valor = float(input("Ingrese el valor de la temperatura: "))
    escala = input("Ingrese la escala original (C/F): ").upper()

    if escala == "C":
        convertido = a_fahrenheit(valor)
        print("valor convertido a F: ", convertido)
    elif escala == "F":
        convertido = a_celsius(valor)
        print("valor convertido a C: ", convertido)
