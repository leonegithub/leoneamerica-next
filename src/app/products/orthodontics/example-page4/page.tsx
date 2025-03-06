import Gallery from "@/components/gallery";
import Tabella from "./pop_micro_tabella.png";
import Focus from "./pop_1.png";
import Focus2 from "./pop_3.png";
import Focus3 from "./pop_micro_1.png";
import Popup from "@/components/popup";
import Image from "next/image";

export default async function ExamplePage() {
  return (
    <div>
      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2">
          <div className="left flex flex-col">
            <h1 className="blue font-bold">POP® MICRO</h1>
            <div className="py-2">
              <p>
                The new POP® MICRO SECTIONAL SCREW is added to the already known
                POP SCREW range to increase the therapeutic chances.
              </p>
              <p>Made of stainless steel and biomedical techno polymer.</p>
              <p>
                The male screw is not in contact with the orthodontic acrylic
                resin: its functionabilty will not be influenced by the quality
                of the technical procedure and/or of non-compliant curing time.
              </p>
              <p>
                Continuous expansion movement: the high pressure injection of
                the polymer allows the perfect copy of the male screw thread
                thus ensuring a steady expansion transmission without the risk
                of undesired turning back into the mouth.
              </p>
              <p>
                The flat shape of the guides and their flexibility allow a more
                gradual deliver of the expansion forces for a physiological
                orthodontic movement.
              </p>
              <p>
                The metallic anchorage side of the screw has two through-holes
                in order to increase retention into the acrylic.
              </p>
              <p>
                The flexibility of the screw could compensate slight relapse due
                to inconsistent use of the appliance by the patient.
              </p>
              <p>
                The high adaptability of the appliance enables a comfortable
                application into the mouth even in the days following
                re-activation.
              </p>
              <p>
                Two embossed arrows on the body indicate the direction of
                opening. When using a color of acrylic resin similar to the
                polymer body, a white arrow provided with the plastic placement
                tab may be easily snapped on to make the direction of activation
                more visible.
              </p>
              <p>Available in 6 colors.</p>
              <ul className="list-disc list-inside blue">
                <li className="text-lg">
                  <strong>A4801-00A</strong>&nbsp; POP SCREWS BLUE MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-00E</strong>&nbsp; POP SCREWS ORANGE MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-00G</strong>&nbsp; POP SCREWS YELLOW MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-00R</strong>&nbsp; POP SCREWS RED MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-00T</strong>&nbsp; POP SCREWS SILVER MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-00V</strong>&nbsp; POP SCREWS GREEN MICRO
                  MONOLATERAL 7 mm 10 pcs
                </li>
                <li className="text-lg">
                  <strong>A4801-90</strong>&nbsp; POP SCREW MICRO MONOLATERAL 7
                  mm MIXED COLORS 10 pcs
                </li>
              </ul>
              {/* <ul className="list-disc list-inside">
                <li>
                  <strong>REF 201A0620-08</strong>&nbsp;PALATAL expander 8 mm
                  FOR TADS
                </li>
                <li>
                  <strong>REF 201A0620-10</strong>&nbsp;PALATAL expander 10 mm
                  FOR TADS
                </li>
                <li>
                  <strong>REF P0201-00</strong>&nbsp;bending instruments for
                  tads attachment
                </li>
              </ul> */}
            </div>
            <div className="flex">
              <Popup
                testo="Details table"
                modalId="modal-image"
                media={<Image src={Tabella} alt={`prodotto-${Tabella}`} />}
              />
              <Popup
                testo="Watch the video"
                modalId="modal-video"
                media={
                  <>
                    <div
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1061988757?badge=0&autopause=0player_id=0&app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="Applicazione freccia POP Micro Monolaterale"
                      />
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Gallery
              featured={Focus}
              images={[Focus, Focus2, Focus3]}
              titles={["caption 2", "caption 3", "caption 4"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
