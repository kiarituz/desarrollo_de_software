interface Persona{
    nombre: string;
    edad: number;
}

class Estudiante implements Persona{
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    saludar() {
        console.log("Soy ", this.nombre, " y tengo ", this.edad, " años.");
    }
}

const Kiara = new Estudiante("kiara", 21, "licenciatura")
Kiara.saludar();