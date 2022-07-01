const d = document;
let x=0,
    y=0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),//Con este comando accedo a la posicion del elemento las caractristicasa de posicionamiento 
    limitsStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode)//Cada letra tiene un codigo 
    // console.log(limitsBall,limitsStage);


    switch (e.keyCode){
        case 37://ArrowLeft
            if(limitsBall.left > limitsStage.left +6.7) {//Se limita el movimiento de la pelota para que no se salga del escenario
                e.preventDefault();
                x--;
            }
            
        break;
        case 38://ArrowUp
            if(limitsBall.top > limitsStage.top + 10){
                e.preventDefault();// El preventDefault se usa para que no se interrumpa con otros eventos,se pone dentro
                // del "if" para que NO desabilite el evento "scroll" que tiene la pagina por defecto, esto se hace para todos los casos
                y--;
            }
        break;
        case 39://ArrowRight 
            if(limitsBall.right < limitsStage.right -6.7){
                e.preventDefault();
                x++;
            }
            break;
        case 40://ArrowDown
            if(limitsBall.bottom  < limitsStage.bottom -10){
                e.preventDefault();
                y++;
            }
            break;
        default:
                break
            }
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;  //aqui se crea la trasformacion en style para que se mueva el elemento en cuestion        
}

export function shortcus(e){
    // console.log(e.type)
    // console.log(e.key)
    // console.log(e.keyCode)//Cada letra tiene un codigo 
    // console.log(e.ctrlKey)//Son teclas especiales 
    // console.log(e.altKey)
    // console.log(e)

    if(e.altKey && e.key === "a"){
        alert("Lo lograste")
    }

}