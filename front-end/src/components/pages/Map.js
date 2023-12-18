import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

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

    // Fetch coordinates based on the address using a geocoding service
    // (You need to replace this with your geocoding logic)
    // For example, you can use the OpenLayers Geocoding API or any other service
    // to convert the address to coordinates and update the map view.

    // For now, let's set a default location
    map.getView().setCenter([0, 0]);
    map.getView().setZoom(2);

    // Clean up the map instance when the component is unmounted
    return () => {
      map.setTarget(undefined);
    };
  }, [address]);

  return <div ref={mapRef} style={{ width: '100%', height: '150px', borderRadius: '8px', marginTop: '8px' }} />;
};

export default Map;
