"use client";

import { Carousel } from "react-bootstrap";
import Leaf from "../../public/Leaf 2.png";
import LeafTablet from "../../public/LeafTablet.png";
import LeafMobile from "../../public/Leaf2Mobile.png";
import Mad from "../../public/MAD.png";
import MadTablet from "../../public/MadTablet.png";
import MadMobile from "../../public/MADmobile.png";
import Software from "../../public/Software.png";
import SoftwareTablet from "../../public/SoftwareTablet.png";
import SoftwareMobile from "../../public/SoftwareMobile.png";
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
      image: homeOrtho,
      title: "Orthodontics",
      text: "Clinicians and their staff are presented with products such as direct bonding brackets and archwires, while laboratory technicians can find an extensive range of expansion screws, wire, and acrylic.",
      link: "products/orthodontics",
    },
    {
      image: homePedo,
      title: "Pedodontics",
      text: "Products specifically designed or recommended for pediatric or early-stage orthodontic uses can be found as part of our “OK, Orthodontics for Kids” line",
      link: "products/pedodontics",
    },
    {
      image: homeMad,
      title: "Sleep Apnea",
      text: "These intraoral nighttime appliances can treat snoring by acting directly on the cause by pushing the lower jaw forward.",
      link: "products/sleep-apnea",
    },
  ];

  return (
    <div>
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <div className="relative">
            {/* desktop */}
            <Image src={Mad} alt="mad" className="w-full hidden lg:block" />
            {/* tablet */}
            <Image
              src={MadTablet}
              alt="software"
              className="w-full hidden md:block lg:hidden"
            />
            {/* mobile */}
            <Image
              src={MadMobile}
              alt="software-mobile"
              className="w-full block md:hidden"
            />
            <div className="mad-slide absolute left-10 lg:left-28 top-[25%] md:top-1/2  transform -translate-y-1/2">
              <h3 className="mad-slide text-xl md:text-4xl lg:text-4xl">
                <strong>Sleep Apnea</strong>
              </h3>
              <h2 className="font-bold text-5xl md:text-6xl lg:text-9xl">
                M.A.D.
              </h2>
              <h3 className="text-xl md:text-5xl lg:text-6xl">
                Anti snoring devices
              </h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            href="https://leafexpander.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              {/* desktop */}
              <Image src={Leaf} alt="mad" className="w-full hidden lg:block" />
              {/* tablet */}
              <Image
                src={LeafTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              />
              {/* mobile */}
              <Image
                src={LeafMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              />
              <div className="absolute left-10 lg:left-28 top-[30%] md:top-1/2  transform -translate-y-1/2">
                <h3 className="leaf-slide text-xl md:text-4xl lg:text-4xl">
                  <strong>Leaf Expander</strong>&reg; <span>Series</span>
                </h3>

                <h2 className="leaf-slide text-4xl md:text-6xl lg:text-9xl">
                  <strong>no home</strong>
                  <br />
                  <span>activation</span>
                </h2>
              </div>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            href="https://www.3dleone.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              {/* desktop */}
              <Image
                src={Software}
                alt="software"
                className="w-full hidden lg:block"
              />
              {/* tablet */}
              <Image
                src={SoftwareTablet}
                alt="software"
                className="w-full hidden md:block lg:hidden"
              />
              {/* mobile */}
              <Image
                src={SoftwareMobile}
                alt="software-mobile"
                className="w-full block md:hidden"
              />
              <div className="absolute flex justify-center lg:justify-normal w-full lg:left-28 top-1/2 transform -translate-y-1/2 text-white">
                <h2 className="font-bold xl:pb-8 text-4xl md:text-4xl lg:text-4xl">
                  Software
                  <br />
                  <span className="font-bold text-4xl md:text-6xl lg:text-8xl">
                    3DLeone Designer
                  </span>
                </h2>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
      <div className="container flex justify-center">
        <p className="small-container py-5">
          At Leone and LeoneAmerica, quality and customer service are paramount.
          These two goals drive the day-to-day functioning of both campuses and
          are considered at each step of the way
        </p>
      </div>
      <div className="products-home-container flex container mx:auto justify-center lg:justify-between">
        <HomeCard items={homeCards} />
      </div>
    </div>
  );
}
