//corey monsma
// June 28, 2023
//Module 15 challenge: Earth quake maps

//create the map object
// Exactly like the class activiites
//center it as the city of Omaha en Estados Unidos Americanos
var myMap = L.map("map", {
  center: [41.25626, -95.94043],
  zoom: 4.9
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//define a main function to call the program steps
//mi estilo es viejo como yo.
//This is very 1990s and C++
function main() {

  // Load the GeoJSON data.
  var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  var features_list;

  //get the data and process it
  d3.json(geoData).then(function (response) {
    //       console.log(response);
    features_list = response.features;
    console.log(features_list);
    // parse the data from the source
    // use the lats and logs to pin point earth quakes
    /*
    for (i = 0; i < features_list.length; i++) {
      L.marker([features_list[i].geometry.coordinates[1], features_list[i].geometry.coordinates[0]]).addTo(myMap);
    };*/
    
    // build the circles on the map
    // make the circles green per the assignement
    // make the circle size correspond to the magnitude of the incident or fault
    // create the info and corresponding event handler for when someone clicks the circle
    // create the ledgend      
  });
};

//Call the executible program
main();