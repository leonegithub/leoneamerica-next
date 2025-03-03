import Gallery from "@/components/gallery";
import Tabella from "./twin-wing_tabella.png";
import TadsFocus1 from "./0000-TwinWingclassIIcorrector-header.png";
import TadsFocus2 from "./0000-TwinWingclassIIcorrector-focus.png";
import TadsFocus3 from "./twin-wing_2.png";
import Popup from "@/components/popup";
import Image from "next/image";

export default async function ExamplePage() {
  return (
    <div>
      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2">
          <div className="left flex flex-col">
            <h1 className="blue font-bold">Twin Wing class II corrector</h1>
            <div className="py-2">
              <p>
                Thanks to our experience gained with MAD appliance and based on
                the fundaments of the most widely used orthodontic appliance for
                the treatment of Class II patients with mandibular retraction,
                we have miniaturized and reengineered the Forward! to
                manufacture the Twin Wing.
              </p>
              <p>
                The kit, especially designed for the realization of this
                innovative appliance, contains all the components for an easier
                and more precise construction.
              </p>
              <p>
                The appliance, thanks to the 70° inclination between the upper
                screws and the lower wings, scientifically and clinically proven
                as the most efficient for the stimulation of the mandibular
                growth, allows the millimetric advancement of the lower jaw.
              </p>
              <p>
                Thanks to the adaptable TADs attachments, it is possible to
                highly customize the RPE on each patient anatomy, both in
                TADs-first and TADs-last approach. Therefore, it can be achieved
                an optimized expansion load distribution on the TADs. Moreover,
                in case of deep bite, since the occlusal surface can be kept
                free from the presence of block, it is possible to exclude some
                teeth from the contact with the acrylic, promoting a guided
                extrusion and consequently the resolution of vertical problems.
              </p>
              <p>
                The kit for the construction of 1 appliance is made up of:{" "}
                <br /> 2 upper screws, 1 right and 1 left <br /> 2 lower wings
                with steel frame, 1 right and 1 left
              </p>
              <ul className="list-disc list-inside blue">
                <li className="text-lg">
                  <strong>A0840-05</strong>&nbsp; 1 appliance
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
              {/* <Popup
                testo="Watch the video"
                modalId="modal-video"
                media={
                  <>
                    <div
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1060892635?badge=0&autopause=0&player_id=0&app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="RPE for TADs"
                      />
                    </div>
                  </>
                }
              /> */}
            </div>
          </div>
          <div className="flex flex-col">
            <Gallery
              featured={TadsFocus1}
              images={[TadsFocus1, TadsFocus2, TadsFocus3]}
              titles={["caption 2", "caption 3", "caption 4"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
