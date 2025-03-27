"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter, useParams } from "next/navigation";
import "./style.css";
import Popup from "@/components/popup";
import Gallery from "@/components/gallery";
import DefaultButton from "@/components/defaultButton";
import Link from "next/link";
import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = useParams();

  interface Product {
    id: string;
    nome: string;
    descrizione: string;
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
    codici_prodotto: {
      codici: string[];
    };
    progetto: string;
    casi_clinici: {
      links_casi_clinici: string[];
    };
    video: {
      links_video: string[];
    };
    link: {
      links_approfondimento: string[];
    };
    tabelle: [
      {
        nome_tabella: string;
        tabella_head: string[];
        tabella_righe: string[];
      }
    ];
  }

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    const productData = sessionStorage.getItem("selectedProduct");
    if (productData) {
      const parsedProduct = JSON.parse(productData);
      setProduct(parsedProduct);
    }
  }, [slug, router]);

  function handleLink(productCode: string, quantity: string) {
    const url = new URL("https://staging.leoneamerica.com/personal-area/");
    url.searchParams.set("codice", productCode);
    url.searchParams.set("quantita", quantity);
    window.open(url.toString(), "_blank");
  }

  if (!product) {
    return (
      <div className="container py-5 contenitore-pop d-flex flex-column">
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
      </div>
    );
  }

  return (
    <>
      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2">
          <div className="left flex flex-col">
            <h1 className="blue font-bold">
              {parse(product?.nome.toUpperCase())}
            </h1>
            <div className="py-2">{parse(product?.descrizione || "")}</div>
            <div className="flex items-center">
              <div className="mb-2">
                {product.video.links_video.length > 0 && (
                  <Popup
                    testo="Watch the video"
                    modalId="modal-video"
                    video={product?.video}
                  />
                )}
              </div>
              <div className="py-3">
                {product.casi_clinici.links_casi_clinici.length > 0 && (
                  <Link
                    href={product.casi_clinici.links_casi_clinici[0]}
                    target="_blank"
                  >
                    <DefaultButton testo="Clinical cases" />
                  </Link>
                )}
                {product.link.links_approfondimento.length > 0 && (
                  <Link
                    href={product.link.links_approfondimento[0]}
                    target="_blank"
                  >
                    <DefaultButton testo="More info" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Gallery
              featured={product?.immagini.immagine_1 ?? ""}
              images={[
                product?.immagini.immagine_1,
                product?.immagini.immagine_2,
                product?.immagini.immagine_3,
                product?.immagini.immagine_4,
                product?.immagini.immagine_5,
                product?.immagini.immagine_6,
                product?.immagini.immagine_7,
                product?.immagini.immagine_8,
              ].filter((img) => img)}
            />
          </div>
        </div>

        {/* Tab list */}
        <div className="my-5 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px list-unstyled font-medium text-center">
            {product.tabelle.map((tabella, index) => (
              <li key={index} className="me-2" role="presentation">
                <button
                  onClick={() => setSelectedTab(index)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    selectedTab === index
                      ? "border-blue blue"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={selectedTab === index}
                >
                  {tabella.nome_tabella}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab content for the selected table */}
        <div id="default-tab-content">
          <table className="table-auto text-left text-gray-500 dark:text-gray-400">
            <TableHead keys={product.tabelle[selectedTab].tabella_head} />
            {product.tabelle[selectedTab].tabella_righe.map((riga, index) => (
              <TableBody
                onClick={handleLink}
                key={index}
                values={Array.isArray(riga) ? riga : [riga]}
                columnCount={product.tabelle[selectedTab].tabella_head.length}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
