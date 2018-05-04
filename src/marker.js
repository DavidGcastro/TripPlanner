const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibGl6enRoYWJldCIsImEiOiJjamdzNGdlY3YwZWJyMndxdTlxNjNqNWkyIn0.I7XlujocHQGIOaEpQJNe6Q';
const map = require('./map.js');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


const buildMarker = (typeOfPlace, placeCords) => {
    console.log("inside Function", iconURLs[typeOfPlace])

    let markerDomEl = markerEl(iconURLs[typeOfPlace]);
    console.log(markerDomEl);
   let mark =  new mapboxgl.Marker(markerDomEl).setLngLat(placeCords).addTo(map);
   console.log("mark", mark)

};

const markerEl = imgUrl => {
    const markerDomEl = document.createElement('div'); // Create a new, detached DIV
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = `url(${imgUrl})`;
    return markerDomEl;
}

//This works too:
// let marker = new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);


module.exports = buildMarker;
