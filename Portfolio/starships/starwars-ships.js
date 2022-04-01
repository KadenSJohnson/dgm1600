import { starships } from "../data/starships.js"
import { removeChildren, getLastNumber } from "../utils/index.js"


const nav = document.querySelector('.nav')
const navlist = document.querySelector('.navlist')
const shipview = document.querySelector('.shipview')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const closeBackGround = document.querySelector('.modal-background')
const shipMessage = document.querySelector('.shipMessage')

closeButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
})

closeBackGround.addEventListener('click', () => {
    modal.classList.toggle('is-active')
})

function populateNav() {
    starships.forEach((starship) => {
        let anchor = document.createElement('a')
        anchor.href = '#'
        anchor.textContent = starship.name
        const listItem = document.createElement('li')
        


        anchor.addEventListener('click', () => populateShipView(starship))
        anchor.appendChild(listItem)
        navlist.appendChild(anchor)
    })
}

populateNav()

function populateShipView(shipData) {
    removeChildren(shipview) 
    const shipImg = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    shipImg.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    
    shipImg.addEventListener('error', () => {
        shipImg.hidden = true
        modal.classList.toggle('is-active')
        shipMessage.textContent = `${shipData.name} isn't here at the moment `
    })

    shipview.appendChild(shipImg)
}