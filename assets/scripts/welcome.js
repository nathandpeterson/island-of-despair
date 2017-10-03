const userSubmitButton = document.querySelector('#userName-submit')
let userInputName = document.querySelector('#userName')
let prompt = document.querySelector('.prompt')

userSubmitButton.addEventListener('click', function(){
  localStorage.setItem(userInputName.value, '')
  
})

function welcomeMessage(){
  prompt.firstElementChild.remove()
  dialogue.textContent = `Welcome, ${userInputName.value}! Your ship crash-landed on a tropical island. You were the only one to survive. This doesn't look so bad, does it?`
  dialogueImage.innerHTML = `<div id="dialogue-image">
    <img src="assets/images/tropical-island.jpg">
  </div>`
}
