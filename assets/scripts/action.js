'use strict'
function randomizer(){
  return Math.ceil(Math.random() * 100)
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
      dialogue.textContent = `You found a sack of biscuit. +5 Food!
      The ship has been slowly sinking for ${date.textContent}`
      food += 5
      shipItems.food -=5
    } else {
      corpses()
    }
  } else if (success <= 30) {
    if(shipItems.lumber > 10) {
      dialogue.textContent = `You found lumber. +10 Lumber!
      The ship has been slowly sinking for ${date.textContent}`
      inventory.lumber += 10
      shipItems.lumber -= 10
    } else {
      corpses()
    }
  } else if (success <= 40) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found a cask of ale. +5 Food!
      The ship has been slowly sinking for ${date.textContent}`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 50) {
    if(shipItems.seeds > 5){
      dialogue.textContent = `You found some seeds. +5 Seeds!
      The ship has been slowly sinking for ${date.textContent}`
      inventory.seeds += 5
      shipItems.seeds -= 5
      updateState()
    } else {
      corpses()
    }
  } else if (success <= 60) {
    if (shipItems.carpentyTools > 0){
      dialogue.textContent = `You found some carpenty tools!
      The ship has been slowly sinking for ${date.textContent}`
      inventory.carpentyTools = true
      shipItems.carpentyTools -= 1
      updateState();
    } else {
      corpses()
    }
  } else if (success <= 70) {
    if (shipItems.gold > 0){
      dialogue.textContent = `You found some gold doubloons! + 100 gold!
      The ship has been slowly sinking for ${date.textContent}`
      inventory.gold += 100
      shipItems.gold -= 100
    } else {
      corpses()
    }
  } else if (success <= 80) {
    if (shipItems.food > 5){
      dialogue.textContent = `You found some dried fruit! + 5 Food!
      The ship has been slowly sinking for ${date.textContent}`
      food += 5
      shipItems.food -= 5
    } else {
      corpses()
    }
  } else if (success <= 90) {
    if (shipItems.lumber > 15){
      dialogue.textContent = `You found some wood! + 15 Lumber!
      The ship has been slowly sinking for ${date.textContent}`
      inventory.lumber += 15
      shipItems.lumber -= 15
    } else {
      corpses()
    }
  } else if (success <= 100) {
    if (shipItems.powder > 0){
      inventory.musket = true
      inventory.powder += 5
      dialogue.textContent = `You found a musket and some powder!
      The ship has been slowly sinking for ${date.textContent}`
      updateState()
    } else {
      corpses()
    }
  }
}

function findFood() {
  this.goats = function(){
    let success = randomizer();
    if (islandState.goatQuantity === 0){
      dialogue.textContent = "There are no more goats on the island."
      dialogueImage.innerHTML = `<img src="assets/images/tropical-island.jpg">`
    } else if (success > 50 && islandState.goatQuantity > 0){
      food += 10;
      islandState.goatQuantity -= 1;
      dialogueImage.innerHTML = `<img src='assets/images/goat.jpg'>`
      dialogue.textContent = `You killed a goat! +10 FOOD!`
    } else {
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
    dialogueImage.innerHTML = `<img src="#">`
  };
  this.reap = function(){
    console.log("I'm reaping my crops!")
  };
}

function fort() {
  this.build = function build(){
    inventory.lumber -= 100
    dialogue.textContent = "You built a fort, but you might want to fortify it."
  };
  this.fortify = function fortify(){
    inventory.lumber -= 100;
    inventory.fortStrength += 10;
    dialogue.textContent = "You improved your fort"
  };
}


let find = new findFood()
let plant = new planting()
