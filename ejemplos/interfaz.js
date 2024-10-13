// Clase que implementa la interfaz IAnimal
var Perro = /** @class */ (function () {
    function Perro(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, ", un ").concat(this.raza, ", ladra."));
    };
    return Perro;
}());
// Clase que también implementa la interfaz IAnimal
var Gato = /** @class */ (function () {
    function Gato(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    Gato.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, ", un gato ").concat(this.color, ", ma\u00FAlla."));
    };
    return Gato;
}());
// Crear instancias de las clases
var miPerro = new Perro('Max', 'Labrador');
var miGato = new Gato('Luna', 'blanco');
miPerro.hacerSonido(); // Max, un Labrador, ladra.
miGato.hacerSonido(); // Luna, un gato blanco, maúlla.
