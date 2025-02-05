"use client";

import { Carousel } from "react-bootstrap";
import Leaf from "../../public/Leaf 2.png";
import Mad from "../../public/MAD.png";
import Software from "../../public/Software.png";
import homeOrtho from "../../public/home-ortho.png";
import homeMad from "../../public/home-mad.png";
import homePedo from "../../public/home-pedo.png";
import HomeCard from "@/components/home-card";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Home() {
  const homeCards = [
    {
      image: homeMad,
      title: "Orthodontics",
      text: "Clinicians and their staff are presented with products such as direct bonding brackets and archwires, while laboratory technicians can find an extensive range of expansion screws, wire, and acrylic.",
      link: "products/orthodontics",
    },
    {
      image: homeOrtho,
      title: "Pedodontics",
      text: "Products specifically designed or recommended for pediatric or early-stage orthodontic uses can be found as part of our “OK, Orthodontics for Kids” line",
      link: "products/pedodontics",
    },
    {
      image: homePedo,
      title: "Sleep Apnea",
      text: "These intraoral nighttime appliances can treat snoring by acting directly on the cause by pushing the lower jaw forward.",
      link: "products/sleep-apnea",
    },
  ];

  return (
    <div>
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <Image src={Mad} alt="mad"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Link href={`https://leafexpander.com/`} target="_blank">
            <Image src={Leaf} alt="Leaf"></Image>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link href={`https://www.3dleone.it/`} target="_blank">
            <Image src={Software} alt="software"></Image>
          </Link>
        </Carousel.Item>
      </Carousel>
      <div className="container flex justify-center">
        <p className="small-container">
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
