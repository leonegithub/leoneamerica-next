import React, { useState } from "react";

interface PopupProps {
  modalId: string;
  testo: string;
  video?: { links_video: string[] };
}

export default function Popup({ modalId, testo, video }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={openModal}
        className="self-start me-2 flex my-3 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {testo}
      </button>
      {/* Main modal */}
      {isVisible && (
        <div
          id={modalId}
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div className="relative w-full max-w-5xl max-h-full bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl blue font-semibold text-gray-900 dark:text-white">
                Product information
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            {video && video.links_video.length > 0 ? (
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${video.links_video[0]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="Product Video"
                />
              </div>
            ) : (
              <p>No video available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
