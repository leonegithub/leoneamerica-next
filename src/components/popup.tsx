import React from "react";

interface PopupProps {
  media: React.ReactNode;
  modalId: string;
  testo: string;
}

export default function Popup({ media, modalId, testo }: PopupProps) {
  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target={modalId}
        data-modal-toggle={modalId}
        className="self-start me-3 flex my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {testo}
      </button>
      {/* Main modal */}
      <div
        id={modalId}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative  w-full max-w-5xl max-h-full">
          {/* Modal content */}
          <div className="relative p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl blue font-semibold text-gray-900 dark:text-white">
                Product information
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide={modalId}
              >
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            {media}
            {/* <img src={tabella} alt={`foto-${tabella}`} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
