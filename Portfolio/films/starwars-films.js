console.log('Hello Console!')

let newimage = document.createElement('img')

newimage.src = 'https://starwars-visualguide.com/assets/img/films/6.jpg'

let filmlist = document.querySelector('#filmlist') 

filmlist.appendChild(newimage)
