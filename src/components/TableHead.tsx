import React, { useState } from "react";
import placeholder from '../../public/placeholder.png';

interface TableHeadColonna {
  valore: string;
  img: string;
}

export interface TableHeadProps {
  keys: TableHeadColonna[];
  onClick: (column: TableHeadColonna) => void;
}

export default function TableHead({ keys, onClick }: TableHeadProps) {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {keys.map((key) => (
          <th key={key.valore} scope="col" className="relative">
            <span className="flex items-center my-2">
              <button
                type="button"
                tabIndex={0}
                onMouseEnter={() => setOpenPopover(key.valore)}
                onMouseLeave={() => setOpenPopover(null)}
              >
                {key.img ? 
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="7" r="1" fill="currentColor" />
                  <rect x="9" y="9" width="2" height="5" rx="1" fill="currentColor" />
                </svg> : null
              }
                <span className="sr-only">Mostra informazioni</span>
              </button>
              <span className="ms-2">
              {key.valore}
              </span>
              <i
                onClick={() => onClick(key)}
                className="cursor-pointer px-2 fa-solid fa-sort"
              ></i>
            </span>
            {/* Popover */}
            {openPopover === key.valore && (
               <div
                  role="tooltip"
                  className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-100 w-40 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                  style={{ bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}
                  onMouseEnter={() => setOpenPopover(key.valore)}
                  onMouseLeave={() => setOpenPopover(null)}
                >
                <div className="p-3 space-y-2 lowercase">
                  <img src={key.img ? key.img : (typeof placeholder === "string" ? placeholder : placeholder.src)} alt={key.valore} />
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