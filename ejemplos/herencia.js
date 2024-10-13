var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " hace un sonido."));
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, raza) {
        var _this = _super.call(this, nombre) || this; // Llama al constructor de la clase padre
        _this.raza = raza;
        return _this;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, ", un ").concat(this.raza, ", ladra."));
    };
    return Perro;
}(Animal));
var miPerro = new Perro('Max', 'Labrador');
miPerro.hacerSonido(); // Max, un Labrador, ladra.
