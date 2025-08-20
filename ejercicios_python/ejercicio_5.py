import sys

if __name__ == "__main__":
    peliculas = []  
    for i in range(5):
        nombre = input("Ingrese el nombre de la pelicula: ")
        anio = int(input("Ingrese el año de estreno: "))
        peliculas.append((nombre, anio))
    
    nombres = []
    for pelicula in peliculas:
        nombres.append(pelicula[0])  
    nombres.sort()
    print("por nombre: ",nombres)



    peliculas_por_anio = {}
    for nombre, anio in peliculas:
        if anio not in peliculas_por_anio:
            peliculas_por_anio[anio] = []
        peliculas_por_anio[anio].append(nombre)
    print("por año: ", peliculas_por_anio)
