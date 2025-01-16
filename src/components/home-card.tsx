import Image, { StaticImageData } from "next/image";
import "./home-card.css";

interface HomeCardProps {
  items: {
    image: StaticImageData;
    title: string;
    text: string;
  }[];
}

export default function HomeCard({ items }: HomeCardProps) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="product-card ">
          <div
            className="squared"
            style={{
              height: 300,
              width: 400,
              backgroundColor: "var(--grigio)",
            }}
          ></div>
          {/*  <Image
            style={{ backgroundColor: "var(--grigio)" }}
            src={item.image}
            alt={`immagine ${item.title}`}
          /> */}
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <button>Learn more</button>
        </div>
      ))}
    </>
  );
}
