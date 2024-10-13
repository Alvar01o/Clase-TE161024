class Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    hacerSonido(): void {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  class Perro extends Animal {
    raza: string;
  
    constructor(nombre: string, raza: string) {
      super(nombre); // Llama al constructor de la clase padre
      this.raza = raza;
    }
  
    hacerSonido(): void {
      console.log(`${this.nombre}, un ${this.raza}, ladra.`);
    }
  }
  
  const miPerro = new Perro('Max', 'Labrador');
  miPerro.hacerSonido(); // Max, un Labrador, ladra.
  