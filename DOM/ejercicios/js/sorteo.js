const d = document;

export default function draw(btn,selector,div){
   const $div = d.getElementById(div)
    
    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];

        console.log($players)

        return `El ganador es: ${winner.textContent}`

    }

d.addEventListener("click",(e)=>{
    if(e.target.matches(btn)){
        let results = getWinner(selector);
        $div.innerHTML = results;
        // alert(results)
        console.log(results)
    }
})

}