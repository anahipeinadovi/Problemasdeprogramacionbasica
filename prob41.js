//Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO. 

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agregarRegistro() {
  rl.question('ID: ', (id) => {
    rl.question('Nombre: ', (nombre) => {
      rl.question('Apellidos: ', (apellidos) => {
        rl.question('Dirección: ', (direccion) => {
          rl.question('Estado: ', (estado) => {
            const registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
            fs.appendFile('DATOS.DAT', registro, (err) => {
              if (err) throw err;
              console.log('Registro agregado correctamente.');
              mostrarMenu();
            });
          });
        });
      });
    });
  });
}

function mostrarMenu() {
    console.log("¿Qué deseas hacer?")
    console.log("(1) Agregar registro")
    console.log("(2) Salir")
    rl.question('', (respuesta) => {
    if (respuesta === '1') {
      agregarRegistro();
    } else if (respuesta === '2') {
      rl.close();
    } else {
      console.log('Opción inválida. Por favor elige 1 o 2.');
      mostrarMenu();
    }
  });
}

mostrarMenu();













































/*
const fs = require('fs');
var prompt = require('prompt-sync')();



var id = prompt("Seleccione el ID:  ");
var nombre = prompt("Escriba el nombre:  ");
var apellido = prompt("Escriba los apellidos:  ");
var direccion = prompt("Escriba la direccion:  ");
var estado = prompt("Escriba el estadp:  ");

let contenido = "\n"+ "ID: " + id + "\n" +"Nombre: " + nombre + "\n" + "Apellidos: " + apellido + "\n" +"Direccion: " + direccion + "\n" + "Estado: " + estado + "\n";



  
console.log("\nFile Contents of file before append:",
  fs.readFileSync("DATOS.DAT", "utf8"));

  
  
fs.appendFile("DATOS.DAT",contenido, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    // Get the file contents after the append operation
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("DATOS.DAT", "utf8"));
  }
});*/