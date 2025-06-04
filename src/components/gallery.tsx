"use client";

import Image, { StaticImageData } from "next/image";
import "./gallery.css";
import { useState } from "react";

interface GalleryProps {
  featured: StaticImageData | string;
  images: (StaticImageData | string)[];
}

export default function Gallery({ featured, images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(featured);

  const validImages = images.filter((image) => image !== null && image !== "");

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
      <div className="grid grid-cols-8 gap-4">
        {validImages.map((image, index) => (
          <div onClick={() => setSelectedImage(image)} key={index}>
            <Image
              height={500}
              width={500}
              className={`h-auto product-image p-2 max-w-full rounded-lg ${
                selectedImage === image ? "selected" : ""
              }`}
              src={image ?? null}
              alt={`img-element ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
