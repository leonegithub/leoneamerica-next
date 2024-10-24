"use client";

import Carousel from "@/components/carousel";
import Designer from "@/public/3ddesigner.png";
import Mad from "@/public/mad.png";
import Leaf from "@/public/leaf.png";
import homeOrtho from "@/public/home-ortho.png";
import homeMad from "@/public/home-mad.png";
import homePedo from "@/public/home-pedo.png";
import HomeCard from "@/components/home-card";

import "./style.css";

export default function Home() {
  const items = [
    {
      image: Designer,
      text: "Software 3D Leone Designer",
    },
    {
      image: Leaf,
      text: "Leaf Expander",
    },
    {
      image: Mad,
      text: "Anti Snoring Devices",
    },
  ];

  const homeCards = [
    {
      image: homeMad,
      title: "Home Mad",
      text: "Descrizione per Home Mad.",
    },
    {
      image: homeOrtho,
      title: "Ortodonzia Avanzata",
      text: "Trattamenti ortodontici personalizzati.",
    },
    {
      image: homePedo,
      title: "Pedodonzia",
      text: "Servizi odontoiatrici per i più piccoli.",
    },
  ];

  return (
    <div>
      <Carousel items={items} />
      <div className="container ">
        <p>
          At Leone and LeoneAmerica, quality and customer service are paramount.
          These two goals drive the day-to-day functioning of both campuses and
          are considered at each step of the way
        </p>
      </div>
      <div className="products-home-container flex container mx:auto justify-between">
        <HomeCard items={homeCards} />
      </div>
    </div>
  );
}
