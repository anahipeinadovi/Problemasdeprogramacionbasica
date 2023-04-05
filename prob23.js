// 23.- Hacer un programa que imprima los números del 0 al 100, controlando las filas y las columnas. 

var numeroMaximo = 100;

var columnasPorFila = 10;
var contador = 0;

for (var i = 0; i <= numeroMaximo; i++) {
  process.stdout.write(i + "\t");
  contador++;
  if (contador % columnasPorFila === 0) {
    console.log("");
  }
}




























