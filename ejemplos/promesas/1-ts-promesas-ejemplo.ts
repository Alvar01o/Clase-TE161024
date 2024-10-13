// Función que retorna una promesa que se resuelve después de un tiempo
function esperar(ms: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('La espera ha terminado');
      }, ms);
    });
  }
  
  // Función asincrónica que utiliza la promesa
  async function procesoAsincronico() {
    console.log('Esperando 3 segundos...');
    const mensaje : string = await esperar(3000); // Espera 3 segundos antes de continuar
    console.log(mensaje); // Imprime 'La espera ha terminado'
  }
  
  // Llamamos a la función asincrónica
  procesoAsincronico();
  