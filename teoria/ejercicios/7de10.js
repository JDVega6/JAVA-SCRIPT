/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

console.log("21)")

const arrayCuadrado = (arreglo=undefined) =>{

    if(arreglo===undefined) return console.warn("No ingresaste el arreglo a elevar")
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length ===0) return console.error("El arreglo esta vacio");


   for (let num of arreglo) {
       if(typeof num !=="number") return console.error(`El valor ${num} no es un numero`);
   }

   const newArr = arreglo.map(el =>el*el)

   return console.info(`Arreglo original: ${arreglo},\nArreglo elevado a el cuadrado: ${newArr}`)
}

//arrayCuadrado([1,2,3])

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. 
miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

console.log("22)")

const arrayNumeroExtremos= (arreglo=undefined) =>{
    if(arreglo===undefined) return console.warn("No ingresaste el arreglo")
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length ===0) return console.error("El arreglo esta vacio");

    for (let num of arreglo) {
        if(typeof num !=="number") return console.error(`El valor ${num} no es un numero`);
    }

    return console.info(`Arreglo original: ${arreglo} \nEl valor maximo del arreglo es: ${Math.max(...arreglo)}\nEl valor minimo del arreglo es ${Math.min(...arreglo)} `)
}
arrayNumeroExtremos(true)

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
{pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
console.log("23)")
const organizarArregloParesImpares = (arreglo=undefined) =>{
    if (arreglo ===undefined) return console.warn(`No ingresaste un arreglo`)
    if(!(arreglo instanceof Array)) return console.error (`El valor que ingresaste no es un arreglo`)
    if(arreglo.length === 0) return console.warn(`Se te olvido llenar el arreglo`)
    for (let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor ${num} se te colo, NO es un numero`)
    }

    return console.info({
        pares: arreglo.filter(num =>num%2 ===0),
        impares: arreglo.filter(num => num%2 ===1)
    })


}
organizarArregloParesImpares([1,2,3,4,5,6])