// 8.- Hacer un programa que solo nos permita introducir S o N. 


var prompt = require('prompt-sync')();

do{
    var answer = prompt("Write S or N: ");
}while(answer != 'S' && answer != 'N');