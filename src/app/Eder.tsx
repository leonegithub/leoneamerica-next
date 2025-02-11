"use client";

import { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
/* import SearchBar from "@/components/searchbar"; */
import AccordionComponent from "@/components/accordion";
import DropdownComponent from "@/components/dropdown";
import Link from "next/link";
import Image from "next/image";
import logoAmerica from "./Logo-LeoneAmerica2023-2.png";
import "./header.css";
import {
  getOptions1,
  getOptions2,
  getOptions3,
} from "@/components/header-options";

export default function Header() {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const options1 = getOptions1();
  const options2 = getOptions2();
  const options3 = getOptions3();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserId(localStorage.getItem("userId"));
    }
  }, []);

  return (
    <>
      <header className={`p-4 flex items-center`}>
        <div className=" logo">
          <Link href={`/`}>
            <Image src={logoAmerica} width={250} alt="logo-america" />
          </Link>
        </div>
        <nav className="nav-menu flex justify-between">
          <ul className="md:flex hidden items-center space-x-4">
            <li>
              <DropdownComponent options={options1} dropdownLabel="Company" />
            </li>
            <li>
              <DropdownComponent options={options2} dropdownLabel="Products" />
            </li>
            <li>
              <Link href={`/orders`}>Orders</Link>
            </li>
            <li>
              <DropdownComponent options={options3} dropdownLabel="Support" />
            </li>
            <li>
              <Link href={`/events`}>Events</Link>
            </li>
          </ul>
        </nav>
        <Link href={`/login`}>
          {userId ? (
            <div className="hidden md:flex blue flex items-center">
              Personal Area
            </div>
          ) : (
            <div className="hidden md:flex blue flex items-center">
              Register / Login
            </div>
          )}
        </Link>
        <button className="hamburger" onClick={handleShow} aria-label="Menu">
          <i className="fa-solid fa-bars"></i>
        </button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="mobile-body">
              <ul>
                <li>
                  <AccordionComponent
                    options={options1}
                    accordionLabel="Company"
                  />
                </li>
                <li>
                  <AccordionComponent
                    options={options2}
                    accordionLabel="Orthodontics"
                  />
                </li>
                <li>
                  <Link href={`/orders`}>Orders</Link>
                </li>
                <li>
                  <Link href={`/events`}>Events</Link>
                </li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
