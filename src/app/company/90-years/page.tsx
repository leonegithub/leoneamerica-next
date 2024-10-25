import Image from "next/image";
import globalIdentity from "./global-identity.png";
import ninetyYears from "./90-years.png";
import Link from "next/link";

const frames = [
  {
    src: globalIdentity,
    text: "New global identity",
    url: "90-years/new-global-identity",
  },
  {
    src: ninetyYears,
    text: "Behind innovation, our history",
    url: "90-years/our-history",
  },
];

export default function Ninety() {
  return (
    <div className="90-years container mx:auto">
      <h1 className="py-4 font-bold blue">
        Tradition meets the future, our journey 90 years after
      </h1>
      <p>
        2024 an extraordinary milestone: 90 years of commitment, dedication and
        success. A journey that has taken us through decades of change,
        innovation and steady growth. But how can we honor our long tradition
        and, at the same time, look to the future? The answer is simple and we
        can sum it up in a few words: Tradition Meets the Future.The new claim
        represents a bridge between the past and the present, between the
        company's deep roots and the aspiration to innovate and grow with a
        bold, future-oriented vision, with a focus on the digital world.
      </p>
      <div className="frames-container py-5 grid gap-4 grid-cols-1 md:grid-cols-2">
        {frames.map((frame, index) => (
          <div className="frame" key={index}>
            <Link href={frame.url}>
              <div className="image-container">
                <Image src={frame.src} alt={frame.text}></Image>
              </div>
              <h4 className="text-2xl py-3 underline">{frame.text}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
