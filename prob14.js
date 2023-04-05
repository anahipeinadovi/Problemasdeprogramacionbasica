//14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
//vamos introduciendo por teclado


const prompt = require('prompt-sync')();
const array = [];

for(let i = 0;i<5;i++){
    const number = prompt("Write a number: ");
    array.push(number);


}
console.log(Math.min.apply(null,array));
console.log(Math.max.apply(null, array));



