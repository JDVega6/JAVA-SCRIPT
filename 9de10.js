// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id 
// de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y 
// calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.


// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama,
//  Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
//  Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
    constructor({id ,titulo,director,estreno,pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPaises(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    //Se crea el metodo estatico de los generos,  un metodo estatico se pueden ejecutar sin necesidad 
    // de instanciar la clase, NOTA: video #25

    static get listaGeneros(){
       return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
        "Documentary" ,"Drama","Family", "Fantasy"," Film Noir", "Game-Show", "History", "Horror", "Musical", 
        "Music", "Mystery","News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show",
         "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info (`Los generos acptados son ${Pelicula.listaGeneros.join(",")}`)
    }
    //Se crean metodos de validaciones que se repiten para optimizar el codigo
    validarCadena(propiedad,valor){
        if(!valor) return console.warn (`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "string") return console.error (`${propiedad} "${valor}"  ingresado no es una cadena de texto`);

        return true;
    }

    validarLongitudDeCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.warn(`${propiedad} "${valor}" Supera la longitud permitida de caracteres, solo se permiten ${longitud} caracteres`)

        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !=="number")return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);
        
        return true;
    }

    validarArreglo(propiedad,arreglo){
        if(arreglo===undefined) return console.warn(`${propiedad} "${arreglo}" esta vacio`);
        if(!(arreglo instanceof Array)) return console.error(`${propiedad} "${arreglo}" No es un arreglo`);
        if(arreglo.length ===0) return console.error(`${propiedad} "${arreglo}" No tiene informacion`);

    for (let cadena of arreglo) {
        if(typeof cadena !=="string") return console.error(`El valor "${cadena}" no es una cadena de texto`);
    }

    return true;
    }

    //Se crean las validaciones que nos pide el enunciado
    validarIMDB (id){
        if(this.validarCadena("IMDB id ",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.error(`El IMDB id "${id}" No es valido, debe tener 9 caracteres, los 2   primeros letras minuscula, los otros 7 numeros`) 
        } 
    }

    validarTitulo (titulo){
        if(this.validarCadena("Titulo ",titulo))
           this.validarLongitudDeCadena("Titulo",titulo,100);
        } 
    validarDirector (director){
        if(this.validarCadena("Director ",director))
           this.validarLongitudDeCadena("Director",director,50);
        }
        
    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno",estreno))
        if (!(/^([)0-9]){4}$/.test(estreno))) return console.warn(`El valor ${estreno} ingresado no es un numero de 4 digitos`);
    }

    validarPaises(pais){
        if(this.validarArreglo("Pais",pais));
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos",generos)){
         for(let genero of generos){
            // console.log(genero, Pelicula.listaGeneros.includes(genero));
            if(!Pelicula.listaGeneros.includes(genero)){
                console.error(`Genero(s) incorrectos son "${generos.join(",")}"`);
                Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion: ",calificacion))
        return (calificacion < 0 || calificacion > 10)
        ?console.warn(`La calificacion tiene que estar entre el rango 0 y 10`)
        :this.calificacion = calificacion.toFixed(1);
        
    }

    fichaTecnica(){
        console.log(`\tFICHA TECNICA\nTitulo:"${this.titulo}"\nDirector: ${this.director}\nAño de estreno:${this.estreno}\nPais: ${this.pais.join(",")}\nGeneros: ${this.generos.join("-")}\nCalificacion: ${this.calificacion}\nIMDB: ${this.id}`)
    }
}

const pelis = [{
    id:"tt1234567",
    titulo:"End Game",
    director: "Hermanos Russo",
    estreno: 2019,
    pais:["Colombia","Mexico"],
    generos:["Comedy","Sport"],
    calificacion: 9.89999
    
},
{
    id:"tt1234564",
    titulo:"End Game",
    director: "Hermanos Russo",
    estreno: 2019,
    pais:["Colombia","Mexico"],
    generos:["Comedy","Sport"],
    calificacion: 9.89999
    
}

];
pelis.forEach(el => new Pelicula(el).fichaTecnica())

