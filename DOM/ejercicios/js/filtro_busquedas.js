const d= document;

export default function searchFilters(input, selector){
    // const $figuras = d.querySelectorAll(selector)

    d.addEventListener("keyup",(e) => {
        if(e.target.matches(input)){
            // console.log(e.key)

            d.querySelectorAll(selector).forEach((el) => el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?el.classList.remove("filter")
            :el.classList.add("filter"));
        }

    })

}