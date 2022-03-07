/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10.  */ 

console.log("15)")

const convertirSistemasNumericos = (numero=undefined, base=undefined) =>{

if(numero===undefined || base === undefined) return console.warn(`No ingresas los numeros completos `)


if(typeof numero !=="number") return console.warn (`El valor ${numero} no es un numero`)
if(typeof base !=="number") return console.warn (`El valor ${base} NO es un numero`)



if(base === 2){
        return console.info (`${numero} en base ${base} = ${parseInt(numero,base)} base 10`)
}else if(base === 10){

        return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`)
}else{
        return console.error("el tipo de base a convertir no es valida")
}
}

convertirSistemasNumericos(2,1)

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento
 a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.  */

 console.log("16)")

 const aplicarDescuento = (Precio=undefined, Descuento=undefined) =>{

        if(Precio ===undefined || Descuento === undefined) return console.warn (`No ingreso la informacion completa`)

        if(typeof Precio !== "number") return console.warn(`El valor ingresado ${Precio} no es un numero`)

        if(typeof Descuento !== "number") return console.warn (`El valor ingresado ${Descuento} no es un numero`)

        if(Math.sign(Precio) === -1 || Math.sign(Descuento) === -1) return console.warn(`No se puede ingresar ningun valor negativo`)

        FDescuento = Precio - Precio*(Descuento/100)

        return console.info (`El precio con descuento de ${Descuento}% del  producto es de $${FDescuento} `)
 }

 aplicarDescuento(1000,20)

 /*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta
  el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

  /* JAVASCRIPT  toma las fechas en milisegundos*/ 

  console.log("17)")

  const CuantoAñosHanPasado = (fecha=undefined) =>{

        if(fecha === undefined) return console.warn(`No ingresaste la fecha`);

        if(!(fecha instanceof  Date)) return console.warn(`El valor que ingresaste no es una fecha`);

        
        let hoyMenosFecha = new Date().getTime() - fecha.getTime()
/*
        aniosEnMs = (1000 * 60 * 60 * 24 * 365)
        aniosEnHumanos = Math.floor(hoyMenosFecha/aniosEnMs)
        */
        
        diasEnMs = 1000*60*60*24
        diasEnHumanos = Math.floor(hoyMenosFecha/diasEnMs)
        aniosEnHumanos = Math.trunc(diasEnHumanos/365)

        diasEnHumanos= diasEnHumanos - 365*aniosEnHumanos
        mesesEnHumanos =Math.trunc(diasEnHumanos/30)    
        diasEnHumanos = diasEnHumanos - 30*mesesEnHumanos

        
        


        return (Math.sign(aniosEnHumanos) === -1)
        ?console.info (`Faltan ${Math.abs(aniosEnHumanos)}años para el ${fecha.getFullYear()}.`)
        :(Math.sign(aniosEnHumanos)===1)
        ?console.info(`Han pasado ${aniosEnHumanos} años, ${mesesEnHumanos} meses y ${diasEnHumanos} dias desde ${fecha.getFullYear()}.`)
        :console.info(`Estamos en el año actual `)


}
  CuantoAñosHanPasado(new Date(1998,5,26))
