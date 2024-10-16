function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia a false para simular un error
            if (exito) {
                resolve({ nombre: 'Juan', edad: 30 });
            } else {
                reject('No se pudieron obtener los datos');
            }
        }, 2000);
    });
}

obtenerDatos()
    .then(datos => {
        console.log(datos);
    })
    .catch(error => {
        console.error(error);
    });
