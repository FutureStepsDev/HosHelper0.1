import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
 const hasData = address;

 const mapContainerStyle = {
    width: '100%',
    height: '150px',
    borderRadius: '8px',
    marginTop: '8px',
 };

 const center = {
    lat: 37.7749, // Replace with the actual latitude of the hospital
    lng: -122.4194, // Replace with the actual longitude of the hospital
 };

 return hasData ? (
    <LoadScript googleMapsApiKey="AIzaSyBP2EqZSIvI6eu3uN36GN5oRVVh7RTRXnQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={25} // Adjust the zoom level as needed
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
 ) : null;
};

export default Map;