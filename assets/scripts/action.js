function randomizer(){
  return Math.ceil(Math.random() * 100)
}




function Crops() {
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

function hunting() {
  this.goats = function(){
    let success = randomizer();
    if (success > 50){
      console.log('success')
      food += 10;
    }
  };
  this.fish = function(){

  };
}

let hunt = new hunting()
