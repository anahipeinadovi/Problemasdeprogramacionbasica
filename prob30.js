//30.- Introducir dos números por teclado y mediante 
// un menú, calcule su suma, su resta, su multiplicación o su división. 



const prompt = require('prompt-sync')();


function calculo(){
    const number1 = parseFloat(prompt("Write a number: "));
    const number2 = parseFloat(prompt("Write a number: "));
    let resultado = 0;
    console.log("Menú");
    console.log("1.Sumar");
    console.log("2.Multiplicacion");
    console.log("3.Divison");
    console.log("4.Salir");
    const input = parseFloat(prompt("Seleccione la opcion que desee:  "));


    switch (input){

        case 1:
            resultado = number1 + number2;
            console.log("La suma de"+number1+"+"+number2 +"="+resultado);
            break;

        case 2:
            resultado = number1 * number2;
            console.log("La multiplicacion de"+number1+"*"+number2 +"="+ resultado);
            break;

        case 3:
            if(number2 == 0){
                console.log("No se puede divir entre 0");
                break;
            }
            resultado = number1 / number2 ; 
            console.log("La division de"+number1+"/"+number2 +"="+ resultado);
            break;
        
        default:
            console.log("====ADIOS=====");

    }
    


}

calculo();























