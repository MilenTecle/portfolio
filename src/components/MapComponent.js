/* global google */ // Inform ESLint that the "google" object is available globally
import React, { useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api'; // Google Maps API loader hook

// Map container styling
const containerStyle = {
  width: '90%',
  height: '400px',
  margin: 'auto',
  marginBottom: '80px',
};

// Default map center coordinates (Stockholm, Sweden)
const center = {
  lat: 59.3683,
  lng: 17.9602,
};

// Location marker coordinates (same as center)
const location = { lat: 59.3683, lng: 17.9602 };

// Define the libraries array outside the component
const libraries = ['marker'];

// Displays and interactive Google Maps
const MapComponent = () => {
  // Load Google Maps API and check if it has loaded successfully
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, // Pass the pre-defined constant
  });

  // Create a reference for the map container
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

        // Add a marker to the map if AdvancedMarkerElement is available
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

  // Display a loading message while the Google Maps API is loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Render the map container
  return <div ref={mapRef} style={containerStyle}></div>;
};

export default MapComponent;