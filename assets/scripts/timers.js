'use strict'

let gameTimer = window.setInterval(islandTimer,1000)
let healthID, justDays, currentMonth
let islandTimerStatus = false

function islandTimer(){
  let time = 0
  let interval, offset, date

  function update(){
    time += delta()
    let formattedTime = timeFormatter(time)
    dateDisplay.textContent = formattedTime
    monthDisplay.textContent = `The month is ${monthFormatter(currentMonth)}`
  }

  function delta(){
    let now = Date.now()
    let timePassed = now - offset
    offset = now
    return timePassed
  }

  function timeFormatter(milliseconds){
    let days = Math.floor(milliseconds/1000)
    justDays = days
    let months = Math.floor(milliseconds/31000)
    currentMonth = months + 1
    let years = Math.floor(milliseconds/365000)
    if (years > 0){
      months = months - (years*12)
      days = days - 365
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
    interval = setInterval(update, 10)
    offset = Date.now()
    this.isOn = true
    islandTimerStatus = true
    update()
  }

  this.isOn = false

  this.pause = function(){
    if(this.isOn){
      clearInterval(interval)
      interval = null
      this.isOn = false
      islandTimerStatus = false
    } else {
      interval = setInterval(update, 10)
      this.isOn = true
      islandTimerStatus = true
      update()
    }
  }
  this.reset = function(){
    time = 0
  }
}

function healthTime(){
  if(islandTimerStatus === true){
    if(food > 0){
      food -= 1
      foodDisplay.textContent = " " + food;
      foodDisplay.style.color = 'white'
      foodDisplay.style.background = 'rgba(248,248,248,.3)';
      if(health < 25){
        health += 1
      }
      healthDisplay.textContent = " : " + health;
    } else if (food < 0) {
      food = 0
      foodDisplay.textContent = " " + food;
      foodDisplay.style.color = 'white'
    } else {
      health -= 1;
      healthDisplay.textContent = " : " + health;
      progressBar.style.width = (health/25 * 100) + '%';
    }
    if (health >= 25){
      statusDisplay.textContent = " feeling healthy."
    } else if
      (health < 25 && health > 10){
        statusDisplay.innerHTML = " feeling <em>hungry</em>."
        foodDisplay.style.color = 'red'
        foodDisplay.style.background = 'black'
      } else if (health <= 10 && health > 0){
      statusDisplay.innerHTML = " <strong>starving</strong>."
    } else if (health <= 0){
      statusDisplay.textContent = " dead!"
      gameOver()
    }
  }
}

function gameOver(){
  dialogueImage.innerHTML = '<img src ="assets/images/skeleton.jpg"> '
  dialogue.textContent = 'You perished...'
  let maxDays = localStorage.getItem('max-days')
  if(justDays > maxDays) localStorage.setItem('max-days', justDays)
  localStorage.setItem('last-game', justDays)
  clearInterval(healthID)
  timer.pause()
  inventory.alive = false
  updateState()
}

function monthFormatter(monthNumber){
  let month
  if (monthNumber > 12){
    monthNumber = monthNumber % 12
  }
  switch (monthNumber) {
    case 1: month = 'October'
      break;
    case 2: month = 'November'
      break;
    case 3: month = 'December'
      break;
    case 4: month = 'January'
      break;
    case 5: month = 'February'
      break;
    case 6: month = 'March'
      break;
    case 7: month = 'April'
      break;
    case 8: month = "May"
      break;
    case 9: month = 'June'
      break;
    case 10: month = 'July'
      break;
    case 11: month = 'August'
      break;
    case 12: month = 'September'
      break;
    default: "You've lost track"
  }
  return month
}

let timer = new islandTimer()
