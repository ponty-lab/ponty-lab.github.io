'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhaW5mbyIsImEiOiJjbDVxbDVjOTIxNDFjM2lvZWQzcDF4dndoIn0.W8Q4-jsphhQfIfCQ3grrsw'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    //style: 'mapbox://styles/avainfo/cl5thpq8x000d14qegv3zsu7x',
    center: [9.45, 45.4],
    zoom: 7
    //zoom: 13,
    //center: [-122.447303, 37.753574]
});

map.on('load', () => {
    map.addSource('avalanche-map', {
        type: 'vector',
        // Use any Mapbox-hosted tileset using its tileset id.
        // Learn more about where to find a tileset id:
        // https://docs.mapbox.com/help/glossary/tileset-id/
        url: 'mapbox://avainfo.avalanche-danger-map'
    });
    map.addLayer({
        'id': 'avalanche-danger',
        'type': 'fill',
        'source': 'avalanche-map',
        'source-layer': 'avalanche-danger-ratings',
        'paint': {
            "fill-color": [
                "interpolate",
                ["linear"],
                ["get", "maxDangerRating"],
                2,
                "#ffff00",
                3,
                "#ff9900"
            ],
            "fill-opacity": 0.65
        }
    });
    map.addLayer({
        'id': 'avalanche-danger-line',
        'type': 'line',
        'source': 'avalanche-map',
        'source-layer': 'avalanche-danger-ratings',
        'paint': {
            "line-color": "#ffffff",
            "line-width": [
                "interpolate",
                ["exponential", 1.4],
                ["zoom"],
                9,
                1,
                14,
                8
            ],
        }
    });

});