//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz


function lanzarMoneda() {
    const resultado = Math.floor(Math.random() * 2);
    if (resultado == 0) {
      console.log("cara");
    } else {
      console.log("cruz");
    }
  }
  
  lanzarMoneda();
  


