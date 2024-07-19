import { useRef } from "react";

const Popup = ({ setModalIsOpen, modalisOpen, children }) => {
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    }
    cerrarModal();
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
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
      <div className="relative p-4 w-full max-w-xl max-h-full cursor-default" ref={modalRef}>
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
            <svg
              className="mx-auto mb-4 text-morado-abbott w-12 h-12"
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
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
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
