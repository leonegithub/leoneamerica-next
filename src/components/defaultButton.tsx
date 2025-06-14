interface DefaultButtonProps {
  testo: string;
}

export default function DefaultButton({ testo }: DefaultButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {testo}
    </button>
  );
}
