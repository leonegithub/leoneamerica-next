"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import "./style.css";
import SearchBar from "@/components/searchbar";

const Products = () => {
  interface Tabella {
    nome_tabella: string;
    tabella_head: string[];
    tabella_righe: string[][];
  }
  interface Product {
    id: string;
    nome: string;
    immagini: {
      header: string;
      immagine_1: string;
      immagine_2: string;
      immagine_3: string;
      immagine_4: string;
      immagine_5: string;
      immagine_6: string;
      immagine_7: string;
      immagine_8: string;
    };
    sezione: string;
    tabelle: Tabella[];
  }
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [titleText, setTitleText] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://php.leone.it/api/GetProdottiWeb7_1.php", {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization:
          "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject);
        setIsLoading(false);
      });
  }, []);

  const handleProductClick = (product: Product) => {
    const productName = product.nome
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/&reg;/g, "")
      .replace(/<[^>]*>/g, "");
    router.push(`all/${productName}?id=${product.id}`);
  };

  const tabs = data?.map((productTab) => productTab.sezione) || [];
  const tabSet = new Set();
  tabs.forEach((tab) => {
    tabSet.add(tab);
  });

  const tabsUnique: string[] = [...tabSet] as string[];

  const [activeTab, setActiveTab] = useState<string>("Laboratory");

  const filteredData =
    data?.filter(
      (productSection) =>
        productSection.sezione === activeTab &&
        (productSection.nome.toLowerCase().includes(titleText.toLowerCase()) ||
          productSection.tabelle.some((tabella) =>
            tabella.tabella_righe.some((tabella_riga) =>
              tabella_riga[0].toLowerCase().includes(titleText.toLowerCase())
            )
          ))
    ) ?? [];

  return (
    <div className="container">
      <h1 className="blue font-bold my-5">Products</h1>
      <div className="font-medium flex justify-between items-center text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap list-unstyled -mb-px">
          {tabsUnique &&
            tabsUnique.map((tab) => (
              <li key={tab} className="me-2">
                <a
                  onClick={() => setActiveTab(tab)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                    activeTab === tab
                      ? "blue border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                >
                  {tab}
                </a>
              </li>
            ))}
        </ul>
        <div>
          <SearchBar
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
        </div>
      </div>
      <div className="grid-container my-5">
        {isLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            {filteredData?.length > 0
              ? filteredData?.map((product, index) => (
                  <div key={index} className="grid-item-wrapper">
                    <div
                      className="grid-item"
                      onClick={() => handleProductClick(product)}
                    >
                     <Image
                        width={1920}
                        height={1080}
                        src={product.immagini.immagine_1 && typeof product.immagini.immagine_1 === "string"
                          ? product.immagini.immagine_1
                          : "/placeholder.png"}
                        alt={product.nome}
                      />
                    </div>
                    <p
                      onClick={() => handleProductClick(product)}
                      className="product-name text-center"
                    >
                      {parse(product.nome.toUpperCase())}
                    </p>
                  </div>
                ))
              : "No product found."}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
