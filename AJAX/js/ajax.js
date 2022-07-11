//*****************************************XMLHttpRequest ************************************************

(()=>{
    const xhr = new XMLHttpRequest(),//Se crea la instancia que nos permite acceder a las apis
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();//Se crea un "fragment" para que no se sature la pagina

    // console.log("toy ajuera",xhr)
    
    //Se agregan los eventos
    xhr.addEventListener("readystatechange", (e)=>{

        if(xhr.readyState !== 4)return;
        // console.log(xhr)
        if(xhr.status >= 200 && xhr.status < 300){
            // console.log("éxito")
            // console.log(xhr.responseText)

            let json = JSON.parse(xhr.responseText);
            // console.log("json",json);

            json.forEach( el => {
                const $li =document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.company.name}`
                $fragment.appendChild($li)
            });

            $xhr.appendChild($fragment)

        }else{
            console.log("error")
            let message = xhr.statusText || "ocurrio un error";
            $xhr.innerHTML = `error ${xhr.status}: ${message}`
        }

    }); //El evento "readystetechange" se lanza cuando detecta los cambios de estado TODOS

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");//Se abre la peticion se establece el metodo por el cual se abrira la petición

    xhr.send();//SE envia la peticion
})();

//********************************************************fetch************************************** */
(()=>{
    
    $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();//Se crea un "fragment" para que no se sature la pagina

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        // console.log("res",res);
        //Se hace un operador ternario por que el "fetch" nos manda una respuesta de que se conecto bien a el servidor, lo traemos con "res.ok" y hacemos la operacion
        return res.ok?res.json():Promise.reject(res)//por que recibimos un JSON y para poderlo pasar a lenguaje js se ejecuta el "res.json"
    })
    .then(json =>{
        // console.log(json)
        json.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        })
        // console.log($fragment)
        $fetch.appendChild($fragment)
    })
   
    .catch((err)=>{
        console.log(err)
        let message = err.statusText || "ocurrio un error";
        $fetch.innerHTML = `error ${err.status}: ${message}`
    })
    .finally(()=>{
        // console.log("Esto se ejecutara independientemente del resultado de la promesa fetch")
    })


})();

//*******************************************************fetch whit async********************************* */
(()=>{
    $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();//Se crea un "fragment" para que no se sature la pagina

    async function getData(){
//el "await" tambien puede utilizarse en variables 
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            if(!res.ok) throw{
                status: res.status, 
                statusText: res.statusText
            };

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            // console.log($fragment)
            $fetchAsync.appendChild($fragment)

            // console.log("res",res,"json",json)
        } catch (err) {
            console.log(err)
            let message = err.statusText || "ocurrio un error";
        $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        }finally{

        }    
    }
    getData();
})();

// **************************************************AXIOS***************************************************
(()=>{
    $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();//Se crea un "fragment" para que no se sature la pagina

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        // console.log(res.data);
       
        
        res.data.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        })
        // console.log($fragment)
        $axios.appendChild($fragment)
    })
    .catch(err => {
        console.log("estamos en el catch axios",err.response);
        let message = err.response.statusText || "ocurrio un error";
        $axios.innerHTML = `error ${err.response.status}: ${message}`
    })
    .finally();
})();

// ****************************************AXIOS + Async****************************************************
(()=>{
    $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();//Se crea un "fragment" para que no se sature la pagina

    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");

            res.data.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            // console.log($fragment)
            $axiosAsync.appendChild($fragment)  
            
        } catch (err) {
            console.log("estamos en el catch axiosAsync",err.response);
            let message = err.response.statusText || "ocurrio un error";
            $axiosAsync.innerHTML = `error ${err.response.status}: ${message}`
        }
    }
    getData()
})();