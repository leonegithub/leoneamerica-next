import Gallery from "@/components/gallery";
import Tabella from "./pop_tabella.png";
import Focus from "./pop_2.png";
import Focus2 from "./pop_4.png";
import Focus3 from "./pop_5.png";
import Popup from "@/components/popup";
import Image from "next/image";

export default async function ExamplePage() {
  return (
    <div>
      <div className="prodotti container mx-auto pt-5 pb-4">
        <div className="grid grid-cols-2">
          <div className="left flex flex-col">
            <h1 className="blue font-bold">POP® Screw Universal</h1>
            <div className="py-2">
              <p>
                Made of stainless steel and biomedical techno polymer. <br />
                The male screw is not in contact with the orthodontic acrylic
                resin: the function of the screw will not be influenced by the
                quality of the technical procedure and a non-compliant curing
                time.
              </p>
              <p>
                Continuous expansion movement: the high pressure injection of
                the polymer allows the perfect copy of the male thread of the
                screw thus ensuring a steady expansion transmission without the
                risk of undesired turning back in the mouth. <br />
                The self-centering rectangular guides ensure a biomechanical and
                absolutely controlled symmetrical expansion.
              </p>
              <p>
                The flat shape of the guides and their flexibility allow the
                gradual release of the expansion with a physiological
                orthodontic movement. <br />
                The flexibility of the screw allows the adjustments of any
                dental regress due to inconsistent use of the appliance by the
                patient, thus being very effective with holding devices
                following a rapid expansion treatment. <br />
                The high adaptability of the appliance enables a comfortable
                application in the mouth in the days following re-activation.
              </p>
              <p>
                Two embossed arrows on the body indicate the direction of
                opening. When using a color of acrylic resin similar to the
                polymer body, a white arrow provided with the plastic placement
                tab may be easily applied to make the direction of activation
                visible.
              </p>
              <p>
                The placement plastic tab, made of two pieces combined with a
                unique geometry, allows a perfect protection of the holes from
                the acrylic resin during the packing procedure and facilitates
                the removal after the curing cycle. <br />
                The screw body is available in 6 colors.
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
              <Popup
                testo="Watch the video"
                modalId="modal-video"
                media={
                  <>
                    <div
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1060384328?badge=0autopause=0player_id=0app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="POP Positioning procedure"
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
