import Image from "next/image";
import colonia from "./A0620 colonia.59.421.png";
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
              src={colonia}
              alt="colonia"
            ></Image>
            <span className="blue pt-3 text-lg font-semibold">Testo</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col ">
              <Image className="border" src={colonia} alt="colonia"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>

            <div className=" flex flex-col ">
              <Image className="border" src={colonia} alt="colonia"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={colonia} alt="colonia"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image className="border" src={colonia} alt="colonia"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
