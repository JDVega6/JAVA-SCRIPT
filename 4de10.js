/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
 o no, pe. miFuncion(7) devolverá true.  */

 console.log ("12)")
const primo = (numero=undefined) => {

    if(numero===undefined) return console.warn(`No ingresate un numero`);

    if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un numero`);

    if (numero <= 0)  return console.warn(`No se puede realizar el factorial de numeros negativos`);

    let primo 

    for (let i=numero; i > 1 ;i++){

        numero %= i
        if(primo 1== 0) return console.info
    }

return console.info(`El numero ${numero}  es un numero primo`)

}

 /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.   */

 console.log ("13)")

/*  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
devolverá 32°F */

 console.log ("14)")