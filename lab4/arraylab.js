/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.\n')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
let latitude = iss_location.iss_position.latitude;
console.log(`The latitude is ${latitude}.\n`);

// TODO Extract the longitude value, and log it to the console.
let longitude = iss_location.iss_position.longitude;
console.log(`The longitude is ${longitude}\n`)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787; // add key CHF and value of 1.1787 to rates array
console.log('Adding CHF and its value to the rates array!');
console.log(rates);
console.log('\n')

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)


let amountOfEuro = 100;   //  amount of euro
let austraRate = rates.AUD;   //  gets AUD exchange rate
let exRate = amountOfEuro / austraRate;   //  Calculates euro equivalent in AUD
console.log('The equivalent of 100 Euros in AUD is:')
console.log('$'+exRate + '\n');

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

//  finds highest value by looping through object items
let highestValue=0;
for (currency in rates){    //  loops through object
  let value = rates[currency];  //  sets value of object item into value var
  if(value > highestValue){   //  compares value of last highestValue variable to current oject within the loop to find which is greater
   highestValue = value;    //  sets new highest value if condition is met
  }
}

//  Matches the highest value to the correct item in object. prints the statement in the console.
if(rates.AUD == highestValue){
  console.log(`AUD has the highest exchange rate at ${highestValue}`)
}else if(rates.BGN == highestValue){
  console.log(`BGN has the highest exchange rate at ${highestValue}`)
}else if (rates.BRL == highestValue) {
  console.log(`BRL has the highest exchange rate at ${highestValue}`)
}else if (rates.CAD == highestValue) {
  console.log(`CAD has the highest exchange rate at ${highestValue}`)
}else if (rates.CHF == highestValue){
  console.log(`CHF has the highest exchange rate at ${highestValue}`)
}
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
];

// TODO print Gary Oldman's cat's name
console.log('\n')
console.log(`Gary Oldmans cat is named ${cats_and_owners[1].cat}.`)   // prints gary oldmans cat name.

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let tswiftCat = { name: 'Taylor Swift', cat: 'Meredith'}    //    creates new object for array
cats_and_owners.push(tswiftCat)    //  adds object into array

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//    prints each object in the array.
cats_and_owners.forEach((objects)=>{
  console.log(objects)
})
console.log('\n');


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// TODO print the full name of the Literature Nobel laureate.

let firstName = nobel_prize_winners_2017.prizes[3].laureates[0].firstname   //  gets first name for category literature
let lastName = nobel_prize_winners_2017.prizes[3].laureates[0].surname   //  get last name for category literature
console.log(`Winner of the category literature: ${firstName} ${lastName}!`)
console.log('\n')

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
//  prints ids of all physics nobel award winners
console.log('The ids of each Physics Nobel Prize winner are:')
// gets each object under physics category and then gets each id witin each object
nobel_prize_winners_2017.prizes[0].laureates.forEach((objects)=>{
  console.log(objects.id); // prints each id
})
console.log('\n');

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories (I could have just wrote this as part of the loop above)

console.log('Here are each of the categories of the Nobel Prize')
let prizeNumber = 0;    //  creates counter startpint
nobel_prize_winners_2017.prizes.forEach((objects)=>{    //  grabs each object in prize araray
  console.log(objects.category)
  prizeNumber += 1;
  console.log(prizeNumber)  //  add 1 to proze counter after every category passes through loop
  return prizeNumber;   //  prints each category of each object
})
console.log(`Total: ${prizeNumber}`);   //  prints total prizes

// TODO write code to count the total number of laureates from 2017.
let laureateCounter = 0;    //  sets counter
nobel_prize_winners_2017.prizes.forEach((objects)=>{    //  iterates through each object in prize array
  let numberOfLaureates = objects.laureates.length    //  gets the legnth of each laurente array
  laureateCounter += numberOfLaureates    //  add length of laurente array to grand total of all laurentes
  return laureateCounter
})

console.log('\n')
console.log(`The number of total Laureates: ${laureateCounter}`)    //  prints total laureate. 
