'use strict'

let health = 25
let food = 10

let inventory = {
  alive: true,
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
  fortStrength : 0,
  shipStatus: true,
  hunting: false,
  seeds: false,
  trees: 5
}

let shipItems = {
  lumber: 50,
  gold: 100,
  food: 60,
  powder: 10,
  seeds: 20,
  carpentyTools: 1,
  timesVisited: 0
}

function updateInventory(row, num){
  const inventoryData = document.querySelectorAll('.inventory-data')
  for(let i=0; i < inventoryData.length; i++){
    let item = inventoryData[i]
    if(row === item.id){
      let temp = Number(item.textContent)
      temp += num
      item.textContent = temp
    }
  }
  updateState()
}

function updateState(){
  if (inventory.carpentyTools === true && islandState.fortStrength === 0) {
  if(!fortButton){
    let temp = document.createElement(`div`)
    fortButton = true
    temp.className = 'build-fort action animated fadeIn'
    temp.id = 'fort-button'
    temp.innerHTML = `<p>Build a Fort</p>`
    rightCol.append(temp)
    temp.addEventListener('click', function(){
      fort.build()
      })
    }
  }
  if (islandState.fortStrength === 100 && inventory.lumber >= 100){
    let temp = document.createElement('div')
    temp.className = 'improve-fort action animated fadeIn'
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
    islandState.seeds = true
    temp.addEventListener('click', function(){
      plant.seeds()
    })
  }
  if(!inventory.alive){
    let buttons = document.querySelectorAll('.action')
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.display = 'none'
    }
    playAgain()
  }
}

function playAgain(){
  let dialogue = document.querySelector('.dialogue')
  dialogue.innerHTML = playAgainButton()
  let play = document.querySelector('.play-again')
  play.addEventListener('click', (e) => {
    e.preventDefault()
    location.reload()
  })
}

function playAgainButton(){
  return `<div class="play-again btn-secondary btn-lg btn-block"> <h1>Play Again?</h1> </div>`
}