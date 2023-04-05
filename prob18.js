//18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
//que introduciremos por teclado. 



var prompt = require('prompt-sync')();
var phrase = prompt("Write a phrase: ");
counter = 0;

for(i=0;i<phrase.length;i++){
    var character = phrase.charAt(i);
    if(character == 'a'){
        counter++;

    }
    
}
console.log("la letra 'a' se encuentra "+counter+" veces en la frase introducida ");










