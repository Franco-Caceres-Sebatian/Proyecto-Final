
//   apis 
// https://rickandmortyapi.com/api
// https://rickandmortyapi.com/api/character

const API_BASE = "https://rickandmortyapi.com/api"
const API_CHARACTERS = "https://rickandmortyapi.com/api/character"

const llamadaAPI = fetch(API_CHARACTERS)

llamadaAPI
    .then((data) => {
        return data.json();
    })

    .then((data) => {
        const $conteiner = document.getElementById("div-conteinerApi")
        const character = data.results;
        console.log(data.results);
        for (let i = 0; i < character.length; i++) {
            $conteiner.innerHTML += `
            div class = "conteiner-2">
        <img class = "img-4"
        src=${character[i].image}
        alt= "imagen de personaje"
        />
        <h2>${character[i].name}</h2>
        <p>Gender:${character[i].gender} </p>
        <p>Species:${character[i].species} </p> 
        <p>Status:${character[i].status} </p> 
        <p>Origin:${character[i].origin.name} </p> 
        </div>
        `
        }
    })

function redireccion1() {
    location.href = "https://rickymortylatino.com/pepinillo-rick-3x03/"
}

function redireccion2() {
    location.href = "https://rickymortylatino.com/los-recuerdos-de-morty-3x08/"

}

function redireccion3() {
    location.href = "https://rickymortylatino.com/el-episodio-del-tanque-de-acido-4x08/"
}

function redireccion4() {
    location.href = "https://rickymortylatino.com/"
}

