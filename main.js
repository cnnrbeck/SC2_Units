import { units } from './units.js'


let mainArea = document.querySelector('main')
let buttonDiv = document.createElement('div')
let infoDiv = document.createElement('div')

buttonDiv.className = "buttonDiv"
infoDiv.className = "infoDiv"

function createButton(name)
{
    let button = document.createElement('button')
    button.textContent = name

    button.className = name + "Button"

    buttonDiv.appendChild(button)
}

createButton("Zerg")
createButton("Protoss")
createButton("Terran")

mainArea.appendChild(buttonDiv)


units.forEach(function(unit) {

    let unitDiv = document.createElement('div')
    let unitName = document.createElement('h2')
    let unitCost = document.createElement('h3')
    let unitAbilities = document.createElement('h3')
    let pic = document.createElement('img')

        
    unitDiv.className = "unitDiv"

    unitName.textContent = unit.name
    unitCost.textContent = unit.cost
    unitAbilities.textContent = unit.abilities

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
    // unitDiv.appendChild(unitCost)
    // unitDiv.appendChild(unitAbilities)

    infoDiv.appendChild(unitDiv)
})


mainArea.appendChild(infoDiv)