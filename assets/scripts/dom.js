'use strict'

let actionBtns = document.querySelectorAll('.action')
let bigMessage = document.querySelector('#big-message')
let bigMessageStatus = true
let brand = document.querySelector('#brand')
let dateDisplay = document.querySelector('#date')
let dialogue = document.querySelector('#dialogue')
let dialogueImage = document.querySelector('#dialogue-image')
let foodDisplay = document.querySelector('#food')
let healthDisplay = document.querySelector('#health')
let inventoryDisplay = document.querySelector('#inventory-body')
let inventoryHide = false
let inventoryIcon = document.querySelector('#inventory-icon')
let inventoryWrapper = document.querySelector('.inventory-wrapper')
let leftCol = document.querySelector('.discover-col')
let mainDialogue = document.querySelector('#main-dialogue')
let monthDisplay = document.querySelector('#month-display')
let monthIcon = document.querySelector('#month-icon')
let progressBar = document.querySelector('.progress-bar')
let prompt = document.querySelector('.prompt')
let rightCol = document.querySelector('.action-col')
let statusDisplay = document.querySelector('#status')
let statusIcon = document.querySelector('#status-icon')
let tray = document.querySelector('.central-tray')
let userInputName = document.querySelector('#userName')
let userSubmitButton = document.querySelector('#userName-submit')
let lumber,returningUser, seedTimer, seedMonth, seedQuantity, shotQuantity, fortButton, shoot

document.addEventListener('DOMContentLoaded', function(e){
  returningUser = localStorage.getItem('name' || null)
  if(returningUser){
    let max = localStorage.getItem('max-days')
    let last = localStorage.getItem('last-game')
    bigMessage.innerHTML = `<p>Welcome back, ${returningUser}!</p>
    <p>Last time you survived for ${last} days!</p>
    <p>The longest you have survived is ${max} days!
    Can you survive longer?</p>`
    userInputName.style.display = 'none'
    userSubmitButton.innerHTML = 'PLAY AGAIN'
    welcomeMessage(returningUser)
  }
})

function welcomeMessage(name){
  dialogue.textContent = `Welcome, ${name}! Your ship crash-landed on a tropical island. You were the only one to survive. This doesn't look so bad, does it?`
  dialogueImage.innerHTML = `<div id="dialogue-image">
    <img src="assets/images/tropical-island.jpg">
  </div>`
  bigMessageStatus = false
}

function clearMain(){
  mainDialogue.style.display = 'none'
  userSubmitButton.style.display = 'none'
  userInputName.style.display = 'none'
}

userSubmitButton.addEventListener('click', function(){
  localStorage.setItem('name', userInputName.value)
  mainDialogue.style.display = 'none'
  userSubmitButton.style.display = 'none'
  userInputName.style.display = 'none'
  bigMessage.innerHTML = 'The game is currently paused. <br>You are still trapped.'
  welcomeMessage(userInputName.value)
  timer.start()
  healthID = window.setInterval(healthTime, 1000)

  // bigMessage.textContent = ''
  // let temp = document.createElement(`div`)
  // temp.className = 'animated fadeInLeftBig'
  // temp.innerHTML = `<p>Please enter a name. <br> (It doesn't have to be your <em>real</em> name...)</p>`
  // bigMessage.append(temp)

})

brand.addEventListener('click', function(){
  if(bigMessageStatus === false){
    mainDialogue.style.display = 'block'
    bigMessageStatus = true
    timer.pause()
  } else {
    mainDialogue.style.display = 'none'
    bigMessageStatus = false
    timer.pause()
  }
})

inventoryIcon.addEventListener('click', function(e){
  if(inventoryHide === true){
    inventoryWrapper.style.display = 'block'
    e.target.style.color = 'white'
    inventoryHide = false
  } else {
    inventoryWrapper.style.display = 'none'
    e.target.style.color = 'rgba(245,245,245, .7)'
    inventoryHide = true
  }

})

for (let i = 0; i < actionBtns.length; i++){
    actionBtns[i].addEventListener('click', function(e){
      if(e.target.classList.contains('scavange-ship')) {
        exploreShip();
      }
      if(e.target.classList.contains('explore-island')){
        exploreIsland();
      }
      if(e.target.classList.contains('explore-seashore')){
        exploreSeashore()
      }
    })
  }
