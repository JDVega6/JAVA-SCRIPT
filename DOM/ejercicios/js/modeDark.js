const d = document,
    ls = localStorage;

export default function modoOscuro(btn, classDark, classDarkStage){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"),//De esta forma se traen todos loe elementos que tienen esta clase
        $selectorsStage = d.querySelectorAll("[dark-stage]"),//SE TIENE QUE UTILIZAR .querySelectorAll cuando uno accede a el parametro, tu me entiendes
                                                            //transportate a este momento y lo recordaras por que no se como explicarlo :)
        $selectorsBall = d.querySelectorAll("[dark-ball]");
        // console.log($selectors)

        let moon = "🌙",
            sun = "☀️";

        const lightMode = ()=>{
            $selectors.forEach(el => el.classList.remove(classDark));
            $selectorsStage.forEach(el => el.classList.remove(classDarkStage));
            $selectorsBall.forEach(el => el.classList.remove(classDark));
            $themeBtn.textContent = moon;
            ls.setItem("theme","light")
            
        }
        const darkMode = ()=>{
            $selectors.forEach(el => el.classList.add(classDark));//ForEach por que es un arreglo 
            $selectorsStage.forEach(el => el.classList.add(classDarkStage));
            $selectorsBall.forEach(el => el.classList.add(classDark));  
            $themeBtn.textContent = sun;
            ls.setItem("theme","dark")
         }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
            darkMode();
        }else{
            lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded",(e)=>{
        if(ls.getItem("theme") === null) ls.setItem("theme","light");
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkMode();
    })

}