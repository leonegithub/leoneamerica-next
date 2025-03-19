import SingleProductCounter from "@/app/products/orthodontics/all/[slug]/SingleProductCounter";

interface TableBodyProps {
  values: string[];
  onClick: (productCode: string, quantity: string) => void;
  columnCount: number;
  quantity: (value: number) => void;
}

export default function TableBody({
  values,
  onClick,
  columnCount,
  quantity,
}: TableBodyProps) {
  console.log(values);
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {Array.from({ length: columnCount }).map((_, index) => (
          <td key={index} className="codice px-4 py-3">
            {values[index] || ""}
          </td>
        ))}
        <td className="quantity px-6 py-3">
          <SingleProductCounter quantity={quantity} />
        </td>
        <td className="codice px-6 py-3">
          <button
            onClick={() => onClick(values[0], values[1])}
            type="button"
            className="text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy now
          </button>
        </td>
      </tr>
    </tbody>
  );
}
