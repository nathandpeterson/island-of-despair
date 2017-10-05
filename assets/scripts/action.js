'use strict'
function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function corpses(){
  dialogue.textContent = `You found watery corpses and spoiled food.
  The ship has been slowly sinking for ${date.textContent}`
  dialogueImage.innerHTML = `<img class='animated shake' src="assets/images/sunken-pirate.jpg">`
}

function goatsEatFood(){
  dialogue.textContent = `While you were out exploring the island, goats came and ate some of your provisions. -5 Food`
  dialogueImage.innerHTML = `<img src="assets/images/happyGoat.png">`
  food -= 5
}

function nothing(){
  dialogue.textContent = `You are less impressed by the beauty of the island...`
  dialogueImage.innerHTML = `<img src="assets/images/rocky.png">`
}

function rain() {
  dialogue.textContent = `You got rained on and caught a bad cold. -5 Health`
  dialogueImage.innerHTML = `<img src="assets/images/rain.png">`
  health -= 5
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
    lumber.textContent = inventory.lumber
  })
  }
  dialogueImage.innerHTML = `<img src="assets/images/trees.png">`
}

function wildBerries(){
  dialogue.textContent = `You found some wild berries! +5 FOOD!`
  dialogueImage.innerHTML = `<img src="assets/images/berries.png">`
  food += 5
}

function sinkShip(){
  dialogueImage.innerHTML = `<img class='animated fadeOutDown' src="assets/images/pirate-ship-sinking.jpg">`
  dialogue.textContent = `Sadly, the ship sank to the bottom of the ocean...`
  leftCol.firstElementChild.remove()
}

function exploreShip(){
  let success = randomizer()
  inventoryWrapper.style.display = 'block'
  shipItems.timesVisited += 1
  if(shipItems.timesVisited > 15){
    dialogueImage.innerHTML = `<img src="assets/images/pirate-ship-sinking.jpg">`
    dialogue.textContent = `Unfortunately, the ship sank to the bottom of the ocean...`
    window.setTimeout(sinkShip, 2000)
    islandState.shipStatus = false
  } else if(shipItems.timesVisited === 1){
    dialogue.textContent = `You found some seeds. +10 Seeds!`
    dialogueImage.innerHTML = `<img class="animated fadeIn" src='assets/images/seeds.png'>`
    inventoryDisplay.innerHTML += `<tr><td >Seeds</td><td id='seed-quantity'>10</td></tr>`
    seedQuantity = document.querySelector('#seed-quantity')
    inventory.seeds += 10
    updateState()
  } else if (success <= 10) {
    if(shipItems.food >= 60) {
      dialogue.textContent = `You found a barrel of potatoes. +10 Food!`
      dialogueImage.innerHTML = `<img class='animated flipInX' src='assets/images/potatoes.png'>`
      food += 5
      shipItems.food -=5
    } else {
      corpses()
    }
  } else if (success <= 20) {
    if(shipItems.food > 5) {
      dialogue.textContent = `You found a sack of biscuit. +5 Food!`
      dialogueImage.innerHTML = `<img class='animated flipInX' src='assets/images/biscuit.png'>`
      food += 5
      shipItems.food -=5
    } else {
      corpses()
    }
  } else if (success <= 30) {
      dialogue.textContent = `You fell through some rotted wood and hurt your leg. -5 Health`
      dialogueImage.innerHTML = `<img class='animated bounce' src='assets/images/hole.png'>`
      health -= 5
  } else if (success <= 40) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found a cask of ale. +5 Food!`
      dialogueImage.innerHTML = `<img class='animated tada' src='assets/images/cask.png'>`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 50) {
    if(inventory.hatchet === false){
      dialogue.textContent = `You found a hatchet!`
      inventory.hatchet = true
      inventoryDisplay.innerHTML += `<tr><td>Hatchet</td><td>1</td></tr>`
      dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/axe.png'>`
      updateState()
    } else {
      corpses()
    }
  } else if (success <= 60) {
    if (shipItems.carpentyTools > 0){
      dialogue.textContent = `You found some carpenty tools!`
      dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/carpentry.png'>`
      inventory.carpentyTools = true
      shipItems.carpentyTools -= 1
      updateState();
    } else {
      corpses()
    }
  } else if (success <= 70) {
    if (shipItems.gold > 0){
      dialogue.textContent = `You found some gold doubloons! + 100 gold!`
      dialogueImage.innerHTML = `<img class='animated rubberBand' src='assets/images/gold.png'>`
      inventory.gold += 100
      shipItems.gold -= 100
      inventoryDisplay.innerHTML += `<td>Gold</td><td>${inventory.gold}</td>`
    } else {
      corpses()
    }
  } else if (success <= 80) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found some dried fruit! + 5 Food!`
      dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/fruit.png'>`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 90) {
    if (shipItems.lumber > 15){
      inventory.lumber += 25
      shipItems.lumber -= 25
      if(inventory.lumber === 25){
        dialogue.textContent = `You found some wood! + 25 Lumber!`
        dialogueImage.innerHTML = `<img class='animated flipInX' src='assets/images/lumber.png'>`
          inventoryDisplay.innerHTML += `<tr><td>Lumber</td><td id="lumberQuantity">${inventory.lumber}</td></tr>`
      lumber = document.querySelector('#lumberQuantity')
      }
    } else {
      corpses()
    }
  } else if (success <= 100) {
      if(inventory.musket === false){
      inventoryDisplay.innerHTML += `<td>Musket</td><td>1</td>`
      inventory.shot += 10
      dialogue.textContent = `You found a musket and some shot!`
      dialogueImage.innerHTML = `<img class='animated flipInY' src='assets/images/musket.png'>`
      inventoryDisplay.innerHTML += `<td>Shot</td><td id='shotQuantity'>${inventory.shot}</td>`
      shotQuantity = document.querySelector('#shotQuantity')
      inventory.musket = true
      updateState()
    } else {
      corpses()
    }
  }
}

