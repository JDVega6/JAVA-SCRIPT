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

 const convertirGrados = (grados = undefined, unidad=undefined) => {

   if(grados===undefined) return console.warn("No ingresaste los grados a convertir")
   if(unidad===undefined) return console.warn("No ingresaste la unidad de temperatura")

   if(typeof grados !=="number" ) return console.error (`El valor ${numero} ingresado, No es un numero`)
   if(typeof unidad !=="string" ) return console.error (`El valor ${unidad} ingresado, No es una cadena de texto`)

   if(unidad.length!==1 || !/(C|F)/.test(unidad)) return console.warn(`El valor de la unidad no es reconocida`)

 switch (unidad) {
     case "F":
            celsius = (grados-32) / 1.8
            return console.log (`C° ${Math.round(celsius)} | F° ${grados} `)
         break;

         case "C":
            Fahrenheit = grados * 1.8 +32
            return console.log (`C° ${grados} | F° ${Math.round(Fahrenheit)} `)
            break;

     default:
         break;
    }

 }

 convertirGrados()
 convertirGrados("2")
 convertirGrados(2,true)
 convertirGrados(0,"C")