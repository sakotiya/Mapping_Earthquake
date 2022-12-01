// Add console.log to check to see if our code is working.
console.log("working");

let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.

    let line = [
        [33.9416, -118.4085],
        [37.6214, -122.3790],
        [40.7899, -111.9791],
        [47.4502, -122.3088]
    ];



// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

40.6413° N, 73.7781° W
