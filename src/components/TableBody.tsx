interface TableBodyProps {
  values: string[];
}

export default function TableBody({ values }: TableBodyProps) {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {values.map((cell: string, cellIndex: number) => (
          <td key={cellIndex} className="codice px-6 py-3">
            {cell}
          </td>
        ))}
        <td className="codice px-6 py-3">
          <button
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
