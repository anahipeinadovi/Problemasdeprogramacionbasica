//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado.

var prompt = require('prompt-sync')();

var number = prompt("Write a number: ");
var counter= 0;

for(let i=1;i<number;i++){
    if(i%3==0){
        counter++;
        console.log(""+counter+".-"+i);
    }

}

