var Auto = /** @class */ (function () {
    function Auto(color, marca, year) {
        this.color = color;
        this.marca = marca;
        this.year = year;
    }
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    return Auto;
}());
var Auto1 = new Auto('Rojo', 'Ford', 2010);
console.log(Auto1.getYear());
console.log(Auto1.getMarca());
console.log(Auto1.getColor());
