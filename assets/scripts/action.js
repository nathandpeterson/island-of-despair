'use strict'

function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function exploreShip(){
  let success = randomizer()
  inventoryWrapper.style.display = 'block'
  shipItems.timesVisited += 1
  if(shipItems.timesVisited > 15){
    sinkShip()
  } else if(shipItems.timesVisited === 1){
    findSeeds()
  } else if (success <= 10) {
    if(shipItems.food >= 60) {
      findPotatoes()
    } else {
      corpses()
    }
  } else if (success <= 20) {
    if(shipItems.food > 5) {
      findBiscuit()
    } else {
      corpses()
    }
  } else if (success <= 30) {
      fallThroughWood()
  } else if (success <= 40) {
    if (shipItems.food > 5){
      findAle()
    } else {
      corpses()
    }
  } else if (success <= 50) {
    if(inventory.hatchet === false){
      findHatchet()
    } else {
      corpses()
    }
  } else if (success <= 60) {
    if (shipItems.carpentyTools > 0){
      findTools()
    } else {
      corpses()
    }
  } else if (success <= 70) {
    if (shipItems.gold > 0){
      findGold()
    } else {
      corpses()
    }
  } else if (success <= 80) {
    if (shipItems.food > 5){
      findDriedFruit()
    } else {
      corpses()
    }
  } else if (success <= 90) {
    if (shipItems.lumber > 15){
      findLumber()
      } else {
      corpses()
    }
  } else if (success <= 100) {
      if(inventory.musket === false){
      findMusket()
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
    updateInventory('shot-quantity', -1)
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
      dialogueImage.innerHTML = `<img class='animated fadeIn' src='assets/images/goat.jpg'>`
      dialogue.textContent = `You killed a goat! +10 FOOD!`
      reduceShot()
    } else {
      dialogue.textContent = `You couldn't catch the goat...`
      dialogueImage.innerHTML = `<img src='assets/images/goat-running-cristian-grecu.jpg' class='animated fadeIn'>`
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
      updateInventory('seed-quantity', -10)
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
      dialogueImage.innerHTML = `<img class='animated fadeIn' src="assets/images/dirt.jpg">`
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
    dialogue.textContent = "You built a fort, but you might want to try and improve it."
    dialogueImage.innerHTML = `<img src='assets/images/stick-fort.jpg'>`
    islandState.fortStrength = 100
    let removeButton = document.querySelector('#fort-button')
    removeButton.remove()
    inventory.lumber -= 100
    updateInventory('lumber-quantity', -100)
  };
  this.improve = function fortify(){
    inventory.lumber -= 100;
    updateInventory('lumber-quantity', -100)
    inventory.fortStrength = 200;
    dialogue.textContent = "You improved your fort"
    dialogueImage.innerHTML = `<img src='assets/images/fortress.png'>`
  };
}


let find = new findFood()
let plant = new planting()
let fort = new fortress()
