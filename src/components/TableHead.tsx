interface TableHeadProps {
  keys: string[];
  onClick: (column: string) => void;
}

export default function TableHead({ keys, onClick }: TableHeadProps) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {keys.map((key) => (
          <th key={key} scope="col" className="px-4 py-2">
            {key}
            <i
              onClick={() => onClick(key)}
              className="cursor-pointer px-2 fa-solid fa-sort"
            ></i>
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
