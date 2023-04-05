/* 40.- Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
cada mes de todos los representantes. Imprimir toda la información. 
  */



let ventas = [];
let totalVentas = [];

for (let i = 0; i < 3; i++) {
  ventas[i] = [];
  totalVentas[i] = [];
  for (let j = 0; j < 12; j++) {
    ventas[i][j] = [];
    for (let k = 0; k < 4; k++) {
      ventas[i][j][k] = Math.floor(Math.random() * 1000) + 1;
      totalVentas[i] = totalVentas[i] || 0;
      totalVentas[i] += ventas[i][j][k];
    }
  }
}

console.log("Ventas realizadas por los representantes por mes y por producto: ");
for (let i = 0; i < ventas.length; i++) {
  for (let j = 0; j < ventas[i].length; j++) {
    console.log(`Representante ${i + 1}, Mes ${j + 1}:`);
    console.table(ventas[i][j]);
  }
}

console.log("Total de ventas por representante: ");
console.table(totalVentas);



