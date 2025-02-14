import Image from "next/image";
import Link from "next/link";
/* import Mad from "../../../../public/MAD.png";
import MadTablet from "../../../../public/MadTablet.png";
import MadMobile from "../../../../public/MADmobile.png"; */
import imgA from "./Img_A_cb007d3ef2.bmp";
import imgC from "./Img_C_b2bfe7f7fd.bmp";
import largeSintex1 from "./large_Sintex_ad0f509fad.webp";
import largeSintex2 from "./large_Sintex_2_ac927b2c8d.webp";
import "./style.css";

export default function LeoneDesigner() {
  return (
    <div className="prodotti">
      <div className="background-contenitore mb-4">
        {/*  <Image src={Mad} alt="mad"></Image> */}
        <div className="container px-5 blue">
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

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex flex-col px-4">
            <p>
              3D Leone Designer is the first software based on an easy and
              driven workflow for the digital design of customized framework to
              be coupled with our innovative CAD-CAM expanders. Based on our
              experience with many different software in the dental field and
              due to the increased customer’s requests, Leone has realized an
              innovative and intuitive software that allow to design, not only
              bands and supports, but even the expander arms with automatically
              placing the expander in the right position, without spending too
              much time and no need of digital skills. 3D Leone Designer
              software allow to upload and manage STL files of both upper and
              lower arch, obtained from laboratory scanner or directly from
              intra-oral scanner, and it has already in library all the range of
              Leone CAD-CAM expander available.
            </p>
            <p>
              Once the digital and driven workflow will be done, the STL file
              designed will become, thanks to an innovative technology called
              Selective Laser Melting, a high precision sintered framework and
              will be coupled perfectly with the chosen Leone CAD-CAM expander.
              The framework and the expander will be then permanently laser
              welded.
            </p>
            <Link href={`https://www.3dleone.it`} target="_blank">
              <button
                type="button"
                className="self-start my-4 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                More info
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col ">
              <Image className="border" src={imgA} alt="imgA"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>

            <div className=" flex flex-col ">
              <Image className="border" src={imgC} alt="imgC"></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image
                className="border"
                src={largeSintex1}
                alt="largeSintex1"
              ></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
            <div className=" flex flex-col ">
              <Image
                className="border"
                src={largeSintex2}
                alt="largeSintex2"
              ></Image>
              <span className="blue pt-3 text-lg font-semibold">Testo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
