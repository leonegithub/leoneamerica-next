import Gallery from "@/components/gallery";
import Tabella from "./rpe-tads-tab.png";
import TadsFocus1 from "./rpe-tads-1.png";
import TadsFocus2 from "./rpe-tads-2.png";
import TadsFocus3 from "./rpe-tads-3.png";
import Popup from "@/components/popup";
import Image from "next/image";

export default async function ExamplePage() {
  return (
    <div>
      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2">
          <div className="left flex flex-col">
            <h1 className="blue font-bold mb-2">RPE for TADs</h1>
            <div className="py-2">
              <p>
                Thanks to almost 90 years of experience in the RPE mechanical
                manufacturing and the forefront attention to the latest
                technological and clinical innovations recently adopted for the
                Maxillary expansion, Leone is proud to launch the new
                Strengthened RPE for TADs. Along with 4 TADs attachments and a
                dedicated Swivel Key allows the construction of customized both
                Hybrid (teeth and Minimplants) and full Bone Borne RPEs.
              </p>
              <p>
                It features two posterior arms and, in the package, four TAD
                attachments are included that can be adapted to the patient’s
                anatomy and welded by the lab on the body of the screw.
              </p>
              <p>
                The strengthened expander ensures high resistance and
                reliability throughout all the therapy.
              </p>
              <p>
                Thanks to the adaptable TADs attachments, it is possible to
                highly customize the RPE on each patient anatomy, both in
                TADs-first and TADs-last approach. Therefore, it can be achieved
                an optimized expansion load distribution on the TADs.
              </p>
              <p>
                Available dedicated pliers for TADs attachments customization.
              </p>
              <ul className="list-disc list-inside">
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
              </ul>
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
              />
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
