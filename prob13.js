// 13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100. 



var counter= 0;

for(let i=0;i<=100;i++){
    if(i%2==0 || i%3 == 0){
        counter++;
        console.log(""+counter+".-"+i);
    }

}