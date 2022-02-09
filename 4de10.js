/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
 o no, pe. miFuncion(7) devolverá true.  */

 console.log ("12)")
const primo = (numero=undefined) => {

    if(numero===undefined) return console.warn(`No ingresate un numero`);

    if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un numero`);

    if (numero === 0)  return console.warn(`El numero no puede ser cero`);

    if (numero === 1)  return console.warn(`El numero no puede ser uno`);

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

    let divisible = false; 

    for (let i=2; i < numero ;i++){

        if((numero%i) === 0){
            divisible = true;
            break;
        }      
    }
    return(divisible)
        ?console.log(`El numero ${numero} NO  es un numero primo`)
        :console.log(`El numero ${numero} SI  es un numero primo`)

}

primo(4)

 /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.   */

 console.log ("13)")

 const par = (numero=undefined) => {

    if(numero===undefined) return console.warn(`No ingresate un numero`);

    if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un numero`);

    if (numero === 0)  return console.warn(`El numero no puede ser cero`);

    let par = false; 

        if((numero%2) === 0){
            par = true;
        }      
    return(par)
        ?console.log(`El numero ${numero} es un numero par`)
        :console.log(`El numero ${numero} es un numero impar`)
}
par(-15)



/*  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") 
devolverá 32°F */

 console.log ("14)")

 const Celsius = (numero = undefined) => {

   if(numero===undefined) return console.warn("No ingresaste ningun valor")

   if(typeof numero !=="number") return console.error (`El valor ${numero} ingresado, No es un numero`)

   Fahrenheit = numero * 1.8 +32

   return console.log (`C° ${numero} | F° ${Fahrenheit} `)

 }

 Celsius(18)