import { people } from '../data/people.js'

const header = document.querySelector('header')
const main = document.querySelector('main')


const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function (event) {
    
  populateDOM()
})
header.appendChild(allCharsButton)

function populateDOM() {
    console.log(people)
}

