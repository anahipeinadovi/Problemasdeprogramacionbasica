// 25.- Introducir un número menor de 5000 y pasarlo a numero romano. 



function convertirARomano(numero) {

    if(numero >5000){
        console.log("Solo se admite numeros menores de 5000");
    }else{

        var numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanos = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

        var resultado = "";
        for (var i = 0; i < numeros.length; i++) {
        while (numero >= numeros[i]) {
            resultado += romanos[i];
            numero -= numeros[i];
        }
        }
    
        return resultado;
    }
    
}

let respuesta = convertirARomano(4999);
console.log(respuesta);








