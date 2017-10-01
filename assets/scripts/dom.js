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

for (let i = 0; i < actionBtns.length; i++){
  actionBtns[i].addEventListener('click', function(e){
    if(e.target.textContent.trim() === 'Hunt for Goats'){
      find.goats();
    }
    if(e.target.classList.contains('scavange-ship')) {
      exploreShip();
    }
  })
}
