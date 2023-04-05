//10.- Introducir un número por teclado y que nos diga si es par o impar. 


const prompt = require('prompt-sync')();
const number = prompt("Write a number: ");

if(number%2 ==0 ){
    console.log("It is a pair number");
}else if(number%2==1){
    console.log("It is an odd number");
}