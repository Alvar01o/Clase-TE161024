function primeraFuncion() {
    console.log("Primera función iniciada...");

    setTimeout(() => {
        console.log("Primera función completada (2 segundos después)");
    }, 2000); // Espera de 2 segundos
}

function segundaFuncion() {
    console.log("Segunda función ejecutada inmediatamente");
}

function iniciarProceso() {
    console.log("Iniciando el proceso...");
    primeraFuncion();
    segundaFuncion();
    console.log("Proceso terminado");
}

iniciarProceso();
