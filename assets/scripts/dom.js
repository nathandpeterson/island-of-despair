'use strict'

let brand = document.querySelector('#brand')
let mainDialogue = document.querySelector('#main-dialogue')
let userSubmitButton = document.querySelector('#userName-submit')
let bigMessage = document.querySelector('#big-message')
let userInputName = document.querySelector('#userName')
let prompt = document.querySelector('.prompt')
let healthDisplay = document.querySelector('#health')
let progressBar = document.querySelector('.progress-bar')
let foodDisplay = document.querySelector('#food')
let statusDisplay = document.querySelector('#status')
let actionBtns = document.querySelectorAll('.action')
let dateDisplay = document.querySelector('#date')
let tray = document.querySelector('.central-tray')
let dialogue = document.querySelector('#dialogue')
let dialogueImage = document.querySelector('#dialogue-image')
let leftCol = document.querySelector('.discover-col')
let rightCol = document.querySelector('.action-col')
let inventoryWrapper = document.querySelector('.inventory-wrapper')
let inventoryDisplay = document.querySelector('#inventory-body')
let lumber, shotQuantity
let bigMessageStatus = true
let returningUser

document.addEventListener('DOMContentLoaded',function(e){
  returningUser = localStorage.getItem('name')
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
  bigMessage.textContent = 'You are trapped. Paused.'
  welcomeMessage(userInputName.value)
  timer.start()
  healthID = window.setInterval(healthTime, 1000)
})

brand.addEventListener('click', function(){
  if(bigMessageStatus === false){
    mainDialogue.style.display = 'block'
    bigMessageStatus = true
  } else {
    mainDialogue.style.display = 'none'
    bigMessageStatus = false
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
