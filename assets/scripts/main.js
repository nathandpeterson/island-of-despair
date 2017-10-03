'use strict'

let health = 30
let food = 10

let inventory = {
  clothing: false,
  musket: false,
  carpentyTools: false,
  hatchet: false,
  lumber: 0,
  gold: 0,
  shot: 0,
  seeds: 0
}

let islandState = {
  goats: 10 + Math.ceil(randomizer()/10),
  fort : false,
  fortStrength : 0,
  shipStatus: true,
  hunting: false,
  seeds: false
}

let shipItems = {
  lumber: 200,
  gold: 100,
  food: 40,
  powder: 10,
  seeds: 20,
  carpentyTools: 1,
  timesVisited: 0
}

let updateState = function(){
  if (inventory.carpentyTools === true && islandState.fort === false) {
  let temp = document.createElement(`div`)
  temp.className = 'build-fort action animated fadeIn'
  temp.innerHTML = `<p>Build a Fort</p>`
  rightCol.append(temp)
  temp.addEventListener('click', function(){
    fort.build()
  })
  islandState.fort = `true`
  }
  if (islandState.fort === true && inventory.lumber > 100){
    temp.className = 'build-fort action'
    temp.innerHTML = `<p>Improve your Fort</p>`
    rightCol.append(temp)
    temp.addEventListener('click', function(){
      fort.improve()
    })
  }

  if ((inventory.musket === true && inventory.shot > 0) && islandState.hunting === false) {
    let temp = document.createElement(`div`)
    temp.className = 'hunt-goats action animated fadeIn'
    temp.innerHTML = `<p>Hunt for Goats</p>`
    rightCol.append(temp)
    islandState.hunting = true;
    temp.addEventListener('click', function(){
      find.goats()
    })
  }
  if (inventory.seeds > 0 && islandState.seeds === false){
    let temp = document.createElement(`div`)
    temp.className = 'plant-seeds action animated fadeIn'
    temp.innerHTML = `<p>Plant Seeds</p>`
    rightCol.append(temp)
    islandState.seeds = true;
    temp.addEventListener('click', function(){
      plant.seeds()
    })
  }
}
