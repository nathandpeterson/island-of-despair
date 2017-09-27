'use strict'
let health = 30
let food = 20
let count = 0
let gameTimer = window.setInterval(islandTimer,1000)

function islandTimer(){
  let time = 0;
  let interval;
  let offset;
  let date;

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
    let months = Math.floor(milliseconds/31000)
    let years = Math.floor(milliseconds/365000)
    if (years > 0){
      months = months - (years*12)
      days = days - (months*31)
      date = `${years} years ${months} months ${days} days `
    } else if (months === 1 ) {
      days = days - (months*31)
      date = `${months} month and ${days} days `
    } else if (months > 1 ) {
      days = days - (months*31)
      date = `${months} months and ${days} days `
    }
     else {
      date = `${days} days `
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
    statusDisplay.textContent = " feeling healthy."
  } else if
    (health < 30 && health > 10){
      statusDisplay.textContent = " feeling hungry."
    } else if (health <= 10 && health > 0){
    statusDisplay.textContent = " starving."
  } else if (health === 0){
    statusDisplay.textContent = " dead!"
    gameOver()
  }
}

function gameOver(){
  clearInterval(healthID)
  timer.pause()
}

healthTime()
let timer = new islandTimer()
timer.start()
