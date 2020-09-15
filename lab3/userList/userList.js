/// Jacob Tyson
// Title: DOM Manipulation ul
// This program will add user input to an ul on the webpage.
// This will only allow up to 10 list items
// User must enter atleast one character
// Where to improve: how can ensure atleast one numeric or alphabetic character in user input.

let getInput = document.querySelector('.user-input'); // selects text input element for user input

let list = document.querySelector('.new-list'); // selects ul

let itemAdder = document.querySelector('.add-item'); // selects submit button

let clearButton = document.querySelector('#clear')


let listTracker = 0;                                // sets list counter to zero
console.log(listTracker);

itemAdder.addEventListener(`click`,function(){
  if (getInput.value.length == 0){                  // This will validate the user enters atleast 1 character *warning: does allow whitespace only
    console.log('Click Ignored');
  }
  else if (getInput.value.length > 50){             // validates user input is less than 50 characters
    alert('Please enter between 1 and 50 characters')
  }
  else if (listTracker < 10){
    let newListItem = getInput.value;                   // adds input to newListItem variable
    let listElement = document.createElement('li')      // creates a li element
    listElement.innerHTML = newListItem;                // add value of newListItem variabel to text of listElement element
    list.appendChild(listElement);                     // add newListItem variable to ul element
    listTracker++;
    console.log(listTracker);                           //add increment of one to list counter
    clearButton.addEventListener(`click`, function(){   // creates clear button event listener
      list.innerHTML = ''                               // clears all html elements inside ul element
      listTracker = 0;                                  // resets list counter to zero only when clear button is clicked
    })
  }
  else {
    alert("You can not add anymore items to the list") // alerts users list is full
  }
})
