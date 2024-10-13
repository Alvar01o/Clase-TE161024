class Auto {
    color: string;
    marca: string;
    year: number;
    constructor(color: string, marca: string, year: number) {
        this.color = color;
        this.marca = marca;
        this.year = year;
    }
    getColor() : string {
        return this.color;
    }
    getYear() : number {
        return this.year;
    }
    getMarca() : string {
        return this.marca;
    }
}

let Auto1 = new Auto('Rojo', 'Ford', 2010);
console.log(Auto1.getYear());
console.log(Auto1.getMarca());
console.log(Auto1.getColor());