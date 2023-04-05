// 15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares. 


var prompt = require('prompt-sync')();
var number1 = parseFloat(prompt("Write a number: "));
var number2 = parseFloat(prompt("Write a number: "));
var counter = 0;
var pairCounter = 0;
var pairsSum = 0;
var oddSum = 0;
var pequeño=0;
var oddSum = 0;
var quantity = 0;
    
    
    if(number1>number2){
        pequeño=number2;
        for(var i=pequeño;i<=number1;i++){
            console.log(i);
            quantity++;
            if(i%2==0){
                pairsSum++;
                
            }else if(i%2==1){
                oddSum+=i;
        
            }
        }
        console.log("The quantity of natural numbers between "+ number2 +" and"+ number1 +" is" +quantity);
        console.log("The quantity of pairs numbers in this serie is : "+ pairsSum);
        console.log(""+"La suma de todos los impares es : "+oddSum);

    }else{
        pequeño = number1;

        for(var i=pequeño;i<=number2;i++){
            console.log(i);
            quantity++;
            if(i%2==0){
                pairsSum++;
                
            }else if(i%2==1){
                oddSum+=i;
        
            }
        }
        console.log("The quantity of numbers between "+number1+"and"+number2+"is" +quantity);
        console.log("The quantity of pairs numbers in this serie is : "+ pairsSum);
        console.log(""+"La suma de todos los impares es : "+oddSum);

    }
    
