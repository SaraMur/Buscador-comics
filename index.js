const botonBuscar = document.querySelector("#search-button")
const personajes = document.querySelector("#rootCard")
const paginaPrevia = document.querySelector("#prev")
const paginaSiguiente = document.querySelector("#next")



let paginaPresente = 1

const getDataCharacters = () =>{
    fetch(`https:rickandmortyapi.com/api/character?page=${paginaPresente}`)
    .then((res) => res.json())
    .then((data) => {
        cardsCharacters(data.results)
})
} 

const obtenerDataEpisodios = () =>{
    fetch(`https:rickandmortyapi.com/api/episode?page=${paginaPresente}`)
    .then((res) => res.json())
    .then((data) => {
     cardsEpisodios(data.results)
})
} 


const obtenerDataUbicacion = () =>{
    fetch(`https://rickandmortyapi.com/api/location?page=${paginaPresente}`)
    .then((res) => res.json())
    .then((data) => {
     cardsUbicacion(data.results)
})
} 


/*************************************************************************** */
//OBTENER DATA AL CARGAR LA PAGINA

getDataCharacters()

const cardsCharacters = (data) => {

    const html = data.reduce((acc, curr) => {
       return acc + `
        <article class = "cards-characters">
        <img src="${curr.image}">
        <h2>${curr.name}</h2>
        </article>
        `
    }, "")
    rootCard.innerHTML = html 
}
 /********************************************************************** */
//BUSQUEDA DE PERSONAJES

const form = document.querySelector("#form")
const inputName = document.querySelector("#input")
const inputSpecies = document.querySelector("#inputSpecies")

const buscarPersonajes = () => {
    const name = inputName.value
    const species = inputSpecies.value
    let url = `https://rickandmortyapi.com/api/character/?`

    if (name !== ""){
        url += `name=${name}&`
    }

    if (species !== "" ){
        url += `species=${species}`
    }

    fetch(url)
    .then(res => res.json())
    .then(data => {
        cardsCharacters(data.results)
    })
}


form.onsubmit = (e) =>{
    e.preventDefault();
    buscarPersonajes()
}

//CONTROLES DE PAGINACION

paginaSiguiente.onclick = () => {
    paginaPresente = paginaPresente + 1
    getDataCharacters()
}

paginaPrevia.onclick = () => {
    paginaPresente = paginaPresente - 1
    getDataCharacters()
}


/**************************************************************************** */
//BOTON BUSCAR
/* botonBuscar.onclick = () =>{
    botonBuscar.classList.add("is-loading")
}; */



/************************************************************************** */
//EPISODIOS
/* obtenerDataEpisodios()

const cardsEpisodios = (data) => {

    const html = data.reduce((acc, curr) => {
       return acc + `
        <article class = "cards-episodios">
        <img src="${curr.image}">
        <h2>${curr.name}</h2>
        </article>
        `
    }, "")
    rootCard.innerHTML = html 
}

//CONTROLES DE PAGINACION

paginaSiguiente.onclick = () => {
    paginaPresente = paginaPresente + 1
    obtenerDataEpisodios()
}

paginaPrevia.onclick = () => {
    paginaPresente = paginaPresente - 1
    obtenerDataEpisodios()
}
 */

/*************************************************************************** */
//UBICACION
/* obtenerDataUbicacion()

const cardsUbicacion = (data) => {

    const html = data.reduce((acc, curr) => {
       return acc + `
        <article class = "cards-ubicacion">
        <img src="${curr.image}">
        <h2>${curr.name}</h2>
        </article>
        `
    }, "")
    rootCard.innerHTML = html 
}
 */
//CONTROLES DE PAGINACION

/* paginaSiguiente.onclick = () => {
    paginaPresente = paginaPresente + 1
    obtenerDataUbicacion()
}

paginaPrevia.onclick = () => {
    paginaPresente = paginaPresente - 1
    obtenerDataUbicacion()
}
 */
/*************************************************************************** */
//MOSTRAR / OCULTAR CARDS

/* if (azPersonajes = checked) {
    cardsCharacters.style.display = 'none';
}else{
    cardsCharacters.style.display = 'block';
}
 */

/*************************************************************************** */


/* const cargarCombo = () => {

    let ordenA = document.createElement("option");
    let ordenZ = document.createElement("option");
    let ordenNew = document.createElement("option");
    let ordenOld = document.createElement("option");


    let textA = document.createTextNode("A/Z");
    let textZ = document.createTextNode("Z/A");
    let textNew = document.createTextNode("Más Nuevos");
    let textOld = document.createTextNode("Más Viejos");

    ordenA.appendChild(textA);
    ordenZ.appendChild(textZ);
    ordenNew.appendChild(textNew);
    ordenOld.appendChild(textOld);

    orden.innerHTML = '';

    orden.appendChild(ordenA);
    orden.appendChild(ordenZ);
    if (tipo.value === 'personajes') {
        orden.appendChild(ordenNew);
        orden.appendChild(ordenOld);
    }

} */



//INPUT URL DE IMAGEN
/* 
const inputBusqueda = document.getElementById('input');


inputBusqueda.addEventListener('keyup', (e) => {
    const src = urlImg.value;
    previewImagePanel.style.backgroundImage = `url('${src}')`;
    previewImagePanel.style.backgroundPosition = 'center';
    previewImagePanel.style.backgroundRepeat = 'no-repeat';
    previewImagePanel.style.backgroundSize = 'cover';
}); */