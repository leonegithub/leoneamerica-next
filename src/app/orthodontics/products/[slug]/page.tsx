"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import "./style.css";

export default function Pop() {
  const router = useRouter();
  const { slug } = useParams();
  interface Product {
    id: string;
    nome: string;
    immagine_focus: string;
    descrizione: string;
    immagine_header: string;
  }

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const productData = sessionStorage.getItem("selectedProduct");
    if (productData) {
      const parsedProduct = JSON.parse(productData);
      setProduct(parsedProduct);
    }
  }, [slug, router]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="contenitore-pop d-flex flex-column align-items-center">
        <div className="container-fluid pop row">
          <div className="left col-12 col-lg-6">
            <h1 className="pop-title">
              <span>{product.nome}</span>
            </h1>
          </div>
          <div className="right col-12 col-lg-6">
            <Image
              src={`https://php.leone.it/${product.immagine_header}`}
              alt={product.nome}
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="container-fluid pop row">
          <div className="left col-12 col-lg-6">
            <p className="text">{parse(product.descrizione)}</p>
          </div>
          <div className="right col-12 col-lg-6">
            <Image
              className="desc"
              src={`https://php.leone.it/${product.immagine_focus}`}
              alt="desc"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
