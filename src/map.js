const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibGl6enRoYWJldCIsImEiOiJjamdzNGdlY3YwZWJyMndxdTlxNjNqNWkyIn0.I7XlujocHQGIOaEpQJNe6Q';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

module.exports = map;