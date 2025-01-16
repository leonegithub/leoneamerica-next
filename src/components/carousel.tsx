import { useState } from "react";
import { StaticImageData } from "next/image";

interface CarouselProps {
  items: { image: StaticImageData; text: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const length = items.length;

  const handlePrevious = () => {
    const oldIndex = index - 1;
    setIndex(oldIndex < 0 ? length - 1 : oldIndex);
    console.log("ho cliccato indietro");
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    console.log("ho cliccato avanti");
  };

  return (
    <div className="carousel" style={{ backgroundColor: "var(--grigio)" }}>
      <button className="prev" onClick={handlePrevious}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <p className="carousel-text">{items[index].text}</p>
      <button className="next" onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
