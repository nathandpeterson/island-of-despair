'use strict'

let mainDialogue = document.querySelector('#main-dialogue')
let userSubmitButton = document.querySelector('#userName-submit')
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
let inventoryDisplay = document.querySelector('#inventory-body')
let lumber, shotQuantity

function welcomeMessage(){
  prompt.firstElementChild.remove()
  dialogue.textContent = `Welcome, ${userInputName.value}! Your ship crash-landed on a tropical island. You were the only one to survive. This doesn't look so bad, does it?`
  dialogueImage.innerHTML = `<div id="dialogue-image">
    <img src="assets/images/tropical-island.jpg">
  </div>`
}


userSubmitButton.addEventListener('click', function(){
  localStorage.setItem(userInputName.value, '')
  mainDialogue.style.display = 'none'


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
