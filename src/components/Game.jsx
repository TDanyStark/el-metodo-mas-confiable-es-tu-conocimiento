import data from "../data/data.json";
import "../../public/css/Game.css";
import Popup from "./Popup";

import { useState } from "react";

const Game = () => {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [contenidoModal, setContenidoModal] = useState("");

  const handleClick = (item) => {
    setModalIsOpen(true)
    setContenidoModal(item.respuesta)
  };

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
                className="bg-violeta-abbott text-center p-6 rounded-lg"
              >
                {item.pregunta}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl text-rosado-abbott font-bold">B.</h2>
          <ul className="gap-4 my-6 space-y-4">
            {data.map((item) => (
              <li
                key={item.id}
                className="bg-rosado-abbott p-6 rounded-lg"
                onClick={() => { handleClick(item) }}
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
