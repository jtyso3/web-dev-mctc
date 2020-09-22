//Jacob Tyson
// Tree order Form
// This program will validate user inupt in a order form and will generate a order Summary


// selecting all input items
let homeownerNameInput = document.querySelector('#homeowner-name')
let homeownerHouseNumberInput = document.querySelector('#homeowner-house-number')
let homeownerStreetNameInput = document.querySelector('#homeowner-street-name')
let treeTypeSelect = document.querySelector('#tree-type')
let cityNameInput = document.querySelector('#city')
let zipCodeInput = document.querySelector('#zipcode')

// selects submitt button
let submitButton = document.querySelector('#submit-order')

// selects oreder summarap p element
let orderSummary = document.querySelector('#order-summary')

// submitt submitButton
submitButton.addEventListener('click', function() {
    // gets value of user input
    let customerName = homeownerNameInput.value
    let houseNumber = homeownerHouseNumberInput.value.trim()
    let streetName = homeownerStreetNameInput.value.trim()
    let treeType = treeTypeSelect.value.trim()
    let city = cityNameInput.value.trim()
    let zipCode = zipCodeInput.value.trim()

    // creates error array to store error messages
    let errors = []

    // validates all user input.
    if (!customerName){
      errors.push('Please enter your name')
    }
    if (!houseNumber){
      errors.push('Please enter your house number')
    }
    if (!streetName){
      errors.push('Please enter your street name')
    }
    if (!treeType){
      errors.push('Please enter your tree type')
    }
    if(!city){
      errors.push('Please enter your city of residence')
    }
    // checks for valid MN zip code
    if (zipCode < 55001 || zipCode > 56763){
      errors.push('Please enter a correct Minnesota zip code.')
    }

    // send alert if there are errors or generates order summary
    // checks for errors + alert message if found
    if (errors.length > 0){
    errMess = errors.join('\n');
    alert(errMess)
  }else {
    // generates order summary
    orderSummary.innerHTML = `<b>Name:</b> ${customerName}<br>
    <b>Address:</b> ${houseNumber} ${streetName}, ${city}, MN ${zipCode}<br>
    <b>Choice:</b> ${treeType}`
  }
})
