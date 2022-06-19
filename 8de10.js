
/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
console.log("24)")

const organizarArreglos = (arreglo=undefined) =>{

    if(arreglo===undefined) return console.warn("No ingresaste el arreglo a organizar")
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length ===0) return console.error("El arreglo esta vacio");

    for (let num of arreglo) {
        if(typeof num !=="number") return console.error(`El valor ${num} no es un numero`);
    }

    //Se utiliza el metodo "sort()" para ordenar de forma ascendente y "reverse()" para invertir el arreglo
    //Se utiliza el filter y se indica eliminar los numeros repetidos en el arreglo
    return console.info({
        arreglo,
        asc: arreglo.map(el =>el).filter((item,index)=>{ return arreglo.indexOf(item) === index;}).sort()  ,
        desc: arreglo.map(el=>el).filter((item,index)=>{ return arreglo.indexOf(item) === index;}).sort().reverse()
    })
 
}
organizarArreglos([1,2,3,-4,2,3,3,3,4,4])


/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
console.log("25)")
const eliminarDuplicados =(arreglo = undefined) =>{

    if(arreglo===undefined) return console.warn("No ingresaste el arreglo a organizar")
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length ===0) return console.error("El arreglo esta vacio");
    if(arreglo.length ===1) return console.error("El arreglo debe tener almenos 2 elementos");


    // return console.log({
    //     arreglo,
    //     sinDuplicados: arreglo.map(el=>el).filter((item,index)=>{return arreglo.indexOf(item)===index})
    // })

    return console.log ({
        original :arreglo,
        sinDuplicados:[...new Set(arreglo)] 
    })
}
eliminarDuplicados([1,2,3,4,2,2,2,3,3,3,5,5,5,true ,true])

/*26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
console.log("26)")

const promedioArreglo = (arreglo = undefined) => {

    if (arreglo ===undefined) return console.warn(`No ingresaste un arreglo`)
    if(!(arreglo instanceof Array)) return console.error (`El valor que ingresaste no es un arreglo`)
    if(arreglo.length === 0) return console.warn(`Se te olvido llenar el arreglo`)
    for (let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor ${num} se te colo, NO es un numero`)
    }

    return console.log (
       arreglo.reduce((total,num,index,arreglo)=>{
        total += num;
        if(index === arreglo.length-1){
            return `El promedio de ${arreglo.join("+")} es ${total/arreglo.length}`
        } else{
            return total;
        }
       })
    )
}
promedioArreglo([1,2,3,4])