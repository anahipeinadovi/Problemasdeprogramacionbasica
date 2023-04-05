//12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
//números pares por un lado, y por otro, la de todos los impares. 



var pairsSum = 0;
var oddSum = 0;

for(let i =1;i<=100;i++){
    console.log(i);
    if(i%2==0){
        pairsSum+=i;
        
    }else if(i%2==1){
        oddSum+=i;
    }
}

console.log(""+"La suma de todos los pares es:"+pairsSum);
console.log(""+"La suma de todos los impares es : "+oddSum);

