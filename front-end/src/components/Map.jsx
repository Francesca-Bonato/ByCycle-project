// src/components/Map.js

import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        initMap(latitude, longitude);
      }, showError);
    } else {
      alert("Geolocalizzazione non supportata dal tuo browser.");
    }
  }, []);

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("L'utente ha negato la richiesta di geolocalizzazione.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Le informazioni sulla posizione non sono disponibili.");
        break;
      case error.TIMEOUT:
        alert("La richiesta per ottenere la posizione è scaduta.");
        break;
      default:
        alert("Si è verificato un errore sconosciuto.");
        break;
    }
  };

  const initMap = (latitude, longitude) => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
    });

    // Aggiungi il livello di percorsi ciclabili
    const bikeLayer = new window.google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  };

  return (
    <div>
      <h1>Mappa Dinamica con Percorsi Ciclabili</h1>
      <div
        ref={mapRef}
        id="map"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </div>
  );
};

export default Map;
