import React, { useState } from "react";

interface TableHeadProps {
  keys: string[];
  onClick: (column: string) => void;
}

export default function TableHead({ keys, onClick }: TableHeadProps) {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handlePopover = (key: string) => {
    setOpenPopover(openPopover === key ? null : key);
  };

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {keys.map((key) => (
          <th key={key} scope="col" className="relative">
            <span className="flex items-center">
              <button
                type="button"
                tabIndex={0}
                onMouseEnter={() => setOpenPopover(key)}
                onMouseLeave={() => setOpenPopover(null)}
              >
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-gray-500 ms-3 me-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="7" r="1" fill="currentColor" />
                  <rect x="9" y="9" width="2" height="5" rx="1" fill="currentColor" />
                </svg>
                <span className="sr-only">Mostra informazioni</span>
              </button>
              {key}
              <i
                onClick={() => onClick(key)}
                className="cursor-pointer px-2 fa-solid fa-sort"
              ></i>
            </span>
            {/* Popover */}
            {openPopover === key && (
              <div
                role="tooltip"
                className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-100 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                style={{ top: "2.5rem", left: 0 }}
                onMouseEnter={() => setOpenPopover(key)}
                onMouseLeave={() => setOpenPopover(null)}
              >
                <div className="p-3 space-y-2 lowercase">
                  image
                </div>
                <div data-popper-arrow></div>
              </div>
            )}
          </th>
        ))}
        <th scope="col" className="px-4 py-2 text-center">
          Quantity
        </th>
        <th scope="col" className="px-4 py-2 text-center">
          <i className="fa-solid fa-cart-shopping"></i>
        </th>
      </tr>
    </thead>
  );
}