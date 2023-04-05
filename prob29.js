// 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10. 



function dado() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1 + dado2;
  }
  
  let contador = 0;
  for (let i = 0; i < 100; i++) {
    const suma = dado();
    if (suma === 10) {
      contador++;
    }
  }
  
  console.log(`Se sumaron 10 en ${contador} de las 100 tiradas.`);
  



