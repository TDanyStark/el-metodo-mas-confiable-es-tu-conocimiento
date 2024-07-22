import { useRef } from "react";

const Popup = ({ setModalIsOpen, modalisOpen, children, setPregunta, setRespuesta }) => {
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    }
    cerrarModal();
  };

  const cerrarModal = () => {
    if (children === "¡Correcto!") {
      setPregunta(null);
    }
    setModalIsOpen(false);
    setRespuesta(null);
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        modalisOpen ? "flex" : "hidden"
      } overflow-y-auto bg-morado-abbott/50 overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full md:inset-0 max-h-full cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className="relative p-4 w-full max-w-xl max-h-full cursor-default"
        ref={modalRef}
      >
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            onClick={cerrarModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            {children === "¡Correcto!" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4 text-green-500 w-12 h-12"
              >
                <path
                  d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z"
                  fill="currentColor"
                />
                <path
                  d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                className="mx-auto mb-4 text-red-600 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            )}

            <h3 className="mb-5 text-3xl font-normal text-gray-600">
              {children}
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-violeta-abbott hover:bg-morado-abbott  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              onClick={cerrarModal}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
