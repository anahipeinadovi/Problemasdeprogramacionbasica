// 35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
//imprimirla. 


let matriz = [];
for (let i = 0; i < 4; i++) {
  let fila = [];
  for (let j = 0; j < 5; j++) {
    fila.push(Math.floor(Math.random() * 100) + 1);
  }
  matriz.push(fila);
}


console.log(matriz);

