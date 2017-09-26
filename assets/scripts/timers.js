'use strict'
let health = 30
let food = 20
let count = 0
let gameTimer = window.setInterval(islandTimer,1000)

function islandTimer(){
  let time = 0;
  let interval;
  let offset;

  function update(){
    time += delta();
    let formattedTime = timeFormatter(time);
    dateDisplay.textContent = formattedTime
  }

  function delta(){
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(milliseconds){
    let days = Math.floor(milliseconds/1000)
    let months = Math.floor(milliseconds/30000)
    let years = Math.floor(milliseconds/300000)
    let date;
    if (years > 0){
      date = `${years} years ${months} months ${days} days and you are feeling `
    } else if (months > 0 ) {
      date = `${months} months ${days} days and you are feeling `
    } else {
      date = `${days} days and you are feeling `
    }
    return date
  }

  this.start = function(){
    interval = setInterval(update, 10);
    offset = Date.now()
    this.isOn = true;
    update()
  }

  this.isOn = false;

  this.pause = function(){
    if(this.isOn){
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  }
  this.reset = function(){
    time = 0;
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

  if (health >= 30){
    statusDisplay.textContent = " healthy"
  } else if
    (health < 30 ){
      statusDisplay.textContent = " hungry"
    } else if (health <= 10){
    statusDisplay.textContent = " starving..."
  } else if (health <= 0){
    statusDisplay.textContent = " dead!"
    clearInterval(healthID)
  }
}

healthTime()
let timer = new islandTimer()
timer.start()
