// Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
//SHELL (por inserción). 




function ordenar(matriz) {
    const filas = matriz.length; 
  
    let intervalo = Math.floor(filas / 2);
    while (intervalo > 0) {
      for (let i = intervalo; i < filas; i++) {
        const temp = matriz[i][0];
        let j = i;
        while (j >= intervalo && matriz[j - intervalo][0] > temp) {
          matriz[j][0] = matriz[j - intervalo][0];
          j -= intervalo;
        }
        matriz[j][0] = temp;
      }
      intervalo = Math.floor(intervalo / 2);
    }
  
    return matriz;
  }

  const matriz = [
    [40, 7, 3, 20],
    [9, 8, 2, 4],
    [6, 64, 5, 100],
    [21, 4, 0, 3]
  ];
  
  console.log("Matriz original:");
  console.log(matriz);
  
  const matrizOrdenada = ordenar(matriz);
  
  console.log("Matriz ordenada por la primera columna:");
  console.log(matrizOrdenada);
  

