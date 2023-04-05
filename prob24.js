// 24.- Comprobar si un número mayor o igual que la unidad es primo.


var prompt = require('prompt-sync')();
var numero = parseFloat(prompt("Indica un numero: "));

function esPrimo(num) {
    if (num === 1 || num === 2) {
      return true;
    }
  
    for (var i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  


let respuesta = esPrimo(numero);
console.log(respuesta);





