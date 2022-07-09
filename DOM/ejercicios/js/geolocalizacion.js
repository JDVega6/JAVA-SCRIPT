const d = document,
 n = navigator;

export default function getGeoLocation(id){
const $id =d.getElementById(id),
options = {
    enableHighAccurancy:true,
    timeout:5000,
    maximumAge:0
};

const success  = (position) =>{
    let coords = position.coords;
    // console.log(position)

    $id.innerHTML=`<p>Latitud: ${coords.latitude}</p>
    <p>Longitud: ${coords.longitude}</p>
    <p>Exactitud: ${coords.accuracy} metros</p>
    <a href="https://www.google.es/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="nooper">Ver mapa</a>`
}

const error = (err)=>{
    console.log(err)
}

n.geolocation.getCurrentPosition(success,error,options)

};