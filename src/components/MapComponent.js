/* global google */
import React, { useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '400px',
  margin: 'auto',
  marginBottom: '80px',
};

const center = {
  lat: 59.3683,
  lng: 17.9602,
};

const location = { lat: 59.3683, lng: 17.9602 };

// Define the libraries array outside the component
const libraries = ['marker'];

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, // Pass the pre-defined constant
  });

  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (isLoaded && mapRef.current) {
        // Initialize the map
        const map = new google.maps.Map(mapRef.current, {
          center: center,
          zoom: 10,
          mapId: "c58392883d4c9e59",
        });

        // Add AdvancedMarkerElement
        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
          new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: location,
            title: "My Location",
          });
        } else {
          console.error("AdvancedMarkerElement is not available.");
        }
      }
    };
    initializeMap();
  }, [isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <div ref={mapRef} style={containerStyle}></div>;
};

export default MapComponent;