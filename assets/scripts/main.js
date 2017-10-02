'use strict'
let goats = 10 + Math.ceil(randomizer()/10)
// let fishingSkill = 0

let inventory = {
  clothing: false,
  musket: false,
  carpentyTools: false,
  lumber: 0,
  gold: 0,
  powder: 0,
  seeds: 0
}

let islandState = {
  fort : false,
  fortStrength : 0,
  goatQuantity: goats,
  shipStatus: true,
  hunting: false,
  seeds: false
}

let shipItems = {
  lumber: 300,
  gold: 100,
  food: 40,
  powder: 10,
  seeds: 20,
  carpentyTools: 1
}

let updateState = function(){
  if (inventory.carpentyTools === true && islandState.fort === false) {
  let temp = document.createElement(`div`)
  temp.className = 'build-fort action'
  temp.innerHTML = `<p>Build a Fort</p>`
  rightCol.append(temp)
  temp.addEventListener('click', function(){
    find.goats()
  })
  islandState.fort = `true`
  }

  if ((inventory.musket === true && inventory.powder > 0) && islandState.hunting === false) {
    let temp = document.createElement(`div`)
    temp.className = 'hunt-goats action'
    temp.innerHTML = `<p>Hunt for Goats</p>`
    rightCol.append(temp)
    islandState.hunting = true;
    temp.addEventListener('click', function(){
      find.goats()
    })
  }
  if (inventory.seeds > 0 && islandState.seeds === false){
    let temp = document.createElement(`div`)
    temp.className = 'plant-seeds action'
    temp.innerHTML = `<p>Plant Seeds</p>`
    rightCol.append(temp)
    islandState.seeds = true;
    temp.addEventListener('click', function(){
      plant.seeds()
    })
  }
}
