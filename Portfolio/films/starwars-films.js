
import { films } from '../data/films.js';
import {getLastNumber} from '../utils/index.js'


let filmList = document.querySelector('#filmlist')

for (let i = 0; i < films.length; i++) {

function movieinfo() {
    return films.map(film => {
        return {
            director: film.director,
            producer: film.producer,
            release_date: film.release_date
        }
    })
}


let figure = document.createElement("figure")
figure.addEventListener("click", () =>
    figure.classList.toggle("popped") //add a way to annimate other information
    );
let figImage = document.createElement("img")
let additionalInfo = document.createElement('p')
let figCaption = document.createElement("figcaption")

let filmNum = getLastNumber(films[i].url)

figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

figCaption.textContent = films[i].title

additionalInfo.innerHTML = 

figure.appendChild(figImage)
figure.appendChild(figCaption)
figure.appendChild(additionalInfo)
filmList.appendChild(figure)
}