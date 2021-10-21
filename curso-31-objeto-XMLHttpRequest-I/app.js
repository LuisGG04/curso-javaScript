/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById("button");

button.addEventListener("click", () => {
    let xhr
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

    xhr.addEventListener("load", (data) => {
        
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById("list")

        const fragment = document.createDocumentFragment()

        for(const userData of dataJSON){
            const itemList = document.createElement("li")
            itemList.textContent = `${userData.id} - ${userData.name}`
            fragment.appendChild(itemList)
        }

        list.appendChild(fragment)
    })

    xhr.send()
});