//33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//en y calcule e imprima su media.

var prompt = require('prompt-sync')();


function ask(){
    const array = [];
    console.log("Calculating the media of your subjects.....")
    for(var i =1; i<=10;i++){
        var input = parseFloat(prompt(""+"Write the grade of the subject" + i+":"));
        array.push(input);
    }
    var sum = 0;
    
    for(var i = 0; i<array.length;i++){
        sum+=array[i];

    }
    console.log("The sum of the ratings is : "+ sum);
    var media = sum / array.length
   
    console.log("The media is : "+ media);

}

ask();





















