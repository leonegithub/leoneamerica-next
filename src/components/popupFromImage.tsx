import React from "react";

interface PopupProps {
  media: React.ReactNode;
  modalId: string;
  testo: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupFromImage({
  media,
  modalId,
  testo,
  isOpen,
  onClose,
}: PopupProps) {
  return (
    <>
      {/* Main modal */}
      <div
        id={modalId}
        tabIndex={-1}
        aria-hidden={!isOpen}
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50`}
      >
        <div className="relative w-full max-w-5xl max-h-full">
          {/* Modal content */}
          <div className="relative p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl blue font-semibold text-gray-900 dark:text-white">
                {testo}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
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
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 flex justify-center items-center">{media}</div>
          </div>
        </div>
      </div>
    </>
  );
}
