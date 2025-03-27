import { saveAs } from "file-saver";

interface handleDownloadProps {
  nome: string;
  data: BlobPart;
  nome_tabella: string;
  csv_data: string;
}

function CSVButton({
  nome_tabella,
  csv_data,
}: {
  nome_tabella: string;
  csv_data: string;
}) {
  function handleDownload({ nome_tabella, csv_data }: handleDownloadProps) {
    const blob = new Blob([csv_data], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${nome_tabella}.csv`);
  }

  return (
    <button
      onClick={() =>
        handleDownload({
          nome_tabella,
          csv_data,
          nome: "default_nome",
          data: new Blob(),
        })
      }
      type="button"
      className="my-4 text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Scarica {`tabella ${nome_tabella}`}
    </button>
  );
}

export default CSVButton;
