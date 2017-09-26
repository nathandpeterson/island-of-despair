'use strict'
let health = 30
let food = 20
let gameTimer = window.setInterval(islandTimer,1000)
function islandTimer(){
  let count = 0
  count++
  if(count === 5){
    console.log('five seconds')
  }
  if(count === 10){
    console.log('ten seconds')
  }
  if (count === 35){
    console.log('thirty-five')
    clearInterval(gameTimer)
    health = 30
  }
}

var healthID = window.setInterval(healthTime, 1000)
function healthTime(){
  if(food){
    food = food - 1
    foodDisplay.textContent = " " + food;
    healthDisplay.textContent = " " + health;
  } else {
    health = health - 1;
    healthDisplay.textContent = " " + health;
  }
  if (health > 10){
    statusDisplay.textContent = ": Healthy"
  }
  if (health <= 10){
    statusDisplay.textContent = ": You are starving..."
  }
  if (health <= 0){
    statusDisplay.textContent = ": You are dead!"
    clearInterval(healthID)
  }
}


healthTime()
islandTimer()
