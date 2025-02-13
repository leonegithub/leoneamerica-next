import Image from "next/image";
import Mad from "../../../../public/MAD.png";
/* import MadTablet from "../../../../public/MadTablet.png";
import MadMobile from "../../../../public/MADmobile.png"; */
import dsc0310 from "./DSC_0310.jpg";
import dsc0314 from "./DSC_0314.jpg";
import dsc0327 from "./DSC_0327.jpg";
import dsc0353 from "./DSC_0353.jpg";
import "./style.css";

export default function Prodotti() {
  return (
    <div className="prodotti">
      <div className="background-contenitore mb-4">
        <Image src={Mad} alt="mad"></Image>
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
              These intraoral nighttime appliances can treat snoring by acting
              directly on the mechanism which is the cause of it, by pushing the
              jaw forward. Mandibular repositioning pushes tongue forward and
              keeps epiglottis apart from uvula, thus solving the vibration of
              the soft tissues of the palate to the passage of air which creates
              the snoring sound. mad appliances are also used for the treatment
              of sleep apnea (osa) as they can solve the obstruction of rear
              airway tissues by restoring breathing capacity during sleep.
            </p>
            <p>
              The American Academy of Dental Sleep Medicine reports that
              bimaxillary appliances made in the laboratory are more effective
              and, above all, allow a further gradual progress of 4-5 mm since
              the first check bite registration. There exist several mad design
              appliances worldwide used to treat snoring and obstructive sleep
              apnea: we have decided to accomplish and improve the components
              which are used for the most widely known appliances, thus having
              better evidence of clinical and scientific efficacy. This is our
              proposal in compliance with the requirements of any clinical
              specialist: appliance efficiency, high safety standards, stability
              and comfort for patient.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
