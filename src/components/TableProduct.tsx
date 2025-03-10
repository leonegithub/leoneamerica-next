"use client";

interface TableProductProps {
  codice: string;
  keys: string[];
  values: string[];
}

export default function TableProduct({ keys, values }: TableProductProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {keys.map((key) => (
              <th key={key} scope="col" className="px-6 py-3">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
            {values.map((value, index) => (
              <td key={index} className="px-6 py-4">
                {value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
