let healthDisplay = document.querySelector('#health')
let foodDisplay = document.querySelector('#food')
let statusDisplay = document.querySelector('#status')
let discoverBtns = document.querySelectorAll('.discover')
let actionBtns = document.querySelectorAll('.action')
let dateDisplay = document.querySelector('#date')
let discoverBox = document.querySelector('.discover-2')
let tray = document.querySelector('.central-tray')

for (let i = 0; i < actionBtns.length; i++){
  actionBtns[i].addEventListener('click', function(e){
    if(e.target.textContent.trim() === 'Hunt for Goats'){
        find.goats();
    }
  })
}

for (let i = 0; i < discoverBtns.length; i++){
    discoverBtns[i].addEventListener('click', function(e){
  })
}
