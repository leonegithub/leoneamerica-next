import Image from "next/image";
import Link from "next/link";
import Software from "../../../../public/Software.png";
import leone1 from "./3dleone_1.png";
import leone2 from "./3dleone_2.png";
import leone3 from "./3dleone_3.png";
import leone4 from "./3dleone_4.png";
import leone5 from "./3dleone_5.png";
import leone6 from "./3dleone_6.png";
/* import MadTablet from "../../../../public/MadTablet.png";
import MadMobile from "../../../../public/MADmobile.png"; */

import "./style.css";

const focuses = [
  {
    picture: leone1,
    title: "Models orientation",
  },
  {
    picture: leone2,
    title: "Screw position definition",
  },
  {
    picture: leone3,
    title: "Bands definition",
  },
  {
    picture: leone4,
    title: "Arms definition",
  },
  {
    picture: leone5,
    title: "Support definition",
  },
  {
    picture: leone6,
    title: "Review & Export",
  },
];

export default function LeoneDesigner() {
  return (
    <div className="prodotti">
      <div className="background-contenitore mb-4">
        <Image src={Software} alt="mad"></Image>
        <div className="container px-5 white">
          <div className=" absolute top-[25%] md:top-1/2  transform -translate-y-1/2">
            <h3 className=" text-xl md:text-4xl lg:text-5xl">
              <strong>Software</strong>
            </h3>
            <h3 className="text-xl font-bold md:text-5xl lg:text-7xl">
              3DLeone Designer
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex flex-col px-4">
            <p>
              <strong>3DLeone Designer</strong> is the first software based on a
              simple driven workflow for the digital design of customized
              framework to be coupled with our innovative CAD-CAM expanders.
            </p>
            <p>
              Based on our experience with many different software in the dental
              field and due to the increased customer requests, Leone has made
              out an innovative and intuitive software for the design of bands,
              supports, and expander arms. It can automatically place the
              expander in the right position, in a very short time and
              regardless of digital skills.
            </p>
            <p>
              <strong>3DLeone Designer</strong> software can upload and manage
              .STL files of both upper and lower arches, obtained with a
              laboratory scanner or directly with an intra-oral scanner: its
              library includes all the range of Leone CAD-CAM expanders
              available.
            </p>
            <p>
              Once the digital driven workflow is completed, thanks to
              innovative technology (Selective Laser Melting) the designed .STL
              file will become a high precision sintered framework and will be
              coupled perfectly with the chosen Leone CAD-CAM expander. The
              framework and the expander will be then permanent laser welded.
            </p>
            <Link href={`https://www.3dleone.it/en`} target="_blank">
              <button
                type="button"
                className="self-start my-4 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                More info
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {focuses.map((focus) => (
              <div className=" flex flex-col ">
                <Image
                  className="border"
                  src={focus.picture}
                  alt="imgA"
                ></Image>
                <span className="blue pt-3 text-lg font-semibold">
                  {focus.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
