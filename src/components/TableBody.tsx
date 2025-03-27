import SingleProductCounter from "@/app/products/orthodontics/all/[slug]/SingleProductCounter";
import { useState } from "react";

interface TableBodyProps {
  values: string[];
  onClick: (productCode: string, quantity: string) => void;
  columnCount: number;
}

export default function TableBody({
  values,
  onClick,
  columnCount,
}: TableBodyProps) {
  const [localQuantity, setLocalQuantity] = useState<number>(1);

  function handleQuantityChange(value: number) {
    setLocalQuantity(value);
  }

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {Array.from({ length: columnCount }).map((_, index) => (
          <td key={index} className="codice px-4 py-3">
            {values[index] || ""}
          </td>
        ))}
        <td className="quantity px-6 py-3">
          <SingleProductCounter quantity={handleQuantityChange} />
        </td>
        <td className="codice px-6 py-3">
          <button
            disabled={localQuantity <= 0}
            onClick={() => onClick(values[0], localQuantity.toString())}
            type="button"
            className={
              localQuantity <= 0
                ? "text-white text-xs bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                : "text-white text-xs bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          >
            Buy now
          </button>
        </td>
      </tr>
    </tbody>
  );
}
