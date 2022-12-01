// Add console.log to check to see if our code is working.
console.log("working");



// Create the map object with center and zoom level.

// Add GeoJSON data.


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/light-v10',
  accessToken: API_KEY
});



// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.


// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [streets]
});


L.control.layers(baseMaps).addTo(map);
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sakotiya/Mapping_Earthquake/main/Mapping_GeoJSON_Points/static/js/majorAirports.json";



// Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
    console.log(data);
        //.bindPopup("<h2>" + Feature.properties.city + "</h2>");
    // Creating a GeoJSON layer with the retrieved data.
    // Pass our map layers into our layers control and add the layers control to the map.
    L.geoJson(data).addTo(map);

});