function exploreIsland(){
  let success = randomizer()
  if(success <= 10){
    trees()
  } else if (success <= 20){
    rain()
  } else if (success <= 30){
    nothing()
  } else if (success <= 50) {
    wildBerries()
  } else if (success <= 70){
    goatsEatFood()
  } else if (success <= 100){
    nothing()
  }
}

function findFood() {
  function reduceShot(){
    inventory.shot -= 1
    shotQuantity.textContent = Number(shotQuantity.textContent) - 1
  }
  this.goats = function(){
    let success = randomizer();
    if (inventory.shot === 0){
      dialogue.textContent = `You are out of shot`
      dialogueImage.innerHTML = ``
      updateState()
    }
    else if (islandState.goats === 0){
      dialogue.textContent = "There are no more goats on the island."
      dialogueImage.innerHTML = `<img src="assets/images/tropical-island.jpg">`
    } else if (success > 50 && islandState.goats > 0){
      food += 10
      islandState.goats -= 1
      dialogueImage.innerHTML = `<img src='assets/images/goat.jpg'>`
      dialogue.textContent = `You killed a goat! +10 FOOD!`
      reduceShot()
    } else {
      dialogue.textContent = `You couldn't catch the goat...`
      dialogueImage.innerHTML = `<img src='assets/images/goat-running-cristian-grecu.jpg'>`
      reduceShot()
    }
  }
  this.fish = function(){
    let success = randomizer();
    if (success > (75-fishingSkill)) {
      food += 3;
      fishingSkill += 1;
      dialogue.textContent =  "You caught a fish."
    } else {
      dialogue.textContent =  "You couldn't catch anything."
    }
  }
}

function planting() {
  this.seeds = function(){
    if(inventory.seeds >= 10){
      dialogue.textContent = "You planted some seeds. I wonder if they will grow..."
      dialogueImage.innerHTML = `<img class="animated fadeIn" src="assets/images/hand-seeds.png">`
      seedQuantity.innerHTML = Number(seedQuantity.innerHTML) - 10
      inventory.seeds -= 10
      seedMonth = currentMonth
      clearInterval(seedTimer)
      seedTimer = window.setTimeout(function() {
        plant.reap(seedMonth)
      }, 6000)
    } else {
      dialogue.textContent = "You don't have enough seeds right now."
      dialogueImage.innerHTML = `<img src="assets/images/dirt.jpg">`
    }
  };
  this.reap = function(month){
    function harvest(){

    }

    if(month === 7){
      food += 30
      dialogue.textContent = "Your seeds grew into plants..."
      dialogueImage.innerHTML = `<img src="assets/images/dirt.jpg">`
      console.log('planted in feb')
    } else if (month === (8||9)){
      console.log('planted in march or april')
    } else if(month === (10||11)){
      console.log('planted in may or june')
    } else {
      console.log('planted in the wrong season', month)
    }
  };
}

function fortress() {
  this.build = function build(){
    inventory.lumber -= 100
    dialogue.textContent = "You built a fort, but you might want to fortify it."
    dialogueImage.innerHTML = `<img src='assets/images/stick-fort.jpg'>`
    islandState.fort = true
    updateState()
  };
  this.improve = function fortify(){
    inventory.lumber -= 100;
    inventory.fortStrength += 10;
    dialogue.textContent = "You improved your fort"
    dialogueImage.innerHTML = `<img src='assets/images/stick-fort.jpg'>`
  };
}


let find = new findFood()
let plant = new planting()
let fort = new fortress()
