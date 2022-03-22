import { people } from '../data/people.js'

const header = document.querySelector('header')
const main = document.querySelector('main')


const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function () {
    console.log('thanks for clicking',)
  populateDOM()
})
header.appendChild(allCharsButton)

function populateDOM() {

    people.forEach((person) => {
      
    const personFig = document.createElement('figure')
    const personImg = document.createElement('img')
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/1.jpg`
    const personCap = document.createElement('figcaption')
    personCap.textContent = person.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCap)
    main.appendChild(personFig)})
}

function getLastNumber(url) {
  const secondToLastLetterOfUrl = url[url.length -2]
  retrun secondToLastLetterOfUrl
}
