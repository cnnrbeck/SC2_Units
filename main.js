import { units } from './units.js'


let mainArea = document.querySelector('main')
let buttonDiv = document.createElement('div')
let infoDiv = document.createElement('div')

buttonDiv.className = "buttonDiv"
infoDiv.className = "infoDiv"

//Creating the buttons and adding them to the div
function createButton(name)
{
    let button = document.createElement('button')
    button.name = name + "Button"
    button.textContent = name
    button.className = name + "Button"

    buttonDiv.appendChild(button)
}

createButton("Zerg")
createButton("Protoss")
createButton("Terran")

mainArea.appendChild(buttonDiv)

//Filling the info Div with Unit information
units.forEach(function(unit) {

    let unitDiv = document.createElement('div')
    let unitName = document.createElement('h2')
    let unitCost = document.createElement('h3')
    let unitAbilities = document.createElement('h3')
    let unitRace = document.createElement('h3')
    let pic = document.createElement('img')

        
    unitDiv.className = "unitDiv"

    unitName.textContent = unit.name
    unitCost.textContent = unit.cost
    unitAbilities.textContent = unit.abilities
    unitRace.textContent = unit.race

    if(unit.race === "Zerg")
    {
        unitDiv.id = "zergUnit"
    }
    else if(unit.race === "Protoss")
    {
        unitDiv.id = "protossUnit"
    }
    else {
        unitDiv.id = "terranUnit"
    }

    pic.src = unit.img

    unitDiv.appendChild(pic)
    unitDiv.appendChild(unitName)

    infoDiv.appendChild(unitDiv)
})

mainArea.appendChild(infoDiv)

const allDivs = Array.from(infoDiv.querySelectorAll('div'))
const zerg = units.filter(unit => unit.race === 'Zerg')
const protoss = units.filter(unit => unit.race === 'Protoss')
const terran = units.filter(unit => unit.race === 'Terran')

//Button Visibility Events
let zergButton = document.getElementsByName("ZergButton")
let protossButton = document.getElementsByName("ProtossButton")
let terranButton = document.getElementsByName("TerranButton")
zergButton[0].addEventListener('click', () => {
    let i = 0
    zerg.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "zergUnit")
        matchedDiv[i].setAttribute("style", "display: visible")
        i++
    })
    i = 0
    protoss.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "protossUnit")
        matchedDiv[i].setAttribute("style", "display:none")
        i++
    })
    i = 0
    terran.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "terranUnit")
        matchedDiv[i].setAttribute("style", "display:none")
        i++
    })
    zergButton[0].style.outline = "solid"
    protossButton[0].style.outline = "none"
    terranButton[0].style.outline = "none"
})

protossButton[0].addEventListener('click', () => {
    let i = 0
    protoss.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "protossUnit")
        matchedDiv[i].setAttribute("style", "display: visible")
        i++
    })
    i = 0
    zerg.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "zergUnit")
        matchedDiv[i].setAttribute("style", "display:none")
        i++
    })
    i = 0
    terran.forEach(elt => {
        let matchedDiv = allDivs.filter(element => element.id === "terranUnit")
        matchedDiv[i].setAttribute("style", "display:none")
        i++
    })
    zergButton[0].style.outline = "none"
    protossButton[0].style.outline = "solid"
    terranButton[0].style.outline = "none"
})

