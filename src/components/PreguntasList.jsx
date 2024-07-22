import { useEffect } from "react";

const PreguntasList = ({ pregunta, setPregunta, preguntasResueltas, data }) => {
  useEffect(() => {
    console.log(preguntasResueltas);
  }, [preguntasResueltas]);
  return (
    <div>
      <h2 className="text-4xl text-violeta-abbott font-bold">A.</h2>
      {pregunta === null ? (
        <ul className="grid-personalizado gap-4 my-6">
          {data.map((item) => (
            <li
              key={item.id}
              className={`text-center p-6 rounded-lg cursor-pointer ${
                preguntasResueltas.includes(item.id) ? "bg-green-500" : "bg-violeta-abbott "
              }`}
              onClick={() => {
                setPregunta(item);
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
  );
};

export default PreguntasList;

