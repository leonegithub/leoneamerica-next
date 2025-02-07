import Image from "next/image";
import colonia from "./A0620 colonia.59.421.png";
import "./style.css";

export default function Prodotti() {
  return (
    <div className="prodotti">
      <div className="background-contenitore my-5">
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
          <div className="border p-4">
            <Image src={colonia} alt="colonia"></Image>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4">
              <Image src={colonia} alt="colonia"></Image>
            </div>
            <div className="border p-4">
              <Image src={colonia} alt="colonia"></Image>
            </div>
            <div className="border p-4">
              <Image src={colonia} alt="colonia"></Image>
            </div>
            <div className="border p-4">
              <Image src={colonia} alt="colonia"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
