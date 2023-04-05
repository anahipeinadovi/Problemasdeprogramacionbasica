// 37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
// de alumnos por curso. 

var prompt = require('prompt-sync')();




function alta(){
    var totalCourses = parseFloat(prompt("Write the number courses: "));
    var totalStudents = parseFloat(prompt("Write the students number per course:  "));
    grades = [];
    for(let i = 1; i<=totalCourses;i++){
        console.log("Course "+ i +": ");
        for(let j=1;j<=totalStudents;j++){
            var grade = prompt("Write the grade of the student "+ j +":");
            grades.push(grade);
        }
        
    
        
    }
    /*for(let i = 0; i<totalCourses;i++){
        for(let j=0;j<grades.length;j++){
            console.log(grades[j]);
        }
    }*/
   
    console.log(grades);
    
}



alta();
