
//INTRODUCCION
{
    // console.log("***************Elementos del documento **************");
    // console.log(window.document);
    // console.log(document.head);
    // console.log(document.doctype);
    // console.log(document.characterSet);
    
    // setTimeout(()=>{
    //   console.log(document.getSelection().toString())
    // },3000)

}

//NODOS
{
    // console.log(document.getElementsByTagName("li"));
    // console.log(document.getElementsByClassName("card"));
    // console.log(document.getElementsByName("nombre"));
    // console.log(document.getElementById("menu"));
    // console.log(document.querySelector("#menu"));
    // console.log(document.querySelector("a"));
    // console.log(document.querySelectorAll("a").length);
    // document.querySelectorAll("a").forEach(el => console.log(el));
}

//ATTRIBUTES Y DATA-ATTRIBUTES
{
    // console.log(document.documentElement.lang);
    // console.log(document.documentElement.getAttribute("lang"));
    // console.log(document.querySelector(".link-dom").href);
    // console.log(document.querySelector(".link-dom").getAttribute("href"));
    
    // //Se puede cambiar atributos del dom
    // document.documentElement.lang="es";
    // console.log(document.documentElement.lang);
    // document.documentElement.setAttribute("lang","es-MX");
    // console.log(document.documentElement.lang);

    // const $linkDom = document.querySelector(".link-dom");

    // $linkDom.setAttribute("target","_blank");
    // $linkDom.setAttribute("rel","noopener");//Buenas practicas, es mas seguro ya que no hay una dependencia entre la ventana que se abre y el origen
    // $linkDom.setAttribute("href","https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64");
    // console.log($linkDom.hasAttribute("rel"));
    // $linkDom.removeAttribute("rel");
    // console.log($linkDom.hasAttribute("rel"));

    // //Data-Attributes
    // console.log($linkDom.getAttribute("data-description"));
    // console.log($linkDom.dataset);
    
}

//DOM ESTILOS Y VARIABLES CSS
{
    // const $linkDom = document.querySelector(".link-dom");
    // console.log($linkDom.style);
    // console.log($linkDom.getAttribute("style"));
    // console.log($linkDom.style.backgroundColor);
    // console.log($linkDom.style.color);
    // // console.log(window.getComputedStyle($linkDom));
    // // console.log(getComputedStyle($linkDom).getPropertyValue("color"));

    // //you can change value of style in js
    // $linkDom.style.setProperty("text-decoration","none");
    // $linkDom.style.setProperty("display","block");
    // $linkDom.style.width = "50%";
    // $linkDom.style.textAlign = "center";
    // $linkDom.style.marginLeft = "auto";
    // $linkDom.style.marginRight = "auto";
    // $linkDom.style.padding = "1rem";
    // $linkDom.style.borderRadius = ".5rem";

    // //variables CSS -Custom Properties CSS
    // const $html = document.documentElement, $body = document.body;
    // let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    //  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    //  console.log(varDarkColor,varYellowColor);

    //  $body.style.backgroundColor = varDarkColor;
    //  $body.style.color = varYellowColor;

    //  $html.style.setProperty("--dark-color","#000")
    //  varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    //  $body.style.setProperty("background-color",varDarkColor);

}

//CLASES EN CSS
{
    // const $card = document.querySelector(".card");
    
    // console.log($card.className);
    // console.log($card.classList);
    // console.log($card.classList.contains("rotate-45"));
    // $card.classList.add("rotate-45");
    // console.log($card.classList.contains("rotate-45"));
    // $card.classList.remove("rotate-45");
    // // $card.classList.toggle("rotate-135");//Si no existe la agrega y si existe la elimina
    // $card.classList.replace("rotate-135","rotate-45");//Reemplazar una clase 
    
    // $card.classList.add("opacity-80","sepia");
}

//DOM texto y html
{
//     const $whatIsDom = document.getElementById("que-es");

//     let text=`
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
// API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
//     `

//     // $whatIsDom.innerText = text;
//     $whatIsDom.textContent = text;
//     $whatIsDom.innerHTML = text;
//     $whatIsDom.outerHTML = text;
}

