// 21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
//los números entre 1 y 1000

function pairs(n1,n2){
    let result = 0;
        for(let i=n1;i<n2;i++)
            if(i%2==0){
                result+=i;
            }
        return result
        
}



function odds(n1,n2){
    let result = 0;
        for(let i=n1;i<n2;i++)
            if(i%2==1){
                result+=i;
            }
        return result
        
}


let answer = pairs(1,1000);
let answerTwo = odds(1,1000);

console.log(""+"La suma de pares es :"+answer);
console.log(""+"La suma de impares es: "+answerTwo);










