// 45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
//campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.




const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function consultarRegistro() {
  rl.question('ID del registro a consultar: ', (id) => {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
      if (err) throw err;
      const registros = data.split('\n');
      const registroEncontrado = registros.find((registro) => {
        const campos = registro.split(',');
        return campos[0] === id;
      });
      if (registroEncontrado) {
        const campos = registroEncontrado.split(',');
        console.log('ID: ', campos[0]);
        console.log('Nombre: ', campos[1]);
        console.log('Apellidos: ', campos[2]);
        console.log('Dirección: ', campos[3]);
        console.log('Estado: ', campos[4]);
      } else {
        console.log('El registro con el ID especificado no existe.');
      }
      mostrarMenu();
    });
  });
}

function mostrarMenu() {
  console.log("¿Qué deseas hacer?")
  console.log("(1) Consultar registro por ID")
  console.log("(2) Salir")
  rl.question('', (respuesta) => {
    if (respuesta === '1') {
      consultarRegistro();
    } else if (respuesta === '2') {
      rl.close();
    } else {
      console.log('Opción inválida. Por favor elige 1 o 2.');
      mostrarMenu();
    }
  });
}

mostrarMenu();
