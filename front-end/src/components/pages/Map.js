import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';


const provider = new OpenStreetMapProvider();

const SearchBar = () => {
 const map = useMap();

 const search = async (e) => {
    const searchInput = document.getElementById('search-input');
    const results = await provider.search({ query: searchInput.value });
    const { x: lat, y: lng } = results[0].bounds[0];
    map.setView([lat, lng], 12);
 };

 return (
    <div className="search-bar">
      <input id="search-input" type="text" placeholder="Search for ..." />
      <button onClick={search}>Search</button>
    </div>
 );
};


const CustomMap = ({ lat, lng }) => {
  const position = [lat, lng];

  // Adjust the size of the marker icon
  const defaultIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1001/1001022.png',
    iconSize: [30, 30], // Adjust the size as needed
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer center={position} zoom={10} style={{ height: '400px', width: '100%', borderRadius: '8px', marginTop: '8px' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SearchBar />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;

// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import l from 'leaflet';

// const provider = new OpenStreetMapProvider();

// const SearchBar = () => {
//  const map = useMap();

//  const search = async (e) => {
//     const searchInput = document.getElementById('search-input');
//     const results = await provider.search({ query: searchInput.value });
//     const { x: lat, y: lng } = results[0].bounds[0];
//     map.setView([lat, lng], 12);
//  };

//  return (
//     <div className="search-bar">
//       <input id="search-input" type="text" placeholder="Search for ..." />
//       <button onClick={search}>Search</button>
//     </div>
//  );
// };

// const Map = ({ lat, lng }) => {
//  return (
//     <MapContainer center={[lat, lng]} zoom={4} style={{ height: '400px', width: '100%', borderRadius: '8px', marginTop: '8px' }}>
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <SearchBar />
//       <Marker position={[lat, lng]}>
//         <Popup>
//           <p>Hello from here!</p>
//         </Popup>
//       </Marker>
//     </MapContainer>
//  );
// };

// export default Map;