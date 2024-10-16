// Función normal que suma dos números
function add(x: number, y: number): number {
    return x + y;
}

// Uso de la función normal
const sumNormal = add(5, 10);
console.log(`Suma (función normal): ${sumNormal}`); // Suma (función normal): 15

// Función de flecha que resta dos números
const subtract = (x: number, y: number): number => {
    return x - y;
};

// Uso de la función de flecha
const differenceArrow = subtract(10, 5);
console.log(`Resta (función de flecha): ${differenceArrow}`); // Resta (función de flecha): 5

// Función normal que multiplica un número por sí mismo
function square(num: number): number {
    return num * num;
}

// Uso de la función normal
const squaredNormal = square(4);
console.log(`Cuadrado (función normal): ${squaredNormal}`); // Cuadrado (función normal): 16

// Función de flecha que multiplica un número por sí mismo
const squareArrow = (num: number): number => num * num;

// Uso de la función de flecha
const squaredArrow = squareArrow(4);
console.log(`Cuadrado (función de flecha): ${squaredArrow}`); // Cuadrado (función de flecha): 16

// Función normal que imprime un saludo
function greet(name: string): void {
    console.log(`Hola, ${name}!`);
}

// Uso de la función normal
greet('Juan'); // Hola, Juan!

// Función de flecha que imprime un saludo
const greetArrow = (name: string): void => {
    console.log(`Hola, ${name}!`);
};

// Uso de la función de flecha
greetArrow('Juan'); // Hola, Juan!


function manejarValor(valor: unknown) {
    // Verificación de tipo antes de usar el valor
    if (typeof valor === 'string') {
        console.log(`El valor es una cadena: ${valor.toUpperCase()}`);
    } else if (typeof valor === 'number') {
        console.log(`El valor es un número: ${valor.toFixed(2)}`);
    } else {
        console.log('El valor es de un tipo desconocido');
    }
}

// Ejemplos de uso
manejarValor("Hola"); // El valor es una cadena: HOLA
manejarValor(42);     // El valor es un número: 42.00
manejarValor(true);   // El valor es de un tipo desconocido