import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj_alarma.js";
import { moveBall,shortcus } from "./teclado.js";
import countDown  from "./countDown.js";
import botonScroll from "./scrollBtn.js";
import modoOscuro from "./modeDark.js";
import responsiveMedia from "./objec_responsive.js";
import responsiveTester from "./prueba_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    //Aca es donde estoy llamando los elemntos del html
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/bongo-alarm-huawei-ringtones.mp3","#activar-alarma","#desactivar-alarma");
    countDown("cuenta-regresiva","Dec 07, 2022 00:00:00","Feliz cumpleaños Carolina");
    botonScroll(".scroll-top-btn");
    responsiveMedia("youtube",
    "(min-width: 1024px",
    `<a href="https://youtu.be/udGrXWeJp1Y" target="_blank rel="nooper">Ver video<a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/udGrXWeJp1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/MU61t14apbeQx8739" target="_blank rel="nooper">Ver mapa<a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.5550850242404!2d-73.63276333825245!3d4.123054676878637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e1509310d3f%3A0x2995d76794750a76!2sFerreteria%20La%20Esperanza!5e0!3m2!1ses!2sco!4v1656560898207!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e)=>{
    shortcus(e);
    moveBall(e,".ball",".stage")
});

modoOscuro(".dark-theme-btn","dark-mode","dark-mode-stage","dark-mode-ball"); //Lo sacamos del evento DomContentLoaded por que 
                                                                        //en la funcion que importamos se esta utilizando, y no se pueden llamar dos eventos iguales
                                                                        //se cancelarian

//NOTA IMPORTANTE: cuando utilizo querySelector se tiene que escificar que tipo de elemento es, si es una clase "."
//si es un id #