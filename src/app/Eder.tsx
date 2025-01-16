"use client";

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import SearchBar from "@/components/searchbar";
import AccordionComponent from "@/components/accordion";
import DropdownComponent from "@/components/dropdown";
import Link from "next/link";
import Image from "next/image";
import logoAmerica from "./Logo-LeoneAmerica2023-2.png";
import "./header.css";
import { getOptions1, getOptions2 } from "@/components/header-options";

export default function Header() {
  const [show, setShow] = useState(false);

  const options1 = getOptions1();
  const options2 = getOptions2();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <header className={`p-4 flex items-center`}>
        <div className=" logo">
          <Link href={`/`}>
            <Image src={logoAmerica} width={250} alt="logo-america" />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul className="flex items-center space-x-4">
            <li>
              <DropdownComponent options={options1} dropdownLabel="Company" />
            </li>
            <li>
              <DropdownComponent
                options={options2}
                dropdownLabel="Orthodontics"
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
        <div className={`searchbar flex items-center`}>
          <SearchBar value="" onChange={handleChange} />
          <div className="mobile-searchbar"></div>
          <button className="hamburger" onClick={handleShow} aria-label="Menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

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
