let url = 'https://api.wheretheiss.at/v1/satellites/25544';
let latDisplay = document.querySelector('#iss-lat');
let longDisplay = document.querySelector('#iss-long');
let issMarker
let map = L.map('iss-map').setView([0, 0], 1);

let max_failed_attempts = 3

var icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})  //  Sets map in center of US w zoom level of 4

   //  add to tiles to leafletmap.
   //  Creates map using tiles from mapbox.com
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1,
       accessToken: 'pk.eyJ1IjoianR5c28zIiwiYSI6ImNrZm82anNjbzF4c3oycWwzM2NydnFqaHUifQ.yMVimpUVZx6awNp422lpng'
   }).addTo(map);

   iss(max_failed_attempts)

   function iss(attempts){
     if (attempts <= 0) {
       console.log('Too Many errors, abandoning request to ISS server');
     }
     fetch(url)
     .then( (response) =>{
       let jsonData = response.json();
       return jsonData;
     })
     .then( (issData) =>{

       longDisplay.innerHTML = issData.longitude;
       latDisplay.innerHTML = issData.latitude;
       L.marker([issData.latitude, issData.longitude]).addTo(map);

       if (!issMarker){
         issMarker = L.marker([issData.latitude, issData.longitude]).addTo(map);
         console.log('updated')
       }
       else{
         issMarker.setLatLng([issData.latitude, issData.longitude])
         console.log('updated--set maerker')
       }
     })
     .catch( err => {
       console.log(err)
       attempts--
     })
     .finally( ()=>{
     setTimeout(iss, 10000)
    })
  }
