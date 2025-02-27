"use client";

import Image, { StaticImageData } from "next/image";
import "./gallery.css";
import { useState } from "react";

interface GalleryProps {
  featured: StaticImageData;
  images: StaticImageData[];
  titles: string[];
}

export default function Gallery({ featured, images, titles }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(featured);

  return (
    <div className="grid gap-4">
      <div className="featured-container flex justify-center">
        <Image
          className="h-auto p-5 max-w-full rounded-lg"
          height={500}
          width={500}
          src={selectedImage}
          alt={`image ${selectedImage}`}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(images) &&
          images.map((image, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedImage(image)}
              key={index}
            >
              <Image
                className="h-auto p-2 max-w-full rounded-lg"
                src={image}
                alt={`img-element ${index}`}
              />
              <p className="blue underline">{titles[index]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
