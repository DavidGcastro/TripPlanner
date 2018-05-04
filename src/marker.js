const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibGl6enRoYWJldCIsImEiOiJjamdzNGdlY3YwZWJyMndxdTlxNjNqNWkyIn0.I7XlujocHQGIOaEpQJNe6Q';
const map = require('./map.js');
const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundSize = 'contain';
markerDomEl.style.border = '1px solid black';
markerDomEl.style.borderRadius = '10px';
markerDomEl.style.backgroundImage = 'url(https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1413777288/tq2jazoybobgvfgngfk8.png)';

const marker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.6354, 41.8885] for Chicago

//This works too:
// let marker = new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);


module.exports = marker;
