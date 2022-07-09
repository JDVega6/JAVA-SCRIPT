const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slide = d.querySelectorAll(".slider-slide");

        let i = 0;

        setInterval(()=>{
            $slide[i].classList.remove("active")
            i++;
            if(i > $slide.length-1){
                i = 0;
            }
            $slide[i].classList.add("active");


        },5000)

         d.addEventListener("click", (e)=>{
            


            if(e.target === $prevBtn){
                e.preventDefault();
                $slide[i].classList.remove("active");
                i--;

                if(i < 0){
                    i = $slide.length -1;
                }

                $slide[i].classList.add("active");
            }

            if(e.target === $nextBtn){
                e.preventDefault();
                $slide[i].classList.remove("active");
                i++;

                if(i > $slide.length-1){
                    i = 0;
                }

                $slide[i].classList.add("active");
            }
         })

}