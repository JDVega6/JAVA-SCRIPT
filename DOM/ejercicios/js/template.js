const d =document;

export default function drawTemplates(idT,estilo){
    const $template = d.getElementById(idT).content,
    $fragment = d.createDocumentFragment(),
    $jsonData = new XMLHttpRequest();

    $jsonData.open("GET",`../assets/figures.json`,true)
    console.log($jsonData);
}