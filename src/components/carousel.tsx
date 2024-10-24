import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  items: { image: StaticImageData; text: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const length = items.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrevious}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <Image
        className="carousel-image"
        src={items[index].image}
        alt={`carousel ${index}`}
        width={3840}
        height={2160}
      />
      <p className="carousel-text">{items[index].text}</p>
      <button className="next" onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
