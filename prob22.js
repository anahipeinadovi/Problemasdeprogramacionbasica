// 22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha. 


var prompt = require('prompt-sync')();
var phrase = prompt('Write a phrase :');

for(let i = 0;i<5;i++){
    let space = "";
    for(let k = 0;k<i;k++){
        space+="    ";
    }
    console.log(space+phrase);
}







