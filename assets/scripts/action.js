function randomizer(){
  return Math.ceil(Math.random() * 100)
}

function findFood() {
  this.goats = function(){
    let success = randomizer();
    if (goats === 0){
      return "There are no more goats on the island."
    } else if (success > 50 && goats > 0){
      food += 10;
      goats -= 1;
      return "You killed a goat! +10 FOOD!"
      // tray.innerHTML = <div class='central-wrapper'>
      //   <img src='assets/images/'>
      // </div>
      // <div class='dialogue'>
      //   <h3>You just crashed on a desert island</h3>
      // </div>
    } else {
      return "You couldn't kill any goats."
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
