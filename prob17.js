// 17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
//segundo sea mayor o igual que el primero. 


var prompt = require('prompt-sync')();
var number1 = parseFloat(prompt("Write a number: "));
var number2 = parseFloat(prompt("Write a number: "));
var counter = 0;
var pairsSum = 0;


var quantity = 0;
    
    if(number1<number2){

        for(var i=number1;i<=number2;i++){
            if(i%2==0){
                console.log(i);
                pairsSum+=i;
                quantity++;
            }
        }
        console.log("The quantity of pair numbers between "+ number1 +" and " + number2 + " = " + quantity);
        console.log("The sum of pairs numbers in this serie =  "+ pairsSum);

    }else{
        console.log("¡¡¡¡¡¡¡¡¡The first number must be smaller than the second one");

    }










