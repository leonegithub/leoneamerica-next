"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import miniPOP1 from "./Mini POP 1 - sito leoneamerica.png";
import miniPOP2 from "./Mini POP 2 - sito leoneamerica.png";
import miniPOP3 from "./Mini POP 3 - sito leoneamerica.png";
import POP1 from "./POP 1 - sito leoneamerica.png";
import POP2 from "./POP 2 - sito leoneamerica.png";
import POP3 from "./POP 3 - sito leoneamerica.png";
import POP4 from "./POP 4 - sito leoneamerica.png";
import popEsempio1 from "./pop_1.ae41d6d4.png";
import popEsempio2 from "./pop_2.9a8851a3.png";
import "./style.css";
import Link from "next/link";

export default function FamilyExample() {
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
        <Image src={POP4} alt="pop"></Image>
        <div className="container green">
          <div className=" absolute top-[25%] md:top-1/2  transform -translate-y-1/2">
            <h2 className="text-5xl md:text-6xl lg:text-9xl">
              <span className="font-bold">POP</span>&reg;
            </h2>
            <h3 className="text-xl md:text-5xl lg:text-7xl">Screw Universal</h3>
          </div>
        </div>
      </div>

      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex flex-col ">
            <h1 className="blue font-bold mb-2">
              The innovative and biomechanical orthodontic expansion screw
            </h1>
            <p>Made of stainless steel and biomedical techno polymer.</p>
            <p>
              The male screw is not in contact with the orthodontic acrylic
              resin: the function of the screw will not be influenced by the
              quality of the technical procedure and a non-compliant curing
              time.
            </p>
            <p>
              <strong>Continuous expansion movement: </strong>the high pressure
              injection of the polymer allows the perfect copy of the male
              thread of the screw thus ensuring a steady expansion transmission
              without the risk of undesired turning back in the mouth.
            </p>
            <p>
              The self-centering rectangular guides ensure a biomechanical and
              absolutely controlled symmetrical expansion.
            </p>
            <p>
              The flat shape of the guides and their flexibility allow the
              gradual release of the expansion with a physiological{" "}
              <em>orthodontic</em>
              movement.
            </p>
          </div>

          <Carousel fade data-bs-theme="dark">
            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={miniPOP1}
                  alt={`image ${miniPOP1}`}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={miniPOP2}
                  alt={`image ${miniPOP2}`}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={miniPOP3}
                  alt={`image ${miniPOP3}`}
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={POP1}
                  alt={`image ${POP1}`}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={POP2}
                  alt={`image ${POP2}`}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center items-center h-96">
                <Image
                  className="h-auto max-w-full rounded-lg object-contain"
                  height={500}
                  width={500}
                  src={POP3}
                  alt={`image ${POP3}`}
                />
              </div>
            </Carousel.Item>
          </Carousel>

          <div className="flex flex-col pt-5">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1060384328?badge=0autopause=0player_id=0app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                title="POP Positioning procedure"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col py-5">
            <p>
              The flexibility of the screw allows the adjustments of any dental
              regress due to inconsistent use of the appliance by the patient,
              thus being very effective with holding devices following a rapid
              expansion treatment.
            </p>
            <p>
              The high adaptability of the appliance enables a{" "}
              <strong>comfortable application</strong> in the mouth in the days
              following re-activation.
            </p>
            <p>
              Two embossed arrows on the body indicate the direction of opening.
              When using a color of acrylic resin similar to the polymer body, a
              white arrow provided with the plastic placement tab may be easily
              applied to make the direction of activation visible.
            </p>
            <p>
              The placement plastic tab, made of two pieces combined with a
              unique geometry, allows a perfect protection of the holes from the
              acrylic resin during the packing procedure and facilitates the
              removal after the curing cycle.
            </p>
            <p>The screw body is available in 5 colours.</p>
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
            <>
              <Link
                href={`http://localhost:3000/products/orthodontics/example-page3`}
                target="_blank"
              >
                <div className="grid-item-wrapper">
                  <div className="grid-item">
                    <Image
                      width={1920}
                      height={1080}
                      src={popEsempio1}
                      alt={"pop-esempio1"}
                      className="product-image"
                    />
                  </div>
                  <p className="product-name text-center">
                    POP® Screw Universal
                  </p>
                </div>
              </Link>
              <Link
                href={`http://localhost:3000/products/orthodontics/example-page4`}
                target="_blank"
              >
                <div className="grid-item-wrapper">
                  <div className="grid-item">
                    <Image
                      width={1920}
                      height={1080}
                      src={popEsempio2}
                      alt={"pop-esempio2"}
                      className="product-image"
                    />
                  </div>
                  <p className="product-name text-center">POP® MICRO</p>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
