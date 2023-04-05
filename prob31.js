// 31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar. 



var prompt = require('prompt-sync')();

function menu(){

    console.log("===Welcome===");
    console.log("1.Comprobar si es primo");
    console.log("2.Encontrar Factorial");
    console.log("3.Tabla de multiplicar");
    var number = parseInt(prompt("Escribe un numero: "));
    
    console.log("¿El numero " + number + " es primo?:" + primo(number));

    console.log("El factorial = "+ factorial(number));

    console.log(tabla(number));
    


}


function primo(number){
    if(number%2==1){
        return true
    }else{
        return false
    }
}


function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }


function tabla(number){
    for(i=1;i<=10;i++){
        resultado=number*i;
        console.log(""+number+"*"+i+"="+resultado);
        
    }
}

menu();























