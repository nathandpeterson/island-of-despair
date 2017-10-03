'use strict'
function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function corpses(){
  dialogue.textContent = `You found watery corpses and spoiled food.
  The ship has been slowly sinking for ${date.textContent}`
}

function exploreShip(){
  let success = randomizer()
  inventoryWrapper.style.display = 'block'
  shipItems.timesVisited += 1
  if (shipItems.timesVisited === 0){
    dialogue.textContent = `You found some seeds. +10 Seeds!`
    dialogueImage.innerHTML = `<img src="assets/images/sunken-pirate.jpg">`
    inventoryDisplay.innerHTML += `<tr><td id='seed-quantity'>Seeds</td><td>10</td></tr>`
    let seedQuantity = document.querySelector('#seed-quantity')
    inventory.seeds += 10
    updateState()
  }
  if(shipItems.timesVisited > 15){
    sinkShip()
    islandState.shipStatus = false
  } else if(success <= 10) {
    if(inventory.seeds < 10) {
      dialogue.textContent = `You found some seeds. +10 Seeds!`
      inventoryDisplay.innerHTML += `<tr><td id='seed-quantity'>Seeds</td><td>10</td></tr>`
      let seedQuantity = document.querySelector('#seed-quantity')
      inventory.seeds += 10
      updateState()
    } else {
      corpses()
    }
  } else if (success <= 20) {
    if(shipItems.food > 5) {
      dialogue.textContent = `You found a sack of biscuit. +5 Food!`
      food += 5
      shipItems.food -=5
    } else {
      corpses()
    }
  } else if (success <= 30) {
      dialogue.textContent = `You fell through some rotted wood and hurt yourself. -5 Health`
      health -= 5
  } else if (success <= 40) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found a cask of ale. +5 Food!`
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
      updateState()
    } else {
      corpses()
    }
  } else if (success <= 60) {
    if (shipItems.carpentyTools > 0){
      dialogue.textContent = `You found some carpenty tools!`
      inventory.carpentyTools = true
      shipItems.carpentyTools -= 1
      updateState();
    } else {
      corpses()
    }
  } else if (success <= 70) {
    if (shipItems.gold > 0){
      dialogue.textContent = `You found some gold doubloons! + 100 gold!`
      inventory.gold += 100
      shipItems.gold -= 100
      inventoryDisplay.innerHTML += `<td>Gold</td><td>${inventory.gold}</td>`
    } else {
      corpses()
    }
  } else if (success <= 80) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found some dried fruit! + 5 Food!`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 90) {
    if (shipItems.lumber > 15){
      inventory.lumber += 15
      shipItems.lumber -= 15
      if(inventory.lumber === 15){
        dialogue.textContent = `You found some wood! + 15 Lumber!`
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
  function quote(){
    dialogue.textContent = `What a beautiful island `
    dialogueImage.innerHTML = `<img src='assets/images/explore1.jpg'>`
  }
  if(success > 95){
    dialogue.textContent = `You found a hatchet.`
    dialogueImage.innerHTML = `<img src='assets/images/explore1.jpg'>`
  } else if (success > 80){
    dialogue.textContent = `This is a nice beach, I guess...`
    dialogueImage.innerHTML = `<img src='assets/images/beach.jpg'>`
  }
  else {
    quote()
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
    dialogue.textContent = "You planted some seeds. I wonder if they will grow..."
    dialogueImage.innerHTML = `<img src="assets/images/planting-seeds.jpg">`
  };
  this.reap = function(){
    console.log("I'm reaping my crops!")
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
