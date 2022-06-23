/*18) Programa una función que dada una cadena de texto cuente el número de vocales y
 consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */ 

console.log("18)")

const cuentaLetras = (cadena ="") =>{

    if(!cadena) return console.error (`No ingresaste ninguna cadena`);

    if(typeof cadena !== "string") return console.error (`El valor ingresado no es una cadena de texto`);

    let vocales = 0, 
    consonantes = 0;

    for(let letra of cadena){
        if(/[AEIOUÁÉíÓÚaeiouáéíóú]/.test(letra)) vocales++;
        
        if(/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }
    
    return console.info({
        cadena,
        vocales,
        consonantes
    })

}

cuentaLetras("HolaAA")


/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/ 

 console.log("19)")

const validarNombre= (nombre = "") =>{

    if(!nombre) return console.error (`No ingresaste ningun nombre`);

    if(typeof nombre !== "string") return console.error (`El valor ingresado no es una cadena de texto`);

    /*La esprecion regular ^=no puede haber nada antes de la expresion
    $ = no puede haber nada despues 
    \s = incluir espacios en blanco 
    g. =  */

let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚ\s]+$/g.test(nombre)    

    return(expReg)
    ?console.log ("Verdadero")
    :console.log ("Falso")
}

validarNombre("Juan")
 

 /*20) Programa una función que valide que un texto sea un email válido, pe.
  miFuncion("jonmircha@gmail.com") devolverá verdadero. */ 

 console.log("20)")

 const validarEmail= (email = "") =>{

    if(!email) return console.error (`No ingresaste ningun email`);

    if(typeof email !== "string") return console.error (`El valor ingresado no es una cadena de texto`);


let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)    

    return(expReg)
    ?console.log (`${email} "Verdadero"`)
    :console.log (`${email} "Falso"`)
}
validarEmail("asd,aSD,SD@gmail.edu")

