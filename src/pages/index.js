import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhaW5mbyIsImEiOiJjbDVxbDVjOTIxNDFjM2lvZWQzcDF4dndoIn0.W8Q4-jsphhQfIfCQ3grrsw'

const Home = () => {

    const mapContainer = useRef(null);


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [9.45, 45.4],
            zoom: 7
        });

        map.on('load', () => {
            map.addSource('avalanche-map', {
                type: 'vector',
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
        return () => map.remove()

    }, []);


    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>

    );
};

export default Home;