// Función genérica que toma un arreglo de cualquier tipo y un elemento de ese tipo
function addElement<T>(array: T[], element: T): T[] {
    array.push(element);
    return array;
}

// Ejemplo de uso con números
const numberArray: number[] = [1, 2, 3];
const updatedNumberArray = addElement(numberArray, 4);
console.log(updatedNumberArray); // [1, 2, 3, 4]

// Ejemplo de uso con cadenas
const stringArray: string[] = ['a', 'b', 'c'];
const updatedStringArray = addElement(stringArray, 'd');
console.log(updatedStringArray); // ['a', 'b', 'c', 'd']

// Interfaz genérica para representar un par de valores
interface Pair<T, U> {
    first: T;
    second: U;
}

// Función genérica que acepta un par de valores
function createPair<T, U>(first: T, second: U): Pair<T, U> {
    return { first, second };
}

// Ejemplo de uso con diferentes tipos
const numberStringPair = createPair(1, 'one');
const booleanNumberPair = createPair(true, 42);

console.log(numberStringPair); // { first: 1, second: 'one' }
console.log(booleanNumberPair); // { first: true, second: 42 }
