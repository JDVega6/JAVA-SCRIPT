const d = document;

export default function scrollSpy(){

    const $section = d.querySelectorAll("section[data-scroll-spy]");//Se exporta el elemento que se quiere observar, aqui asignamos un data en el html 


    const cb = (entries)=>{//Es la funcion callback que recive el observador 
        // console.log(entries)//se obtiene la informacion del elemento

        entries.forEach(entry =>{
            // console.log("entry",entry)//Se puede observar cada elemento si lo recorremos con un forEach
            const id = entry.target.getAttribute("id");
            // console.log(id);//Observano la info que devuelve "entry" se deduce que se puede acceder a cada "id" de cada seccion
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")//Obtenemos el selector del menu y le agregamos la clase "active"
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")

            }
        })
    }

    const observer = new IntersectionObserver(cb,{
        //root:
        // rootMargin:"-250px"//Se disminuye el area de interaccion para que sea mas preciso 
        threshold: [0.48, 0.75] //Con esta propiedad se trabaja en porcentajes, quiere decir que se va a mostrar el elemento que tenga por lo menos el 45% en pantalla, es mejor trabajar con porcentajes

    })//Es un observador que recibe un callback y unos parametros, devuelve informacion del elemento indicado
    $section.forEach(el=>observer.observe(el))//Se asigna el observador a cada elemento por medio de un forEach

}