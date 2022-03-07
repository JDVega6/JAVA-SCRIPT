/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10.  */ 

console.log("15)")

const convertirSistemasNumericos = (numero=undefined, base=undefined) =>{

if(numero===undefined || base === undefined) return console.warn(`No ingresas los numeros completos `)


if(typeof numero !=="number") return console.warn (`El valor ${numero} no es un numero`)
if(typeof base !=="number") return console.warn (`El valor ${base} no es una cadena de texto`)



if(base === 2){
        return console.info (`${numero} en base ${base} = ${parseInt(numero,base)} base 10`)
}
}

convertirSistemasNumericos(11111,2)

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento
 a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.  */

 console.log("16)")

 /*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta
  el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

  console.log("17)")
