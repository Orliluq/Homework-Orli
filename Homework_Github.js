function laCajaDePandora(numero){
    // reciba como parámetro un número entero. 
    // Si es un número par, debe convertirlo a binario y retornarlo, y si es impar, convertirlo a hexadecimal y retornarlo.
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw new Error('El parámetro debe ser un número entero.');
      }
    
      if (numero % 2 === 0) {
        return numero.toString(2); // Convertir a binario
      } else {
        return numero.toString(16); // Convertir a hexadecimal
      }
    }

    console.log(laCajaDePandora(10)); // Resultado: '1010' (binario)
    console.log(laCajaDePandora(15)); // Resultado: 'f' (hexadecimal) 