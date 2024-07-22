import data from "../data/data.json";
import "../../public/css/Game.css";
import Popup from "./Popup";

import { useState, useEffect } from "react";

// Función para mezclar el array
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Game = () => {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [contenidoModal, setContenidoModal] = useState("");
  const [pregunta, setPregunta] = useState(null);
  const [respuesta, setRespuesta] = useState(null);
  const [preguntasResueltas, setPreguntasResueltas] = useState([]);

  useEffect(() => {
    const preguntasResueltasStorage =
      JSON.parse(localStorage.getItem("preguntasResueltas")) || [];
    setPreguntasResueltas(preguntasResueltasStorage);
  }, []);

  const validarRespuesta = () => {
    if (pregunta.id === respuesta.id) {
      setContenidoModal("¡Correcto!");
      const nuevasPreguntasResueltas = [...preguntasResueltas, pregunta.id];
      setPreguntasResueltas(nuevasPreguntasResueltas);
      localStorage.setItem(
        "preguntasResueltas",
        JSON.stringify(nuevasPreguntasResueltas)
      );
    } else {
      setContenidoModal("¡Incorrecto!");
    }
  };

  const handleClickRespuesta = (item) => {
    if (pregunta === null) {
      setContenidoModal("Primero escoge una pregunta");
      setModalIsOpen(true);
    } else {
      setRespuesta(item);
    }
  };

  useEffect(() => {
    if (respuesta !== null) {
      validarRespuesta();
      setModalIsOpen(true);
    }
  }, [respuesta]);

  useEffect(() => {
    setPreguntasAleatorias(shuffleArray(data));
  }, []);

  return (
    <>
      <Popup
        setModalIsOpen={setModalIsOpen}
        modalisOpen={modalisOpen}
        pregunta={pregunta}
        setPregunta={setPregunta}
        setRespuesta={setRespuesta}
      >
        {contenidoModal}
      </Popup>
      <section className="p-2 max-w-7xl mx-auto text-2xl">
        <div className="flex justify-between text-morado-abbott">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="cursor-pointer mr-4 h-8 w-8" // Añade margen a la izquierda para separarlo del otro SVG
            onClick={() => {
              setPregunta(null);
              setRespuesta(null);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-8 w-8"
            onClick={() => {
              localStorage.removeItem("preguntasResueltas");
              setPreguntasResueltas([]);
              setPregunta(null);
              setRespuesta(null);
            }}
          >
            <path d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z" />
          </svg>
          
        </div>
      </section>
      <section className="p-2 space-y-16 max-w-7xl mx-auto text-2xl">
        <div>
          <h2 className="text-4xl text-violeta-abbott font-bold">A.</h2>
          {pregunta === null ? (
            <ul className="grid-personalizado gap-4 my-6">
              {data.map((item) => (
                <li
                  key={item.id}
                  className={`bg-violeta-abbott text-center p-6 rounded-lg cursor-pointer ${
                    preguntasResueltas.includes(item.id) ? "bg-green-500" : ""
                  }`}
                  onClick={() => {
                    setPregunta(item);
                    setRespuesta(null);
                  }}
                >
                  {item.pregunta}
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-violeta-abbott p-6 rounded-lg">
              {pregunta.pregunta}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-4xl text-rosado-abbott font-bold">B.</h2>
          <ul className="gap-4 my-6 space-y-4">
            {preguntasAleatorias.map((item) => (
              <li
                key={item.id}
                className={`bg-rosado-abbott p-6 rounded-lg ${
                  pregunta === null ? "cursor-not-allowed" : "cursor-pointer"
                } ${
                  preguntasResueltas.includes(item.id) ? "bg-green-500" : ""
                }`}
                onClick={() => {
                  handleClickRespuesta(item);
                }}
              >
                {item.respuesta}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Game;
