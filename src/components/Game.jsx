import data from "../data/data.json";
import "../../public/css/Game.css";
import Popup from "./Popup";
import { useState, useEffect, useCallback } from "react";
import PreguntasList from "./PreguntasList";
import RespuestasList from "./RespuestasList";
import GameHeader from "./GameHeader";

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
      if(preguntasResueltas.includes(pregunta.id)) return;
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
      <GameHeader 
        setPregunta={setPregunta}
        setRespuesta={setRespuesta}
        setPreguntasResueltas={setPreguntasResueltas}
      />
      <section className="p-2 space-y-16 max-w-7xl mx-auto text-2xl">
        <PreguntasList 
          pregunta={pregunta}
          setPregunta={setPregunta}
          preguntasResueltas={preguntasResueltas}
          data={data}
        />
        <RespuestasList 
          preguntasAleatorias={preguntasAleatorias}
          pregunta={pregunta}
          handleClickRespuesta={handleClickRespuesta}
          preguntasResueltas={preguntasResueltas}
        />
      </section>
    </>
  );
};

export default Game;
