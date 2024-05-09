import React, { useState } from "react";
import image1 from "../assets/images/img_homepage/img_cta.png"

const Slider = () => {
  const [indiceAttivo, setIndiceAttivo] = useState(0); // indiceAttivo tiene traccia dell'immagine attiva
  const immagini = [
    { src: image1, alt: "Immagine 1" },
    { src: "../assets/images/img_mountain_bicycl.png", alt: "Immagine 2" },
    { src: "../assets/images/img_mountain_bicycl.png", alt: "Immagine 3" },
  ];

  const gestisciPrecedente = () => {
    setIndiceAttivo((indicePrecedente) =>
      indicePrecedente === 0 ? immagini.length - 1 : indicePrecedente - 1
    ); // scorri all'ultima immagine se siamo alla prima
  };

  const gestisciSuccessiva = () => {
    setIndiceAttivo((indicePrecedente) =>
      indicePrecedente === immagini.length - 1 ? 0 : indicePrecedente + 1
    ); // scorri alla prima immagine se siamo all'ultima
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center">
        {immagini.map((immagine, indice) => (
          <div
            key={indice}
            className={`absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-500 ${
              indice === indiceAttivo ? "opacity-1" : "opacity-0"
            }`}
          >
            <img
              src={immagine.src}
              alt={immagine.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-0 left-0 flex items-center px-4 py-2 bg-black opacity-50 hover:opacity-75 transition-all"
        onClick={gestisciPrecedente}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-6-6l6-6"
          />
        </svg>
      </button>

      <button
        className="absolute top-0 right-0 flex items-center px-4 py-2 bg-black opacity-50 hover:opacity-75 transition-all"
        onClick={gestisciSuccessiva}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 19l6-6l-6-6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
