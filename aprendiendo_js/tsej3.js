var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Estudiante.prototype.saludar = function () {
        console.log("Soy ", this.nombre, " y tengo ", this.edad, " años.");
    };
    return Estudiante;
}());
var Kiara = new Estudiante("kiara", 21, "licenciatura");
Kiara.saludar();
