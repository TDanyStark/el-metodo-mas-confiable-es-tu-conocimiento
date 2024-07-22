const GameHeader = ({ setPregunta, setRespuesta, setPreguntasResueltas }) => {
  return (
    <section className="p-2 max-w-7xl mx-auto text-2xl">
      <div className="flex justify-between text-morado-abbott">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="cursor-pointer mr-4 h-8 w-8"
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
  );
};

export default GameHeader;
