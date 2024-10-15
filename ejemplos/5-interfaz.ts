// Definimos una interfaz para los animales
interface IAnimal {
    nombre: string;
    hacerSonido(): void;
  }
  
  // Clase que implementa la interfaz IAnimal
  class Perro implements IAnimal {
    nombre: string;
    raza: string;
  
    constructor(nombre: string, raza: string) {
      this.nombre = nombre;
      this.raza = raza;
    }
  
    hacerSonido(): void {
      console.log(`${this.nombre}, un ${this.raza}, ladra.`);
    }
  }
  
  // Clase que también implementa la interfaz IAnimal
  class Gato implements IAnimal {
    nombre: string;
    color: string;
  
    constructor(nombre: string, color: string) {
      this.nombre = nombre;
      this.color = color;
    }
  
    hacerSonido(): void {
      console.log(`${this.nombre}, un gato ${this.color}, maúlla.`);
    }
  }
  
  // Crear instancias de las clases
  const miPerro = new Perro('Max', 'Labrador');
  const miGato = new Gato('Luna', 'blanco');
  
  miPerro.hacerSonido(); // Max, un Labrador, ladra.
  miGato.hacerSonido();  // Luna, un gato blanco, maúlla.
  