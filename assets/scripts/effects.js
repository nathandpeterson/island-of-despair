'use strict'

function corpses(){
  dialogue.textContent = `You found watery corpses and spoiled food.
  The ship has been slowly sinking for ${date.textContent}`
  dialogueImage.innerHTML = `<img class='animated shake' src="assets/images/sunken-pirate.jpg">`
}

function fallThroughWood(){
  dialogue.textContent = `You fell through some rotted wood and hurt your leg. -5 Health`
  dialogueImage.innerHTML = `<img class='animated bounce' src='assets/images/hole.png'>`
  health -= 5
}

function findAle(){
  dialogue.textContent = `You found a cask of ale. +5 Food!`
  dialogueImage.innerHTML = `<img class='animated tada' src='assets/images/cask.png'>`
  food += 5
  shipItems.food -= 5
}

function findBiscuit(){
  dialogue.textContent = `You found a sack of biscuit. +5 Food!`
  dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/biscuit.png'>`
  food += 5
  shipItems.food -=5
}

function findDriedFruit(){
  dialogue.textContent = `You found some dried fruit! + 5 Food!`
  dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/fruit.png'>`
  food += 5
  shipItems.food -= 5
}

function findGold(){
  dialogue.textContent = `You found some gold doubloons! + 100 gold!`
  dialogueImage.innerHTML = `<img class='animated fadeInUpBig' src='assets/images/gold.png'>`
  inventory.gold += 100
  shipItems.gold -= 100
  inventoryDisplay.innerHTML += `<td>Gold</td><td id="gold-quantity" class="inventory-data">${inventory.gold}</td>`
}

function findHatchet() {
  dialogue.textContent = `You found a hatchet!`
  inventory.hatchet = true
  inventoryDisplay.innerHTML += `<tr><td>Hatchet</td><td>1</td></tr>`
  dialogueImage.innerHTML = `<img class='animated flipInX' src='assets/images/axe.png'>`
  updateState()
}

function findLumber(){
  inventory.lumber += 100
  shipItems.lumber -= 100
  if(inventory.lumber === 100){
    dialogue.textContent = `You found some wood! + 100 Lumber!`
    dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/lumber.png'>`
    inventoryDisplay.innerHTML += `<tr><td>Lumber</td><td id="lumber-quantity" class='inventory-data'>${inventory.lumber}</td></tr>`
  }
}

function findMusket(){
  inventoryDisplay.innerHTML += `<td>Musket</td><td>1</td>`
  inventory.shot += 10
  dialogue.textContent = `You found a musket and some shot!`
  dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/musket.png'>`
  inventoryDisplay.innerHTML += `<td>Shot</td><td id='shot-quantity' class='inventory-data'>${inventory.shot}</td>`
  inventory.musket = true
  updateState()
}

function findPotatoes(){
  dialogue.textContent = `You found a barrel of potatoes. +10 Food!`
  dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/potatoes.png'>`
  food += 5
  shipItems.food -=5
}

function findSeeds (){
  dialogue.textContent = `You found some seeds. +10 Seeds!`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src='assets/images/seeds.png'>`
  inventoryDisplay.innerHTML += `<tr><td >Seeds</td><td id='seed-quantity' class='inventory-data'>10</td></tr>`
  seedQuantity = document.querySelector('#seed-quantity')
  inventory.seeds += 10
  updateState()
}

function findTools(){
  dialogue.textContent = `You found some carpenty tools!`
  dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/carpentry.png'>`
  inventoryDisplay.innerHTML += `<tr><td>Tools</td><td>1</td></tr>`
  inventory.carpentyTools = true
  shipItems.carpentyTools -= 1
  updateState();
}

function goatsEatFood(){
  dialogue.textContent = `While you were out exploring the island, goats came and ate some of your provisions. -5 Food`
  dialogueImage.innerHTML = `<img src="assets/images/happyGoat.png">`
  food -= 5
}

function nothing(){
  dialogue.textContent = `The island seems far more forbidding than when you first arrived...`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/rocky.png">`
}

function rain() {
  dialogue.textContent = `You got rained on and caught a bad cold. -5 Health`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/rain.png">`
  health -= 5
}

function shoreBoats(){
  dialogue.textContent = `It seems like you can see some ships on the horizon. Or is it just a mirage?`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/horizon.png">`
}

function shoreFood(){
  dialogue.textContent = `You caught a crab! Too bad you're going to have to eat it raw...`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/crab.png">`
  food += 5
}

function shoreGold(){
  dialogue.textContent = `You found some gold coins on the beach! I hope nobody comes looking for them. +100 Gold`
  dialogueImage.innerHTML = `<img src="assets/images/beach-gold.png">`
  inventory.gold += 50
  updateInventory('gold-quantity', 50)
}

function sinkShip(){
  function removeShip(){
    leftCol.firstElementChild.remove()
    islandState.shipStatus = false
  }
  if(islandState.shipStatus === true){
    dialogueImage.innerHTML = `<img class='animated fadeOutDown' src="assets/images/pirate-ship-sinking.jpg">`
    dialogue.textContent = `Sadly, the ship sank to the bottom of the ocean...`
    window.setTimeout(removeShip, 2000)
  }
}

function trees(){
  dialogue.textContent = `You found a beautiful wooded area.`
  if(inventory.hatchet){
    dialogue.innerHTML += `<h3>Want to chop down some trees?</h3>
    <button class="btn btn-secondary btn-lg btn-block" id="chop">CHOP</button>`
  let chop = document.querySelector('#chop')
  chop.addEventListener('click', function(){
    dialogue.textContent = `You got some lumber. +10 Lumber`
    dialogueImage.innerHTML = `<img src='assets/images/lumber.png'>`
    inventory.lumber += 10
    updateInventory('lumber-quantity', 10)
    })
  }
  dialogueImage.innerHTML = `<img src="assets/images/trees.png">`
}

function wildBerries(){
  dialogue.textContent = `You found some wild berries! +5 FOOD!`
  dialogueImage.innerHTML = `<img src="assets/images/berries.png">`
  food += 5
}
