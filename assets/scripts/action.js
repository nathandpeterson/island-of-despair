function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function hunting() {
  this.goats = function(){
    let success = randomizer();
    if (goats === 0){
      return "There are no more goats on the island."
    } else if (success > 50 && goats > 0){
      food += 10;
      goats -= 1;
      return "You killed a goat! +10 FOOD!"
    } else {
      return "You couldn't kill any goats."
    }
  }
  this.fish = function(){
    let success = randomizer();
    if (success > (75-fishingSkill)) {
      food += 5;
      fishingSkill += 2;
    }
  }
}

function crops() {
  this.plant = function(){
    console.log("I'm planting crops!")
  };
  this.reap = function(){
    console.log("I'm reaping my crops!")
  };
}

function fort() {
  this.build = build();
  this.fortify = fortify();
}



let hunt = new hunting()
