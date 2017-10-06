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
  inventoryHide = false
}

function findHatchet() {
  dialogue.textContent = `You found a hatchet!`
  inventory.hatchet = true
  inventoryDisplay.innerHTML += `<tr><td>Hatchet</td><td>1</td></tr>`
  inventoryHide = false
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
    inventoryHide = false
  }
}

function findMusket(){
  inventoryDisplay.innerHTML += `<td>Musket</td><td>1</td>`
  inventory.shot += 10
  dialogue.textContent = `You found a musket and some shot!`
  dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/musket.png'>`
  inventoryDisplay.innerHTML += `<td>Shot</td><td id='shot-quantity' class='inventory-data'>${inventory.shot}</td>`
  inventory.musket = true
  inventoryHide = false
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
  inventoryHide = false
  inventory.seeds += 10
  updateState()
}

function findTools(){
  dialogue.textContent = `You found some carpenty tools!`
  dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/carpentry.png'>`
  inventoryDisplay.innerHTML += `<tr><td>Tools</td><td>1</td></tr>`
  inventoryHide = false
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
  dialogue.textContent = `The island seems more sinister than you first thought.`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/rocky.png">`
}

function piratesArrive(){
  dialogue.textContent = `You found some pirates on the beach!`
  dialogueImage.innerHTML = `<img class="animated tada" src="assets/images/pirates-with-treasure.png">`
  if(inventory.shot > 0){
    dialogue.innerHTML += `<h3>Want to take a shot?</h3>
    <button class="btn btn-secondary btn-lg btn-block" id="shoot">SHOOT</button>`
  shoot = document.querySelector('#shoot')
  shoot.addEventListener('click', function(){
    piratesShot()
    })
      } else {
  dialogue.textContent += `Too bad you're out of shot!`
      }
}
function piratesShot(){
  inventory.shot -= 1
  updateInventory('shot-quantity', -1)
  dialogue.textContent = `You hit a pirate and the remaining pirates chased you back to your fort.`
  if(islandState.fortStrength >= 200){
    dialogueImage.innerHTML = `<img class="animated tada" src="assets/images/fortress.png">`
    dialogue.textContent += ` Good thing you improved your fort.`
    if(inventory.shot > 0){
      dialogue.textContent += `Do you want to take another shot?`
      dialogue.innerHTML += `<button class="btn btn-secondary btn-lg btn-block" id="shoot">SHOOT</button>`
      shoot = document.querySelector('#shoot')
      shoot.addEventListener('click', function(){
        inventory.shot -= 1
        updateInventory('shot-quantity', -1)
        winGame()
    })
  }
  } else {
    dialogue.textContent = `The pirates broke down the walls of your fort and killed you!`
    dialogueImage.innerHTML = `<img class="animated tada" src="assets/images/pirate-death.png">`
    window.setTimeout(gameOver, 3000)
  }
}

function rain() {
  dialogue.textContent = `You got rained on and caught a bad cold. -5 Health`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/rain.png">`
  health -= 5
}

function ramble(){
  dialogue.textContent = `Your memories of home are hazy and faded...`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/mist.png">`
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
  inventory.gold += 100
  updateInventory('gold-quantity', 100)
}

function shoreSeeds(){
  dialogue.textContent = `You found some kind of seeds on the beach! I wonder what they are... +10 Seeds`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/seeds.png">`
  inventory.seeds += 10
  updateInventory('seed-quantity', 10)
}

function sinkShip(){
    dialogueImage.innerHTML = `<img class='animated fadeOutDown' src="assets/images/pirate-ship-sinking.jpg">`
    dialogue.textContent = `Sadly, the ship sank to the bottom of the ocean...`
    leftCol.firstElementChild.remove()
    islandState.shipStatus = false
}

function spider(){
  dialogue.textContent = `Ouch! You got bit by a spider! -3 Health`
  dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/spider.png">`
  health -= 3
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
    inventoryHide = false
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

function winGame(){
  dialogue.textContent = `You killed the pirates and stole their ship! Now you can sail back home with all your loot. You have ${inventory.gold} gold doubloons!`
  dialogueImage.innerHTML = `<img src="assets/images/winner.png">`
}
