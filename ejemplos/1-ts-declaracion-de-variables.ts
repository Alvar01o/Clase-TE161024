// Tipo explícito
let nombre: string = "Juan";
let edad: number = 30;
let esEstudiante: boolean = true;

// Tipo inferido
let ciudad = "Asunción"; // TypeScript infiere que es de tipo string
let puntuacion = 95.5;   // TypeScript infiere que es de tipo number


let algo: any = "Texto"; // Puede contener cualquier tipo de valor
algo = 100;              // Ahora puede ser un número
algo = true;             // También puede ser un booleano

let noHayValor: null = null;
let sinDefinir: undefined = undefined;


// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings
let nombres: string[] = ["Ana", "Pedro", "Luis"];

// Array de múltiples tipos (usando 'any')
let mezcla: any[] = [1, "dos", true];


let codigo: string | number;
codigo = "AB123";
codigo = 12345;


type ID = string | number;
let empleadoID: ID = 123;
empleadoID = "ABC123";
