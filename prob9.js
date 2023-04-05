//9.- Introducir un número por teclado y que nos diga si es positivo o negativo. 


const prompt = require('prompt-sync')();

const number = prompt("Write a positive or negative number: ");

if(number>0){
    console.log("The number is positive");
}else if(number == 0){
    console.log("The number is zero");
}else{
    console.log("THe number is negative")
}

