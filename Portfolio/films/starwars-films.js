"use strict";

import { films } from "../data/films.js";



function getLastNumber(url) {
  const secondToLastLetterOfUrl = url[url.length - 2];
  return secondToLastLetterOfUrl;
}

let filmList = document.querySelector("#filmlist");
let i;
for (i = 0; i < films.length; i++) {
  
}


let figure = document.createElement("figure");
let figImage = document.createElement("img");
let figCaption = document.createElement("figcaption");

let filmNum = getLastNumber(films[i].url);

figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`;

figCaption.textContent = films[i].title;

figure.appendChild(figImage);
figure.appendChild(figCaption);

filmList.appendChild(figure);
