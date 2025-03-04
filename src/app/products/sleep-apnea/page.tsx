"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Mad from "../../../../public/MAD.png";
/* import MadTablet from "../../../../public/MadTablet.png";
import MadMobile from "../../../../public/MADmobile.png"; */
import sleepApnea from "./sleep-apnea.png";
/* import dsc0314 from "./DSC_0314.jpg";
import dsc0327 from "./DSC_0327.jpg";
import dsc0353 from "./DSC_0353.jpg"; */
import "./style.css";

export default function Prodotti() {
  interface Product {
    id: string;
    nome: string;
    immagine_focus: string;
    tag: string[];
  }
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://php.leone.it/api/GetProdottiWeb.php", {
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

  // filtering through pedodontic data
  const filteredData = data?.filter((el) => el.tag.includes("sleep apnea"));

  const handleProductClick = (product: Product) => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    router.push(
      `/products/sleep-apnea/${product.nome.toLowerCase().replace(/\s+/g, "-")}`
    );
  };
  return (
    <div className="prodotti">
      <div className="background-contenitore mb-5">
        <Image src={Mad} alt="mad"></Image>
        <div className="container blue">
          <div className=" absolute top-[25%] md:top-1/2  transform -translate-y-1/2">
            <h3 className=" text-xl md:text-4xl lg:text-4xl">
              <strong>Sleep Apnea</strong>
            </h3>
            <h2 className="font-bold text-5xl md:text-6xl lg:text-9xl">
              M.A.D.
            </h2>
            <h3 className="text-xl md:text-5xl lg:text-6xl">
              Anti snoring devices
            </h3>
          </div>
        </div>
      </div>

      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex flex-col ">
            <h1 className="blue font-bold mb-2">
              Ideal devices in patients who are roncopatic or have mild-moderate
              OSA syndrome
            </h1>
            <p>
              These intraoral nighttime appliances can treat snoring acting
              directly on the mechanism which is the main cause of it, pushing
              the lower jaw in a forward position. Mandibular repositioning
              pushes forward also the tongue and the epiglottis, spacing them
              from the uvula, thus to solve soft tissues vibration during the
              airflow, that is what produce the snore sound.
            </p>
            <p>
              MAD appliances can be used for the treatment of sleep apnea (OSA)
              since they can solve the rear airways obstruction by restoring
              breathing capacity during sleeping time. The American Academy of
              Dental Sleep Medicine claims that the most efficient appliances
              are bi-maxillary type, custom-made by a dental lab and,
              furthermore, they must allow an additional advancement over the
              construction bite position, about 4-5 mm.
            </p>
            <p>
              There are all over the world, many different type of MAD
              appliances to treat snoring syndrome and sleep apnea: we have
              decided to accomplish, and improve, the elements for the
              realization of the most widely used appliances according even with
              the clinical and scientific proven efficiency.{" "}
            </p>
            <p>
              This is our proposal based on the requirements of any clinical
              specialist:{" "}
              <strong>
                appliance efficiency, high safety standards and stability and
                comfort for the patient.
              </strong>
            </p>
          </div>

          <div className="flex flex-col">
            <Image
              className="border w-full p-5"
              src={sleepApnea}
              alt="dsc0310"
            />
          </div>
          {/*   <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col ">
              <Image className="border" src={dsc0310} alt="dsc0310"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>

            <div className=" flex flex-col ">
              <Image className="border" src={dsc0314} alt="dsc0314"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={dsc0327} alt="dsc0327"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={dsc0353} alt="dsc0353"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
          </div> */}
        </div>
        <h1 className="blue font-bold sleep-h1">Related products</h1>
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
            filteredData?.map((product, index) => (
              <div key={index} className="grid-item-wrapper">
                <div
                  className="grid-item"
                  onClick={() => handleProductClick(product)}
                >
                  <Image
                    width={1920}
                    height={1080}
                    src={`https://php.leone.it${product.immagine_focus}`}
                    alt={product.nome}
                    className="product-image"
                  />
                </div>
                <p
                  onClick={() => handleProductClick(product)}
                  className="product-name text-center"
                >
                  {product.nome}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
