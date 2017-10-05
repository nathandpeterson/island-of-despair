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
let inventoryWrapper = document.querySelector('.inventory-wrapper')
let leftCol = document.querySelector('.discover-col')
let mainDialogue = document.querySelector('#main-dialogue')
let monthDisplay = document.querySelector('#month-display')
let progressBar = document.querySelector('.progress-bar')
let prompt = document.querySelector('.prompt')
let rightCol = document.querySelector('.action-col')
let statusDisplay = document.querySelector('#status')
let tray = document.querySelector('.central-tray')
let userInputName = document.querySelector('#userName')
let userSubmitButton = document.querySelector('#userName-submit')
let lumber,returningUser, seedTimer, seedMonth, seedQuantity, shotQuantity


document.addEventListener('DOMContentLoaded', function(e){
  returningUser = localStorage.getItem('name' || null)
  if(returningUser){
    let max = localStorage.getItem('max-days')
    let last = localStorage.getItem('last-game')
    bigMessage.innerHTML = `Welcome back, ${returningUser}!
    Last time you survived for ${last} days!
    The longest you have survived is ${max} days!
    Can you survive longer?`
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

for (let i = 0; i < actionBtns.length; i++){
    actionBtns[i].addEventListener('click', function(e){
      if(e.target.classList.contains('scavange-ship')) {
        exploreShip();
      }
      if(e.target.classList.contains('explore-island')){
        exploreIsland();
      }
    })
  }
