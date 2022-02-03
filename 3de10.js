/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

console.log(`9)`)

const aleatorio = () => console.info(Math.round(Math.random()*100)+500);

aleatorio();

/*10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

 console.log(`10)`)

const capicua = (numero = 0) => {
if(!numero) return console.warn(`No ingresaste ningun numero`);

if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un numero`);

numero=numero.toString();
let alReves=numero.split("").reverse().join("");

return (numero===alReves)
? console.info(`Si es capicua Numero Original ${numero}, Numero al reves ${alReves}`)
:console.info(`No es capicua Numero Original ${numero}, Numero al reves ${alReves}`)
}

capicua(2000)


 /*11) Programa una función que calcule el factorial de un número
  (El factorial de un entero positivo n, se define como el producto de todos los números enteros 
    positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

    console.log(`11)`)

const factorial = (numero = undefined) =>{
if(numero===undefined) return console.warn(`No ingresate un numero`);

if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, NO es un numero`);

if (numero === 0)  return console.warn(`El factorail del numero 0 es 1`)

if (numero <= 0)  return console.warn(`No se puede realizar el factorial de numeros negativos `)

let factorial=1

for (let i=numero; i>0 ; i++){
    factorial *= i;
}

return console.info (`El factorial del numero ${numero} es ${factorial}`)

}

factorial (5)
