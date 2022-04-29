
import { films } from '../data/films.js';
import {getLastNumber} from '../utils/index.js'


let filmList = document.querySelector('#filmlist')

for (let i = 0; i < films.length; i++) {





let figure = document.createElement("figure")
figure.addEventListener("click", () =>
    figure.classList.toggle("popped") //add a way to annimate other information
    );
let figImage = document.createElement("img")
let additionalInfo = document.createElement('div')
additionalInfo.className = 'info'
let figCaption = document.createElement("figcaption")

let filmNum = getLastNumber(films[i].url)

figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

figCaption.textContent = films[i].title

additionalInfo.innerHTML =  `<h3>Director ${films[i].director},<br> Producer ${films[i].producer} <br> Release Date ${films[i].release_date}</h3>`
figure.addEventListener('click', function() {
    const infostuff = document.getElementsByClassName("info");
    if (infostuff.style.display === none) {
        infostuff.style.display = "block";
    } else {
        infostuff.style.display = "none";
    }
})


figure.appendChild(figImage)
figure.appendChild(figCaption)
figure.appendChild(additionalInfo)
filmList.appendChild(figure)
}