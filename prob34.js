//34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista


var prompt = require('prompt-sync')();


function ask(){
    var array = [];
    for(var i =1; i<=10;i++){
        var input = parseFloat(prompt(""+"Write the grade of the subject " + i+":"));
        array.push(input);
    }
    var sum = 0;
    
    for(var i = 0; i<array.length;i++){
        sum+=array[i];

    }
    console.log(sum);
    var media = sum / array.length
    console.log(media);

    var grade = parseFloat(prompt("Write the grade you want to look for: "));
        
    var veces = 0;
    for(var i = 0;i<array.length;i++){
        if(grade == array[i]){
            veces++;
            
        }

    }
    console.log("The grade was found "+veces+" times");

    

}


ask();





