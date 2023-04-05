//36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su matriz transpuesta. 


/*
[
  [ 80, 83, 18, 30, 29 ],
  [ 5, 35, 5, 79, 73 ],
  [ 36, 85, 77, 60, 43 ],
  [ 61, 34, 87, 91, 33 ]
]

[
   [ 80, 5, 36, 61 ]
   [ 83, 35,85, 34 ]
   [ 18, 5, 77,87  ]
   [ 30, 79,60,91  ]
   [ 29 73, 43,33  ]



]



*/


function matrizOriginal() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
      let fila = [];
      for (let j = 0; j < 5; j++) {
        fila.push(Math.floor(Math.random() * 100) + 1);
      }
      matriz.push(fila);
    }
  
    return matriz;
  }
  
  function matrizTranspuesta(matriz) {
    let transpuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
      let fila = [];
      for (let j = 0; j < matriz.length; j++) {
        fila.push(matriz[j][i]);
      }
      transpuesta.push(fila);
    }
  
    return transpuesta;
  }
  
  let matriz = matrizOriginal();
  
  console.log("Matriz original:");
  console.log(matriz);
  
  let transpuesta = matrizTranspuesta(matriz);
  
  console.log("Matriz transpuesta:");
  console.log(transpuesta);
  







