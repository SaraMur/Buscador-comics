const botonBuscar = document.querySelector("#boton-buscar")
const personajes = document.querySelector("#rootCard")
const paginaPrevia = document.querySelector("#prev")
const paginaSiguiente = document.querySelector("#next")

let paginaPresente = 1
const obtenerDataPersonajes = () =>{
    fetch(`https:rickandmortyapi.com/api/character?page=${paginaPresente}`)
    .then((res) => res.json())
    .then((data) => {
     cardsPersonajes(data.results)
})

} 


//BOTON BUSCAR
botonBuscar.onclick = () =>{
    botonBuscar.classList.add("is-loading")
};


//EPISODIOS



//PERSONAJES

obtenerDataPersonajes()

const cardsPersonajes = (data) => {

    const html = data.reduce((acc, curr) => {
       return acc + `
        <article class = "cards-personajes">
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
    obtenerDataPersonajes()
}

paginaPrevia.onclick = () => {
    paginaPresente = paginaPresente - 1
    obtenerDataPersonajes()
}