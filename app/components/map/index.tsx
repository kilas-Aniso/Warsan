// import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
// import L, { Icon, Map as LeafletMap } from 'leaflet';

// interface LocationData {
//   location: string;
//   longitude: number;
//   latitude: number;
//   immunization_rate: number;
// }

// const Map: React.FC<{ locations: LocationData[] }> = ({ locations }) => {
//   const mapRef = useRef<LeafletMap | null>(null);

// //   useEffect(() => {
// //     if (locations.length === 0 || mapRef.current) {
// //       return;
// //     }

// useEffect(() => {
//     const loadMap = async () => {
//       if (typeof window === 'undefined') {
//         return; // Skip rendering on the server
//       }

//       const L = await import('leaflet');

//       if (locations.length === 0 || mapRef.current) {
//         return;
//       }

   
//     const bounds = L.latLngBounds(L.latLng(0, 40), L.latLng(12, 52));
//     const map = L.map('map', {
//       maxBounds: bounds,
//       minZoom: 6,
//     }).fitBounds(bounds);

//     mapRef.current = map;

//     const somaliaTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       subdomains: ['a', 'b', 'c'],
//       bounds: bounds,
//       maxZoom: 6,
//       minZoom: 0,
//     }).addTo(map);

//     locations.forEach((location: LocationData) => {
//       const locationIcon = new Icon({
//         iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//         shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//         popupAnchor: [1, -34],
//         shadowSize: [41, 41],
//       });
//       const marker = L.marker([location.latitude, location.longitude], { icon: locationIcon }).addTo(map);
//       marker.bindPopup(`<b>${location.location}</b><br>Immunization Rate: ${location.immunization_rate}%`);
//     });
//  };
//   }, [locations]);

//   return <div id="map" className="bg-white w-[850px] md:w-full py-10 h-[650px] mb-6 md:mb-0"></div>;
// };

// export default Map;


import React from 'react';
import dynamic from 'next/dynamic';
// import ClientSideMap from '../ClientSideMap';

interface LocationData {
    location: string;
    longitude: number;
    latitude: number;
    immunization_rate: number;
  }

const ClientSideMap = dynamic(() => import('../ClientSideMap'), {
  ssr: false 
});

const Map: React.FC<{ locations: LocationData[] }> = ({ locations }) => {
  return <ClientSideMap locations={locations} />;
};

export default Map;
