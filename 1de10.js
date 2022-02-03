/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
 miFuncion("Hola Mundo") devolverá 10.
*/
console.log(`1)`)

contadorDeCaracteres = (cadena="") => (!cadena)
?console.warn(`No ingresaste ningun texto`)
:console.info(`La cadena tiene ${cadena.length} caracteres`)

contadorDeCaracteres( )


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

*/
console.log(`2)`)

const recortarCadena = (cadena="",ncarac=undefined) =>(!cadena)
?console.warn(`No ingresaste ningun texto`)
 :(ncarac===undefined)
 ?console.warn("Ingresa el numero de caracteres a recortar")
 :console.log(cadena.slice(0,ncarac))

recortarCadena("i love u",3)
/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
console.log(`3)`)

const dividirCadena = (cadena="",separador=undefined) => (!cadena)
?console.warn(`No ingresaste ningun texto`)
:(separador===undefined)
?console.warn("Por favor indicar el separador del texto")
:console.info(cadena.split(separador))

dividirCadena("hola como estas"," ")

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirCadena = (cadena="",nVeces=undefined) => (!cadena)
?console.warn(`No ingresaste ningun texto`)
:(nVeces===undefined)
?console.warn("Por favor indicar el numero de veces que desea repetir el texto")
:console.info(cadena.repeat(nVeces))

repetirCadena("hola como estas *",4)
