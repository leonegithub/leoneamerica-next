import "./home-card.css";
import Link from "next/link";

interface HomeCardProps {
  items: {
    title: string;
    text: string;
    link: string;
  }[];
}

export default function HomeCard({ items }: HomeCardProps) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="product-card flex flex-col justify-between">
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
          <div className="btn-container">
            <button className="self-start">
              <Link href={item.link} target="_blank">
                Learn more
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
