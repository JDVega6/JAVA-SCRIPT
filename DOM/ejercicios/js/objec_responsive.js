const d = document,
    w = window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    let breakPoint = w.matchMedia(mq); //matchMedia Permite manejar las cosas de forma diferente cuando la ventana es muy pequeña

    const responsive=(e)=>{//Es la que detecta el cambio del tamaño de la pantalla y realiza el cambio el contenido del id
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }
    breakPoint.addListener(responsive);//Se aplica el cambio con la evaluacion de la funcion
    responsive(breakPoint);//Ejecuta la funcion cuando carga la pagina osea siempre (cuando se abre)
}

//NOTA IMORTANTE: addListener is deprecated, so you should make it of other form