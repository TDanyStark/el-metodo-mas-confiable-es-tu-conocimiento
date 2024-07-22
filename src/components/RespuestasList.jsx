const RespuestasList = ({ preguntasAleatorias, pregunta, handleClickRespuesta, preguntasResueltas }) => {
  return (
    <div>
      <h2 className="text-4xl text-rosado-abbott font-bold">B.</h2>
      <ul className="gap-4 my-6 space-y-4">
        {preguntasAleatorias.map((item) => (
          <li
            key={item.id}
            className={` p-6 rounded-lg ${
              pregunta === null ? "cursor-not-allowed " : "cursor-pointer "
            } ${
              preguntasResueltas.includes(item.id) ? "bg-green-500" : "bg-rosado-abbott"
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
  );
};

export default RespuestasList;
