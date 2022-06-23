/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

console.log(`5)`)

const invertirPalabra = (cadena="") => (!cadena)
?console.warn(`No ingresaste ningun texto`)
:console.info(`La cadena invertida es ${cadena.split("").reverse().join("")}`)

invertirPalabra("ligar es se ragil")

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

 console.log(`6)`)

const nRepitePalabra = (cadena="",repite="") => {
    if(!cadena)return console.warn("Por favor ingrese una cadena");

    if(!repite)return console.warn("No se ingreso la palabra a evaluar");

    let  i=0,
    contador=0

    while(i!==-1){
        i = cadena.indexOf(repite,i)
        if(i!==-1){
        i++;
        contador++
        }
    }
    return console.log(`La palabra ${repite} se repite ${contador} veces`)
}

nRepitePalabra("holas ss s s","s")


/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

console.log(`7)`)


const palindromo = (cadena="") => {
    if(!cadena)console.warn(`No ingresaste ningun texto`)
cadenaAlreves=cadena.split("").reverse().join("")

if(cadena===cadenaAlreves) return console.log("True")
    else return console.log("false")


}
palindromo("reconocer")
/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const   eliminarCaracteres = (cadena="",patron="") => 
(!cadena)
? console.log("Ingresar cadena de texto")
:(!patron)
?console.log("Ingresar el patron a eliminar")
:console.info(cadena.replace(new RegExp(patron,"ig"),""))

eliminarCaracteres("x1, x2, x3, x4")