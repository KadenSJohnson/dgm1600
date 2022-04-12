import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js"
import { removeChildren } from "../utils/index.js";


const allCongressMembers = [...senators, ...representatives]

const senatorDiv = document.querySelector('.senatorsDiv')
const repsDiv = document.querySelector('.repsDiv')
const seniorityHead = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
const vacationerList = document.querySelector('.vacationerList')
const senatorButton = document.createElement('button')
const repButton = document.createElement('button')
const header = document.querySelector('header')


senatorButton.textContent = 'Senators'
senatorButton.addEventListener('click',function (){
  populateSenatorDiv(simpleSenators)})

  repButton.textContent = 'Representatives'
  repButton.addEventListener('click',function (){
    populateRepsDiv(simpleReps)})
  


    //Reps array function
    function simplifiedReps() {
      return representatives.map(representative => {
        const middleName = representative.middle_name ? ` ${representative.middle_name} ` : ``
        return {
          id: representative.id,
          name: `${representative.first_name}${middleName}${representative.last_name}`,
          imgURL: `https://www.govtrack.us/static/legislator-photos/${representative.govtrack_id}-200px.jpeg`,
          gender: representative.gender

        }
      })
    }
    

    const simpleReps = simplifiedReps()

   

//senators array function
function simplifiedSenators() {
    return senators.map(senator => {
      const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
      return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        gender: senator.gender,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        seniority: +senator.seniority,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct
      }
    })
  }

  const simpleSenators = simplifiedSenators()

//populate dom with senators
function populateSenatorDiv(senatorArray) {
  removeChildren(senatorDiv)
  removeChildren(repsDiv)
    senatorArray.forEach(senator => {
        const senFig = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFig.appendChild(figImg)
        senFig.appendChild(figCaption)
        senatorDiv.appendChild(senFig)

    })
}


function populateRepsDiv(simpleReps) {
  removeChildren(repsDiv)
  removeChildren(senatorDiv)
  simpleReps.forEach(representative => {
    const repFigure = document.createElement('figure')
    const repImg = document.createElement('img')
    const repCaption = document.createElement('figcaption')

    repImg.src = representative.imgURL
    repCaption.textContent = representative.name

    repFigure.appendChild(repImg)
    repFigure.appendChild(repCaption)
    senatorDiv.appendChild(repFigure)
  })
}





//top of page info
const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator 
})


const biggestMissedVotePct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)
const biggestVacationerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotePct.missedVotesPct).map(senator => senator.name).join(' and ')


seniorityHead.innerHTML = `The most senior memeber fo the senate is <b> ${mostSeniorMember.name}</b>`
vacationerList.innerHTML = `the members who have missed way to often are <b> ${biggestVacationerList} </b>`



const mostLoyal = simplifiedSenators().map(senator => { 
   if (senator.loyaltyPct === 100) {
       let listItem = document.createElement('li')
       listItem.innerHTML = senator.name
       loyaltyList.appendChild(listItem)
   }
})

header.appendChild(senatorButton)
header.appendChild(repButton)