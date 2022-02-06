const botonBuscar = document.querySelector("#search-button")
const personajes = document.querySelector("#rootCard")
const paginaPrevia = document.querySelector("#prev")
const paginaSiguiente = document.querySelector("#next")



let paginaPresente = 1

//Funcion que se ejecuta al cargar la pagina
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
const getCharacterInfo = (id) => {
    const divCardCharacterInfoHidden = document.querySelector("#char_" + `${id}`)
    divCardCharacterInfoHidden.classList.toggle('div-block');
}

const cardsCharacters = (data) => {
    const html = data.reduce((acc, curr) => {
       return acc + `
        <article class="cards-characters" onclick="getCharacterInfo(${curr.id})">
            <img src="${curr.image}">
            <h2>${curr.name}</h2>
            <div id="char_${curr.id}" class="div-hidden">
                <h3 class="curr-info">${curr.gender}</h3>
                <h3 class="curr-info">${curr.origin?.name}</h3>
                <h3 class="curr-info">${curr.status}</h3>
            </div>
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
const sortBy = document.querySelector("#sort-by")

//Funcion que se ejecuta al clickear buscar
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
        const personajes = data.results;
        //Ordenar personajes por Deafault A-Z
        debugger
        if(sortBy.value==='az'){
            personajes.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
        }
        if(sortBy.value==='za'){
            personajes.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
        }



        cardsCharacters(personajes)
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
