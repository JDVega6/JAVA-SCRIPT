
const d = document,
w = window;

export default function botonScroll(btn){
    const $scrollBtn = d.querySelector(btn)
    w.addEventListener("scroll",(e)=>{
        // console.log(w.pageYOffset, d.documentElement.scrollTop)//Dos formas de saber los valores del scroll
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop

        if(scrollTop > 640){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }
    })

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            })
        }
    })

}