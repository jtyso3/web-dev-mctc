let welcomeMessage = document.querySelector('#welcome-message');

let nameInput = document.querySelector('.username');

let submitButton = document.querySelector('.button');

submitButton.addEventListener('click',function(){
  let name = nameInput.value;
  if(name.length < 2){
    welcomeMessage.innerHTML = `Please include atleast <b>two<b> characters.`

  }else {
    welcomeMessage.innerHTML = `Welcome, ${name}!`
  }
})
