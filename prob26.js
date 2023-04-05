// 26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla

// Introducir una frase por teclado e imprimirla en el centro de la pantalla. 




const prompt = require('prompt-sync')({sigint: true});
let phrase = prompt('Introduce una frase: ');


function center(phrase) {
  const width = process.stdout.columns;
  const spaces = Math.floor((width - phrase.length) / 2);
  console.log(' '.repeat(spaces) + phrase);
}


center(phrase);



