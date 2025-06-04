import Image from "next/image";
import fotoStoria from "./foto-storia.png";
import fotoStoriaDue from "./foto-storia2.png";
import fotoStoriaTre from "./foto-storia3.png";
import fotoStoriaQuattro from "./foto-storia4.png";
import fotoStoriaCinque from "./foto-storia5.png";

export default function OurHistory() {
  return (
    <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/986272799?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Leone S.p.A. Video storico 90anni"
        />
      </div>

      <div className="container pt-5 mx:auto">
        <h1 className="py-2 font-bold blue">1930s - 1940s</h1>
        <p>
          In the 1930s and 1940s, the Mario Pozzi company was founded in 1934 to
          produce stainless steel dental caps. During World War II, sourcing raw
          materials becomes difficult due to military priorities, reducing
          production to a minimum. Florence suffers bombings, but Pozzi&apos;s
          workshop remains unscathed. Despite the difficulties, the company
          perseveres and, at the end of the war, moves production to a larger
          workshop. In 1945, under the Leone brand, it became Italy&apos;s
          leading manufacturer of steel dental caps and other dental products.
        </p>
        <div className="image-container gap-4 grid grid-cols-1 py-4 md:grid-cols-2">
          <Image
            style={{ width: "100%" }}
            src={fotoStoria}
            alt={"global-identity"}
          ></Image>
        </div>

        <h1 className="mt-4 py-2 font-bold blue">1950s - 1960s</h1>
        <p>
          In the 1950s and 1960s, Western Europe experienced a phase of intense
          industrialization and development, and Italy experienced a growth
          economy without precedent, the “Economic Miracle.” This transformation
          led to increased consumption and new lifestyles life, with
          automobiles, household appliances and television becoming commonplace.
          Wages rose, spreading prosperity to more social strata, especially in
          urban centers. In 1961, Mario died at the age of 54. During the
          economic boom, his son Alexander shifted the production of the Leone
          to orthodontics, a growing sector influenced by the American model of
          health and beauty. Alexander&apos;s choice proved to be successful,
          allowing Leone to innovate, grow and be success in the Italian and
          international dental community.
        </p>
        <p className="py-2" style={{ fontStyle: "italic" }}>
          “A child without a smile is like a garden without flowers.”
        </p>
        <div className="image-container mt-4">
          {" "}
          <Image
            style={{ width: "100%" }}
            src={fotoStoriaDue}
            alt={"global-identity"}
          ></Image>
        </div>
        <h1 className="mt-4 py-2 font-bold blue">Florence flood of 1966</h1>
        <p className="py-2" style={{ fontStyle: "italic" }}>
          “For half of Tuscany is swept a fiumicel that springs in Falterona,
          and a hundred miles of course nol satiates.” <br />
          Dante (Purgatorio)
        </p>
        <p>
          On the night of November 3 to 4, 1966, Florence was hit by a
          devastating flood caused by the overflowing of the Arno River after
          heavy rains. Many neighborhoods, including the historic center, were
          submerged by waters exceeding five meters in height. The flood caused
          incalculable economic and artistic damage. Leone, with its workshop on
          Galliano Street, was also submerged by the muddy waters of the river.
          Despite the damage, thanks to the determination of Alessandro and his
          staff, the company resumed production and fulfilled orders after
          little more than a month, demonstrating great resilience in the face
          of devastation.
        </p>
        <div className="image-container mt-4">
          {" "}
          <Image
            style={{ width: "100%" }}
            src={fotoStoriaTre}
            alt={"global-identity"}
          ></Image>
        </div>
        <h1 className="mt-4 py-2 font-bold blue">A new era</h1>
        <p>
          In 1969, when astronaut Neil Armstrong set foot on lunar soil, he
          uttered the iconic words, “One small step for man, but one giant leap
          for mankind.” Leone has experienced continuous and significant growth
          since its inception, becoming a leader in the orthodontic and implant
          industry. In the 1970s, the company expanded internationally and
          introduced a line of fixed orthodontics in Italy. In the 1980s, under
          the economic impetus of the Craxi era, it moved to new premises and
          created with ISO (Istituto Studi Odontoiatrici) a planned and
          organized educational activity that was immediately successful. The
          1990s saw Leone produce its own line of fixed orthodontics in-house,
          leading to the construction of a new industrial site in Sesto
          Fiorentino. From the 2000s, the company launched an innovative implant
          line and embraced emerging digital technologies. Today, under the
          leadership of Elena Pozzi, Leone continues its path of growth and
          innovation.
        </p>
        <div className="image-container mt-4">
          {" "}
          <Image
            style={{ width: "100%" }}
            src={fotoStoriaQuattro}
            alt={"global-identity"}
          ></Image>
        </div>
        <h1 className="mt-4 py-2 font-bold blue">The new Millennium</h1>
        <p>
          In the 2000s, Leone made significant strides in implantology with the
          revolutionary Exacone system. At the same time, the Euro became the
          single currency and digital technology evolved rapidly. In 2010, Elena
          Pozzi took the helm of the company, introducing innovations such as
          anti-snoring devices and the Leaf Expander, as well as founding the
          3DLeone department for dental software. In 2019, Leone launched
          Digital Service Leone, specializing in invisible orthodontics. The
          Covid-19 pandemic in 2020 accelerated digitization and reorganized
          social contacts. Leone has opened branches in America and France, and
          Elena&apos;s children, Olivia and Vittorio, represent the fourth
          generation of the family, ready to take the company forward with a
          modern vision
        </p>
        <div className="image-container mt-4">
          {" "}
          <Image
            style={{ width: "100%" }}
            src={fotoStoriaCinque}
            alt={"global-identity"}
          ></Image>
        </div>
      </div>
    </>
  );
}
