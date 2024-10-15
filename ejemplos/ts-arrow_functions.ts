const getFullName = (Nombre:string, Apellido:string) : string => {
    return `${Nombre} ${Apellido}`;
}
let nombreCompleto = getFullName('Ricardo', 'Hernandez');
console.log(nombreCompleto);
