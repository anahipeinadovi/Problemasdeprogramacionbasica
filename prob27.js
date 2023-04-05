// 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10. 


const prompt = require('prompt-sync')();
const number = prompt('Write a number between zero and 10:');


if(number >=1 && number<= 10){
    for(i=1;i<=10;i++){
    
        resultado=number*i;
        console.log(""+number+"*"+i+"="+resultado);
        
    }
}else{
    console.log("===We only admitt numbers between zero and 10===");
}






