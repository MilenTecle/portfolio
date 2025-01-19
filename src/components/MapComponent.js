import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 60.1282,
  lng: 18.6435,
};

const locations = [
  { lat: 59.9793, lng: 18.8793 },
  { lat: 59.3611, lng: 17.9711 },
  { lat: 59.3344, lng: 18.0675 },
];

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const createKey = (location) => `${location.lat}-${location.lng}`;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
    >
      <MarkerClusterer>
        {(clusterer) =>
          locations.map((location) => (
            <Marker key={createKey(location)} position={location} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  );
};

export default MapComponent;