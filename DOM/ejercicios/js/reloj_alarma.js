//Variables globales

const d = document;
export function digitalClock(clock,btnStar,btnStop){
    let clockTempo;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnStar)){
           clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            },1000);

            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo)
            d.querySelector(clock).innerHTML = null
            d.querySelector(btnStar).disabled = false;
            
        }


    })
}
export function alarm(sound,alarmStart,alarmStop){
    let alarmaTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click",(e)=>{
        if(e.target.matches(alarmStart)){
            alarmaTempo = setTimeout(()=>{
                $alarm.play();
            },2000)
            e.target.disabled = true;
        }
        if(e.target.matches(alarmStop)){
            clearTimeout(alarmaTempo);
            $alarm.pause();   
            $alarm.currentTime = 0;
            d.querySelector(alarmStart).disabled = false;


        }

    })
}

