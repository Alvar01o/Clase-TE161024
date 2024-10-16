// Función que realiza la solicitud a la API
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        fetch('https://api.restful-api.dev/objects')
            .then(response => {
                // Verificar si la respuesta fue exitosa
                if (!response.ok) {
                    reject(`Error: ${response.status} - ${response.statusText}`);
                }
                return response.json(); // Convertir la respuesta a JSON
            })
            .then(data => {
                resolve(data); // Resolver la promesa con los datos
            })
            .catch(error => {
                reject(`Error en la solicitud: ${error}`); // Rechazar la promesa en caso de error
            });
    });
}

// Uso de la función obtenerDatos
obtenerDatos()
    .then(datos => {
        console.log('Datos obtenidos:', datos); // Manejar los datos obtenidos
    })
    .catch(error => {
        console.error('Se produjo un error:', error); // Manejar el error
    });
