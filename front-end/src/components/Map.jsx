import React, { useEffect, useState } from "react";

const Map = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Geolocalizzazione non è supportata o permesso negato");
          console.error(err);
        }
      );
    } else {
      setError("Geolocalizzazione non è supportata dal tuo browser.");
    }
  }, []);

  return (
    <div>
      {location.lat && location.lng ? (
        <iframe
          title="Google Maps"
          width="100%"
          height="700px"
          frameBorder="0"
          style={{ border: 0 }}
          //DEBUG CODE MAP      
          //       <iframe
          //   width="100%"
          //   height="100%"
          //   frameBorder="0"
          //   marginHeight="0"
          //   marginWidth="0"
          //   title="map"
          //   scrolling="no"
          //   src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6429019.961973948!2d7.877651878918112!3d38.1129815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spercorsi%20ciclabili!5e0!3m2!1sit!2sit!4v1716817299018!5m2!1sit!2sit"
          // ></iframe>
          src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d68019.961973948!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spercorsi%20ciclabili!5e0!3m2!1sit!2sit!4v1716817299018!5m2!1sit!2sit`}
          allowFullScreen=""
        ></iframe>
      ) : (
        <p>{error || "Caricamento della tua posizione..."}</p>
      )}
    </div>
  );
};

export default Map;
