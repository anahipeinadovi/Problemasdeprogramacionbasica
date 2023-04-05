// 7.- Introducir tantas frases como queramos y contarlas. 

var prompt = require('prompt-sync')();
var i = 0;
var num1 = new Boolean(true);

while(num1 == true){
    var phrase = prompt('Write a phrase or a zero(0) to stop:');
    i++;
    if(phrase == 0){
        num1=new Boolean(false)
        break;
    }
    console.log("\n");
    console.log("Frase"+i+":"+phrase);  
}

