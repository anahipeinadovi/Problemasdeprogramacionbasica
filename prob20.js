// 20.- Calcular el factorial de un número, mediante funciones. 



function factorial(number) {
    // Si el número es 0 o 1, su factorial es 1
    if (number === 0 || number === 1) {
      return 1;
    } else {
      // En caso contrario, calculamos su factorial
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }

console.log(factorial(6));






