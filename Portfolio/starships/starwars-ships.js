import { starships } from "../data/starships.js"


const nav = document.querySelector('.nav')
const navlist = document.querySelector('.navlist')
const shipview = document.querySelector('.shipview')

function populateNav() {
    starships.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        const listItem = document.createElement('li')
        listItem.textContent = starship.name


        anchorWrap.addEventListener('click', () => populateShipView(starship))
        anchorWrap.appendChild(listItem)
        navlist.appendChild(anchorWrap)
    })
}

populateNav()

function populateShipView() {
    console.log('thanks for clicking', shipData.name)
}