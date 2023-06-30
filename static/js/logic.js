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

var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(geoData).then(function (response) {
  function circleColor(size) {
    //using a case statement set the color of the ciricle based on size.
    //source for color code representation  https://html-color.codes/   
    //   console.log(size);
    if (size < 10) { return "#008000"; } //green
    else if (size >= 10 && size < 30) { return "#adff2f "; } //lime
    else if (size >= 30 && size < 50) { return "#fada5e"; } //yellow-ish
    else if (size >= 50 && size < 70) { return "#ffc40c"; } //light orange
    else if (size >= 70 && size < 90) { return "#ffa500"; } //orange
    else
      return '#ff0000'; //red
  }
  function fillColor(size) {
    //using a case statement set the color of the ciricle based on size.
    //   console.log(size);
    if (size < 10) { return .1; }
    else if (size >= 10 && size < 30) { return .25; }
    else if (size >= 30 && size < 50) { return .33; }
    else if (size >= 50 && size < 70) { return .50; }
    else if (size >= 70 && size < 90) { return .75; }
    else
      return 1;

  }
  //fill the radius based on size 
  function radiusSize(y) {
    if (y == 0) { return 1; }
    return y * 4;
  }
  //set the circles to a look and feel  
  function lookandfeel(x) {
    return {      
      color: circleColor(x.geometry.coordinates[2]),
      fillOpacity: fillColor(x.geometry.coordinates[2]),
      radius: radiusSize(x.properties.mag)
    };
  }
//popups
//copied from student activities week 15 activities 1 geoJson
function onEachFeature(feature, layer) {
  layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
}

   L.geoJson(response, {
    pointToLayer: function (x, latlong) {
      return L.circleMarker(latlong);
    }, style: lookandfeel,
    onEachFeature: onEachFeature
  }).addTo(myMap);
});

//borrowed from Stack overflow.
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

  var last = "<h3>1</h3> 30 to 50"+" <h4>1</h4> 50 to 70";
  var final = "<h5>1</h5> 70 to 90"+" <h6>1</h6>90+";

    var div = L.DomUtil.create('div', 'info legend');
       div.innerHTML = 
          "<h1>1</h1>-10 to 10"+"<h2>1</h2>10 to 30"+last+final;
    return div;
};

legend.addTo(myMap);