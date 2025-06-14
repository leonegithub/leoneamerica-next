import Image from "next/image";
import Link from "next/link";
import leaf from "./foto sito leoneamerica leaf.png";
import anatomical from "./foto sito leoneamerica anatomica.png";
import interactiveSl from "./interactivesl.png";
import f1000 from "./f1000.png";
import pop from "./popscrews.png";
import "./style.css";

export default function Prodotti() {
  return (
    <div className="prodotti">
      <div className="background-contenitore mb-4">
        <video
          playsInline
          autoPlay
          loop
          style={{ display: "block" }}
          muted
          src="/A0620.mov"
        ></video>
        <div className="container">
          <h1 className="title ads">Orthodontics</h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex flex-col">
            <Image
              style={{ height: "100%", width: "100%" }}
              className="border"
              src={leaf}
              alt="colonia"
            />
            <span className="blue pt-3 text-lg font-semibold">
              Leaf Expander <sup>&#174;</sup>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col ">
              <Image className="border" src={anatomical} alt="colonia" />
              <span className="blue pt-3 text-lg font-semibold">
                Leaf Self Expander<sup>&#174;</sup> Anatomical
              </span>
            </div>

            <div className=" flex flex-col ">
              <Image className="border" src={pop} alt="colonia" />
              <span className="blue pt-3 text-lg font-semibold">
                Pop Screws
              </span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={f1000} alt="colonia" />
              <span className="blue pt-3 text-lg">
                <span className="font-bold">F1000</span>Plus
              </span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={interactiveSl} alt="colonia" />
              <span className="blue pt-3 text-lg">
                <span className="font-bold">Interactive</span>SL
              </span>
            </div>
          </div>
        </div>
        <Link href={`/products/orthodontics/all`}>
          <button
            type="button"
            className="self-start my-5 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            All products
          </button>
        </Link>
        <Link href={`/products/orthodontics/family-example`}>
          <button
            type="button"
            className="self-start my-5 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Example Family Page
          </button>
        </Link>
      </div>
    </div>
  );
}