//DOM TRAVERSING: RECORRIENDO EL DOM
{
    // const $cards =document.querySelector(".cards");
    // console.log($cards.children[2]);
    // console.log($cards.parentElement);
    // console.log($cards.firstElementChild);
    // console.log($cards.lastElementChild);
    // console.log($cards.previousElementSibling);
    // console.log($cards.nextElementSibling);
    // console.log($cards.closest("div"));
}

//CREANDO ELEMENTOS Y FRAGMENTOS DEL DOM
{
    // const $figure = document.createElement("figure"),
    //  $img = document.createElement("img"),
    //  $figcaption = document.createElement("figcaption"),
    //  $figcaptionText = document.createTextNode("Animals"),
    //  $cards = document.querySelector(".cards");

    //  $img.setAttribute("src","https://placeimg.com/200/200/animals");
    //  $img.setAttribute("alt","Animals");
    //  $figure.classList.add("card")

    //  $figcaption.appendChild($figcaptionText);
    //  $figure.appendChild($img);
    //  $figure.appendChild($figcaption);
    //  $cards.appendChild($figure)

    //  /****************************************************************************** */

    //  const estaciones = ["primaver","verano","invierno","otoño"],
    //  $ul=document.createElement("ul");

    //  document.write("<h3>Estaciones del año</h3>");
    //  document.body.appendChild($ul);

    //  estaciones.forEach(el =>{
    //     const $li = document.createElement("li");
    //     $li.textContent = el;
    //     $ul.appendChild($li)
    //  })
     
    //  //---------------------------------------------------------------------------

    //  const continentes = ["America","Europa","Oceania","Asia","Africa"],
    //  $ul2=document.createElement("ul");

    //  document.write("<h3>Continentes del mundo</h3>");
    //  document.body.appendChild($ul2);

    //  continentes.forEach(el =>($ul2.innerHTML +=`<li>${el}</li>`))

    //  //-----------------------------------------------------------------------------
    //  //Creando un fragmento para crear elementos es la forma mas optima 
    //  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    //  $ul3=document.createElement("ul");
    //  $fragment =document.createDocumentFragment();

    //  meses.forEach((el) =>{
    //     const $li = document.createElement("li");
    //     $li.textContent = el;
    //     $fragment.appendChild($li)
    //  })

    //  document.write("<h3>Meses del año</h3>");
    //  $ul3.appendChild($fragment);
    //  document.body.appendChild($ul3)

}

//TEMPLATES
{
    // const $cards = document.querySelector(".cards"),
    // $template =document.getElementById("template-card").content,
    // $fragment=document.createDocumentFragment(),
    // cardContent = [
    //     {
    //     title:"Tecnologia",
    //     img:"https://placeimg.com/200/200/tech"
    //     },
    //     {
    //     title:"Animales",
    //     img:"https://placeimg.com/200/200/animals"
    //     },
    //     {
    //     title:"Arquitectura",
    //     img:"https://placeimg.com/200/200/arch"
    //     },
    //     {
    //     title:"Gente",
    //     img:"https://placeimg.com/200/200/people"
    //     },
    //     {
    //     title:"Naturaleza",
    //     img:"https://placeimg.com/200/200/nature"
    //     },
    // ];

    // cardContent.forEach(el=>{
    //     $template.querySelector("img").setAttribute("src",el.img);
    //     $template.querySelector("img").setAttribute("alt",el.title);
    //     $template.querySelector("figcaption").textContent=el.title;

    //     let $clone = document.importNode($template,true);
    //     $fragment.appendChild($clone);

    // });
    // $cards.appendChild($fragment);
}

//MODIFICANDO ELEMENTOS  (old style)
{
    // const $cards = document.querySelector(".cards"),
    // $newCard = document.createElement("figure"),
    // $cloneCards = $cards.cloneNode(true);

    // $newCard.innerHTML= `
    // <img src="https://placeimg.com/200/200/any" alt="Any">
    // <figcaption>Any</figcaption>
    // `
    // $newCard.classList.add("card");

    // // $cards.replaceChild($newCard,$cards.children[3])
    // // $cards.insertBefore($newCard,$cards.firstElementChild);
    // // $cards.removeChild($cards.lastElementChild);
    // document.body.appendChild($cloneCards);

}

