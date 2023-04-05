//5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos impares hay

let number = 0;
let i = 0;


for (let number=0;number<=100;number++){
    if(number%2==1){
        console.log(number);
        i++;
    }
}
console.log("La cantidad de impares que hay del 0 al 100 son : "+i);


