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
  const [contenidoModal, setContenidoModal] = useState("Primero escoge una pregunta");
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);



  const selectRespuesta = (item) => {
    setRespuesta(item.respuesta);
  }

  const selectPregunta = (item) => {
    setPregunta(item.pregunta);
  }

  const handleClick = (item) => {
    setModalIsOpen(true)
    setContenidoModal(item.respuesta)
  };

  useEffect(() => {
    setPreguntasAleatorias(shuffleArray(data));
  }, []);

  return (
    <>
      <Popup setModalIsOpen={setModalIsOpen} modalisOpen={modalisOpen}>
        {contenidoModal}
      </Popup>
      <section className="p-2 space-y-16 max-w-7xl mx-auto text-2xl">
        <div>
          <h2 className="text-4xl text-violeta-abbott font-bold">A.</h2>
          <ul className="grid-personalizado gap-4 my-6">
            {data.map((item) => (
              <li
                key={item.id}
                className="bg-violeta-abbott text-center p-6 rounded-lg cursor-pointer"
                onClick={() => { selectPregunta(item) }}
              >
                {item.pregunta}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl text-rosado-abbott font-bold">B.</h2>
          <ul className="gap-4 my-6 space-y-4">
            {preguntasAleatorias.map((item) => (
              <li
                key={item.id}
                className="bg-rosado-abbott p-6 rounded-lg cursor-pointer"
                onClick={() => { selectRespuesta(item) }}
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
