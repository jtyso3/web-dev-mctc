//Jacob Tyson
//This program creates a map using leaflet library and a chart using chart.js.


let map = L.map('college-map').setView([39.8097, -98.5556], 4);   //  Sets map in center of US w zoom level of 4

//  Creates map using tiles from mapbox.com
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianR5c28zIiwiYSI6ImNrZm82anNjbzF4c3oycWwzM2NydnFqaHUifQ.yMVimpUVZx6awNp422lpng'
}).addTo(map);    //  add to tiles to leafletmap.

//  This creates an array filled with objects of 5 longest bridges in US
let bridges = [
  {name: 'Verrazano-Narrows Bridge', city:'New York, NY' , span: 1298.4, location: [40.6066, -74.0447]},
  {name: 'Golden Gate Bridge', city:'San Francisco and Marin, CA', span: 1280.2, location:[37.8199, -122.4783]},
  {name: 'Mackinac Bridge', city:'Mackinaw and St Ignace, MI', span:1158.0, location:[45.8174, -84.7278]},
  {name: 'George Washington Bridge', city:'New York, NY and New Jersey, NJ', span: 1067.0	, location:[40.8517, -73.9527]},
  {name: 'Tacoma Narrows Bridge', city: 'Tacoma and Kitsap, WA', span: 853.44, location: [47.2690, -122.5517]}
  ]


  let nameArray = [];   //  creates empty array used to add name of bridges in an array
  let spanArray = [];   // creates epmty array used to add span of bridges to array.

  //  Loops over each object in bridges array.
  bridges.forEach((bridgeObjects)=>{
    let bridgeName = bridgeObjects.name;    //  gets name of bridge in loop
    let brigdeLength = bridgeObjects.span;    //  gets span of bridge in loop
    let coordinates =  bridgeObjects.location;    //  gets location of bridge in loop

    nameArray.push(bridgeName);   // adds name of each object (bridges) in name array
    spanArray.push(brigdeLength); //  adds span of each object (bridges) in span array

    //  sets marker on each loaction of bridge from bridges array. also add popup with labels.
    let addBridgeMarker = L.marker(coordinates).bindPopup(`<b>${bridgeName}</b><br><b>Length:</b> ${brigdeLength}m`).addTo(map);

  })

let canvas = document.querySelector('#chart');    //  selects canvas element
let ctx = canvas.getContext('2d');    //  provides context of canvas element

//    creates new bar chart using chart.js library
new Chart( ctx, {
    type: 'bar',
    data: {
      labels: nameArray,    //  uses names from name array as labels for the chart.
      datasets: [{
        label: 'US longest Bridges',
        data: spanArray,    //  uses span from span array as data for the chart.
        backgroundColor: ['red','blue','yellow','green','purple']
      }]
    }, options: {   //  sets options for chart
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true   //  begins y axis at 0.
          }
        }]
      }
    }
  })
