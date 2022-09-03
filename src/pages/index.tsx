import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZhaW5mbyIsImEiOiJjbDVxbDVjOTIxNDFjM2lvZWQzcDF4dndoIn0.W8Q4-jsphhQfIfCQ3grrsw'

const Home = () => {

    const mapContainer = useRef<any>(null);

    const [lng, setLng] = useState(9.45);
    const [lat, setLat] = useState(45.4);
    const [zoom, setZoom] = useState(6);

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            pitchWithRotate: false,
            center: [lng, lat],
            zoom: zoom
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
                    'fill-antialias': false,
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["get", "maxDangerRating"],
                        1,
                        '#ccff66',
                        2,
                        "#ffff00",
                        3,
                        "#ff9900",
                        4,
                        '#ff0000',
                        5,
                        '#600000',
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
                        5,
                        0,
                        10,
                        3
                    ],
                }
            });
        }
        );

        return () => map.remove();
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>

    );
};

export default Home;