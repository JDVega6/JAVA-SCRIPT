
//Variables globales
const d = document;

export default function countDown(div, limitDate, message){
    const $countDown = d.getElementById(div),
        countDownDate = new Date(limitDate).getTime()

    //Variables locales
    let 
    dias,
    horas,
    minutos,
    segundos;

    //SetInterval para actualizar el conteo cada segundo
        setInterval(()=>{
            //Se realiza la resta de las fechas
            let limitTime = countDownDate - new Date().getTime()  ;
            // diasEnMs = 1000*60*60*24  //Tiempo en MiliSegundos => Dias
            dias = Math.floor( limitTime/(1000*60*60*24));//.floor devuelve el numero redondeado mas baj0 = 4.95 => 4
            horas =("0" + Math.floor((limitTime % (1000*60*60*24))/(1000*60*60))).slice(-2); //Para obtener las horas tenemos que operar con el residuo de dias por eso se utiliza el %
            minutos = ("0" + Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2);//Lo mismo de arriba pero con horas 
            segundos = ("0" + Math.floor((limitTime % (1000*60))/(1000))).slice(-2); //SE UTILIZA EL .slice para que corte el numero a dos digitos y se agrega el "0" para que aparezca en la interfaz
             
            $countDown.innerHTML = `<h3>Faltan ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos</h3>`
            
            if(limitTime<0){
                clearInterval(countDownDate)
                $countDown.innerHTML = null
                $countDown.innerHTML = `<h3>${message}</h3>`
            }
        },1000);
}