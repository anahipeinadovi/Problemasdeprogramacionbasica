// 44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
//introduciremos por teclado. 



const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listarRegistrosPorEstado() {
  rl.question('Introduce el estado: ', (estado) => {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
      if (err) throw err;
      const registros = data.split('\n');
      console.log(`Registros con estado "${estado}":`);
      let registrosEncontrados = false;
      registros.forEach((registro) => {
        const campos = registro.split(',');
        if (campos[4] === estado) {
          console.log("================= " + registro + " =============");
          registrosEncontrados = true;
        }
      });
      if (!registrosEncontrados) {
        console.log(`No se encontraron registros con estado "${estado}".`);
      }
      menu();
    });
  });
}

function menu() {
    console.log("¿Qué deseas hacer?")
    console.log("(1) Listar registros por estado")
    console.log("(2) Salir")
    rl.question('', (respuesta) => {
    if (respuesta === '1') {
      listarRegistrosPorEstado();
    } else if (respuesta === '2') {
      rl.close();
    } else {
      console.log('Opción inválida. Por favor elige 1 o 2.');
      menu();
    }
  });
}

menu();
