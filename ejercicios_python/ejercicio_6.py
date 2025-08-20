import sys
from datetime import date

class Libro:
    def __init__(self, titulo, autor, anio, genero):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.genero = genero

    def obtener_info(self):
        return f"titulo: {self.titulo}, autor: {self.autor}, año: {self.anio}, genero: {self.genero}"

    def es_clasico(self):
        hoy = date.today()
        return (hoy.year - self.anio) > 50  

if __name__ == "__main__":
    libros=[]
    libros.append(Libro("six of crows", "leigh bardugo", 2016, "fantasía"))
    libros.append(Libro("pride and prejudice", "jane austen", 1810, "romance"))

    for libro in libros:
        print(libro.obtener_info())
        
        if libro.es_clasico():
            print("es clásico")
        else:
            print("no es clásico")