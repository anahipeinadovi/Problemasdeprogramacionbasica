//39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
//segundo 2, el tercero 3 y así sucesivamente.



const paginas = 3;
const filas = 4;
const columnas = 5;

let valor = 1;

for (let pagina = 1; pagina <= paginas; pagina++) {
  console.log(`Página ${pagina}:`);
  for (let fila = 1; fila <= filas; fila++) {
    const filaActual = [];
    for (let columna = 1; columna <= columnas; columna++) {
      filaActual.push(valor++);
    }
    console.log(filaActual.join("\t"));
  }
  console.log("\n");
}
