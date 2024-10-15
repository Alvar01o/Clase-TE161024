new Promise((resolver, rechazar) => {
  console.log("Inicial");

  resolver();
})
  .then(() => {
    throw new Error("Algo falló");
    console.log("Haz esto");
  })
  .catch(() => {
    console.log("Haz aquello");
  })
  .then(() => {
    console.log("Haz esto sin que importe lo que sucedió antes");
  });