//MODIFICANDO ELEMENTOS (COOL STYLE)
{
    
    /* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/


//     const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure");

//    let $contenCard= `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
//     `
//     $newCard.classList.add("card");



//     $newCard.insertAdjacentHTML("beforeend",$contenCard)
//     $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
//     $cards.insertAdjacentElement("beforebegin",$newCard);
//     // $cards.insertAdjacentElement("afterbegin",$newCard); 

//     // $cards.prepend($newCard);
//     // $cards.append($newCard);
//     // $cards.before($newCard);
//     // $cards.after($newCard);

}   

//DOM: MANEJADORES DE EVENTOS
{
    // function holaMundo (){
    //     alert(`Hola mundo`)
    // }

    // const $eventoSemantico = document.getElementById("evento-semantico");

    // //Se iguala a el nombre de la funcion pero sin los parentesis SOLO SE PUEDE PASAR UN PARAMETRO
    // // $eventoSemantico.onclick = holaMundo
    // $eventoSemantico.onclick = (e) => {
    //     alert(`Evento con arrow function`)
    //     console.log(e)
    // }

    // const $eventoMultiple = document.getElementById("evento-multiple");

    // $eventoMultiple.addEventListener("click",holaMundo);
    // $eventoMultiple.addEventListener("click",(e)=>{
    //     alert(`Hola con evento multiple`)
    //     console.log(e);
    //     console.log(e.type);
    //     console.log(e.target);
    //     console.log(event);

    // });

}

//DOM:EVENTOS CON PARAMETROS T REMOVER EVENTOS
{
    // function saludar(nombre = `Desconocid@`){
    //     alert(`Hola ${nombre}`)
    // }

    // function holaMundo (){
    //     alert(`Hola mundo`)
    // }

    // const $eventoMultiple = document.getElementById("evento-multiple");

    // $eventoMultiple.addEventListener("click",holaMundo);
    // $eventoMultiple.addEventListener("click",(e)=>{
    //     alert(`Hola con evento multiple`)
    //     console.log(e);
    //     console.log(e.type);
    //     console.log(e.target);
    //     console.log(event);
    // });

    // //Para poder pasar parametros a los eventos no se puede solo con la funcion, toca encapsular la funcion del evento en 
    // //una funcion anonima o en una arrow funtion
    // $eventoMultiple.addEventListener("click",()=>saludar());
    // $eventoMultiple.addEventListener("click",()=>{
    //     saludar();
    //     saludar("Juan Diego");

    // });

    // //REMOVER
    // const $eventoRemover = document.getElementById("evento-remove");

    // const removerDobleClick = (e)=>{
    //     alert(`Removiendo el evento tipo ${e.type}`);
    //     console.log(e);
    //     $eventoRemover.removeEventListener("dblclick",removerDobleClick)
    //     $eventoRemover.disabled = true;

    // }

    // $eventoRemover.addEventListener("dblclick",removerDobleClick);

}

//FLUJO DE LOS EVENTOS
{
    // const $disEventos = document.querySelectorAll(`.eventos-flujo div`);
    // console.log($disEventos);

    // function flujoEventos(e){
    //     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
    // }

    // $disEventos.forEach(div =>{
    //     //Fase de burbuja, del elemento mas interno a el elmento mas externo
    //     // div.addEventListener("click",flujoEventos,false);
    //     //Fase de captura, del elemento mas externo al elemento mas interno
    //     // div.addEventListener("click",flujoEventos,true);

    //     div.addEventListener("click",flujoEventos,{
    //         capture: false,
    //         once: true
    //     })
    // })
}

//DOM STOP PROPAGATION & PREVENT DEFAULT
{
    //  const $disEventos = document.querySelectorAll(`.eventos-flujo div`),
    //  $linkEventos =  document.querySelector(".eventos-flujo a");
    // console.log($disEventos);

    // function flujoEventos(e){
    //     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
    //     //Evita la propagacion de los div
    //     e.stopPropagation();
    // }

    // $disEventos.forEach(div =>{
    //     //Fase de burbuja, del elemento mas interno a el elmento mas externo
    //     div.addEventListener("click",flujoEventos,false);
      
    // });

    // $linkEventos.addEventListener("click",(e)=>{
    //     alert("Hola soy linkEventos");
    //     //Realiza la opcion por defecto
    //     e.preventDefault();
    //     e.stopPropagation();
    // })
}

//DELEGACION DE EVENTOS
{

    // function flujoEventos(e){
    //     console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
    //     //Evita la propagacion de los div
        
    // }

    // document.addEventListener("click",(e)=>{
    //     // console.log("click en", e.target);

    //     if(e.target.matches(".eventos-flujo a")){
    //         alert("Hola soy linkEventos");
    //         e.preventDefault();
    //     }
    //     if(e.target.matches(".eventos-flujo div")){
    //         flujoEventos(e)
    //     }
    // });

}
//77
//BOM PROPIEDADES Y EVENTOS
{
    // window.addEventListener("resize",(e)=>{
        
    //     console.clear();
    //     console.log("Evento resize");
    //     console.log(window.innerWidth);
    //     console.log(window.innerHeight);
    //     console.log(window.outerHeight);
    //     console.log(window.outerWidth);
    //     console.log(e);
    // })
    
    // window.addEventListener("scroll",(e)=>{
    //     console.clear();
    //     console.log("Evento scroll");
    //     console.log(window.scrollY);
    //     console.log(e);
        
    // })
    
    // window.addEventListener("load", e=>{
    //     // console.clear();
    //     console.log("Evento load");
    //     console.log(window.screenX);
    //     console.log(window.screenY);
    //     console.log(e);
        
    // })
    
    // //Para llamar a el evento de recargar pagina es mucho mas rapido citando "document." NOTA: esto no recarga estilos
    // //ni el documento html no espera nada de las interfacez visuales de la pagina
    // document.addEventListener("DOMContentLoaded",e=>{
    //     // console.clear();
    //     console.log("Evento DOMContentLoaded");
    //     console.log(window.screenX);
    //     console.log(window.screenY);
    //     console.log(e);
        
    // })
   
}

//BOM METODOS
{

    //Se ayuda de este enlace para asignar eventos a los botones, aun no se sabe como hacer con el ID SIN UTILIZAR getid
    // https://www.youtube.com/watch?v=_kUuH-TIEDQ
    //Variable globales
    const botones = document.querySelector('#Botones');
    let ventana;

    //Se asigna el evento
    botones.addEventListener('click',delegacion);

    //El metodo que va a realizar
    function delegacion(e){
        e.preventDefault(); 
        const servicio = e.target.className

        switch(servicio){
            case "abrir":
                ventana = open("http://johnny-five.io/")
                break;
            case "cerrar":
                ventana.close();
                break;

            case "imprimir":
                window.print();
                break;
            default:
                break;
        }
    }

}

//BOM: OBJETOS URL, HISTORIAL Y NAVEGADOR
{
    // console.log("****************Obejeto URL (locatio)********")
    // console.log(location);
    // console.log(location.origin);
    // console.log(location.protocol);
    // console.log(location.host);
    // console.log(location.hostname);
    // console.log(location.port);
    // console.log(location.href);
    // console.log(location.hash);
    // console.log(location.pathname);
    // console.log(location.search);


    // console.log("*****************Objeto Historial*************************************")
    // console.log(history);
    // console.log(history.length);
    // console.log(history.back(/*numero de paginas que deseas regresar*/ ));
    // console.log(history.forward(/*numero de paginas que deseas avanzar*/ ));
    // console.log(history.go(/*numero de paginas a la que deseas ir*/ ));
    
    
    console.log("*****************Objeto Navegador*************************************");
    console.log(navigator);
    console.log(navigator.connection);
    console.log(navigator.geolocation);
    console.log(navigator.mediaDevices);
    console.log(navigator.mimeTypes);
    console.log(navigator.onLine);
    console.log(navigator.serviceWorker);
    console.log(navigator.storage);
    console.log(navigator.usb);
    console.log(navigator.userAgent);

}