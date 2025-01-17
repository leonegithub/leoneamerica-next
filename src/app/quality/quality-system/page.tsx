import "./style.css";
import Image from "next/image";
import Link from "next/link";
import qualita from "./Leone90_stabilimento-19.jpg";
import fotoEsempio from "./Schermata 2024-11-05 alle 11.06.50.png";

export default function QualitySystem() {
  return (
    <div className="quality-system">
      <div className="img-container">
        <Image src={qualita} alt="qualita"></Image>
      </div>
      <div className="container pt-2">
        <h1 className="blue font-bold my-4">Our products are the standard</h1>
        <p>
          Our customers’ expectations are high, but ours are even higher. Leone
          products are fabricated in a technologically-advanced manufacturing
          plant and are subjected to frequent quality checkpoints throughout
          this process, including visual, strength, stability, and functionality
          controls. Nearly 10% of the Leone staff accounts for quality control
          technicians, ensuring quality is our standard. LeoneAmerica products
          are manufactured and processed within the framework of a Quality
          Management System conforming to UNI EN ISO 9001, additional
          requirements of ISO 13485 and according to the FDA Code of Federal
          Regulations (CFR) 21 Part 820 provisions.
        </p>
        <div className="descrizione flex flex-col md:flex-row py-5">
          <div className="left w-full md:w-1/2">
            <Image src={fotoEsempio} alt="foto-esempio" />
          </div>
          <div className="right flex flex-col justify-center w-full md:w-1/2 pl-5">
            <div className="resources-protocols">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link target="_blank" href={"safety-sheets/"}>
                    MSDS (Safety Data Sheets)
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://www.leone.it/servizi/qualita/LeoneSpa_RMI-TC_January2017.pdf"
                    }
                  >
                    MRI Interactions
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"quality-system/quality-info/"}>
                    Product Label Symbols
                  </Link>
                </li>
              </ul>
            </div>
            <div className="resources-protocols">
              <h4>Protocols</h4>
              <ul>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://www.leone.it/servizi/qualita/Scheda-Attivazione-Espansore-Rapido.pdf"
                    }
                  >
                    620 Activation
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://www.leone.it/english/services/download/Leaf_Expander-protocol.pdf"
                    }
                  >
                    Leaf Clinical Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://www.leone.it/english/services/download/Proc_Mini-Implants_Eng.pdf"
                    }
                  >
                    Mini Implants
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="blue font-bold pb-3">General Indications</h1>
        <p>
          Leone products are intended exclusively for orthodontic, implantology,
          and dental use, and should only be used by skilled and/or licensed
          professionals, who will be held solely responsible for the
          construction and application of prostheses, partially or fully
          fabricated with the products manufactured and distributed by Leone and
          LeoneAmerica. For a proper usage of these devices or products, it is
          recommended to use them in conjunction with other original Leone
          products, accessories, and instruments.
        </p>
        <p>
          With the exception of instruments, all products are designed and
          manufactured for single use only. After removal from the patient’s
          mouth, products must be disposed of properly, and according to the
          laws of the jurisdiction in which they were used. We accept no
          responsibility for any damage, injury, or other damages caused by
          reuse of declare single-use products. In the event of multi-use
          products, decontamination and sterilization must occur for products
          that have come into contact with another patient.
        </p>
        <p>
          The effects of metallic orthodontic and implantology devices should be
          carefully monitored during MRI (Magnetic Resonance Imaging). It is
          recommended to instruct the patient to report in advance the presence
          of any type of device or dental materials to the radiology staff in
          charge of the MRI. Ceramic and polymeric products (with the exception
          of certain articles containing medical grade Barium) are not
          radiopaque.
        </p>
      </div>
    </div>
  );
}
