//Aca se realiza el metodo o la funcion que index_dom.js va a llamar 
export default function hamburguerMenu(panelBtn,panel, menuLink){
    //VAriables globales
    const d=document; // Se agrega para optimizar codigo

    d.addEventListener("click",(e)=>{
        //Se pone el condicional y se tiene qeu asignar tambien el `${panelBtn} *` por que hace referencia a los hijos
        //que en el cod html es el span y en la pagina son las tres lineas horizontales
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            //Se agrga "is-active" a la clase del PANEL
            d.querySelector(panel).classList.toggle("is-active");//toggle actua como negador si esta lo quita si no esta lo pone
            //Se agrga "is-active" a la clase del BOTON
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        //Se asigane el evento tambien para cuando se le de click a algun click del menu
        if(e.target.matches(menuLink)){
              //Se agrga "is-active" a la clase del PANEL
              d.querySelector(panel).classList.remove("is-active");//remove quita los elementos
              //Se agrga "is-active" a la clase del BOTON
              d.querySelector(panelBtn).classList.remove("is-active");
        }
    })

}

