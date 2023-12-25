import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import 'ol-geocoder/dist/ol-geocoder.min.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Geocoder from 'ol-geocoder';

const Map = ({ address }) => {
 const mapRef = useRef(null);

 useEffect(() => {
    // Initialize the map
    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0], // Initial center
        zoom: 2, // Initial zoom level
      }),
    });

    // Set the map target to the div element
    map.setTarget(mapRef.current);

    // Initialize the vector source and layer
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Add a geocoder control to the map
    const geocoder = new Geocoder('nominatim', {
      targetType: 'glass-button',
      lang: 'en-US',
      placeholder: 'Search for ...',
      limit: 5,
    });
    map.addControl(geocoder);

    // Add an event listener to the geocoder control to update the map view when a user selects a location
    geocoder.on('select', (e) => {
      map.getView().setCenter(e.coordinate);
      map.getView().setZoom(12);
    });

    // Clean up the map instance when the component is unmounted
    return () => {
      map.setTarget(undefined);
    };
 }, [address]);

 return <div ref={mapRef} style={{ width: '100%', height: '150px', borderRadius: '8px', marginTop: '8px' }} />;
};

export default Map;