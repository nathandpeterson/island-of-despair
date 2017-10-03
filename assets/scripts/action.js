'use strict'
function randomizer(){
  return Math.ceil(Math.random() * 100)
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
    dialogue.textContent = `What a beautiful place to die.`
    dialogueImage.innerHTML = `<img src='assets/images/beach.jpg'>`
  }
  else {
    quote()
  }
}

function exploreShip(){
  let success = randomizer()
  function corpses(){
    dialogue.textContent = `You found watery corpses and spoiled food.
    The ship has been slowly sinking for ${date.textContent}`
  }
  dialogueImage.innerHTML = `<img src="assets/images/sunken-pirate.jpg">`
  if(success <= 10) {
    corpses()
  } else if (success <= 20) {
    if(shipItems.food > 5) {
      dialogue.textContent = `You found a sack of biscuit. +5 Food!`
      food += 5
      shipItems.food -=5
    } else {
      corpses()
    }
  } else if (success <= 30) {
    if(shipItems.lumber > 10) {
      dialogue.textContent = `You found lumber. +10 Lumber!`
      inventory.lumber += 10
      shipItems.lumber -= 10
    } else {
      corpses()
    }
  } else if (success <= 40) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found a cask of ale. +5 Food!`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 50) {
    if(shipItems.seeds > 5){
      dialogue.textContent = `You found some seeds. +5 Seeds!`
      inventory.seeds += 5
      shipItems.seeds -= 5
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
      dialogue.textContent = `You found some wood! + 15 Lumber!`
      inventory.lumber += 15
      shipItems.lumber -= 15
    } else {
      corpses()
    }
  } else if (success <= 100) {
    if (shipItems.powder > 0){
      inventory.musket = true
      inventory.powder += 5
      dialogue.textContent = `You found a musket and some powder!`
      updateState()
    } else {
      corpses()
    }
  }
}

function findFood() {
  this.goats = function(){
    let success = randomizer();
    if (inventory.powder === 0){
      dialogue.textContent = `You are out of powder`
      dialogueImage.innerHTML = ``
    }
    else if (islandState.goats === 0){
      dialogue.textContent = "There are no more goats on the island."
      dialogueImage.innerHTML = `<img src="assets/images/tropical-island.jpg">`
    } else if (success > 50 && islandState.goats > 0){
      food += 10
      islandState.goats -= 1
      inventory.powder -= 1
      dialogueImage.innerHTML = `<img src='assets/images/goat.jpg'>`
      dialogue.textContent = `You killed a goat! +10 FOOD!`
    } else {
      inventory.powder -= 1
      dialogue.textContent = `You couldn't catch the goat...`
      dialogueImage.innerHTML = `<img src='assets/images/goat-running-cristian-grecu.jpg'>`
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
