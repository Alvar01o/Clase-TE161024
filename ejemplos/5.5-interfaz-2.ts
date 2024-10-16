interface Usuario {
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

// Usando la interfaz para definir el tipo de objeto `Usuario`
const usuario1: Usuario = {
    nombre: "Juan",
    edad: 30,
    email: "Juan@example.com",
    activo: true
};

function mostrarUsuario(usuario: Usuario): void {
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Activo: ${usuario.activo}`);
}

mostrarUsuario(usuario1);
