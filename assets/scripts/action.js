function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function exploreShip(){
  let success = randomizer()
  if(success <= 10) {
    dialogue.textContent = `You found watery corpses and spoiled food.
    The ship has been slowly sinking for ${date.textContent}`
  } else if (success <= 20) {
    dialogue.textContent = `You found a sack of biscuit. +5 Food!
    The ship has been slowly sinking for ${date.textContent}`
    food += 5;
  } else if (success <= 30) {
    dialogue.textContent = `You found lumber. +10 Lumber!
    The ship has been slowly sinking for ${date.textContent}`
    lumber += 10;
  } else if (success <= 40) {
    dialogue.textContent = `You found a cask of ale. +5 Food!
    The ship has been slowly sinking for ${date.textContent}`
    food += 5;
  } else if (success <= 50) {
    dialogue.textContent = `You found dried and salted fish. +12 Food!
    The ship has been slowly sinking for ${date.textContent}`
    food += 12;
  } else if (success <= 60) {
    dialogue.textContent = `You found some carpenty tools!
    The ship has been slowly sinking for ${date.textContent}`
    carpentyTools = true;
  } else if (success <= 70) {
    dialogue.textContent = `You found some gold doubloons! + 100 gold!
    The ship has been slowly sinking for ${date.textContent}`
    gold += 100;
  } else if (success <= 80) {
    dialogue.textContent = `You found some dried fruit! + 5 Food!
    The ship has been slowly sinking for ${date.textContent}`
    food += 5;
  } else if (success <= 90) {
    dialogue.textContent = `You found some wood! + 15 Lumber!
    The ship has been slowly sinking for ${date.textContent}`
    lumber += 15;
  } else if (success <= 100) {
    dialogue.textContent = `You found some books and maps!
    The ship has been slowly sinking for ${date.textContent}`
  }
}

function findFood() {
  this.goats = function(){
    let success = randomizer();
    if (goats === 0){
      return "There are no more goats on the island."
    } else if (success > 50 && goats > 0){
      food += 10;
      goats -= 1;
      tray.innerHTML = `<div class='central-wrapper'>
        <img src='assets/images/goat-running-cristian-grecu.jpg'>
      </div>`
      dialogue.textContent = `You killed a goat! +10 FOOD!`
    } else {
      dialogue.textContent = `You could't kill any goats!`
    }
  }
  this.fish = function(){
    let success = randomizer();
    if (success > (75-fishingSkill)) {
      food += 3;
      fishingSkill += 1;
      return "You caught a fish."
    } else {
      return "You couldn't catch anything."
    }
  }

}

function crops() {
  this.plant = function(){

  };
  this.reap = function(){
    console.log("I'm reaping my crops!")
  };
}

function fort() {
  this.build = function build(){
    lumber -= 100
    return "You built a fort, but you might want to fortify it."
  };
  this.fortify = function fortify(){
    lumber -= 100
    fortStrength += 10
    return "You improved your fort"
  };
}


let find = new findFood()
