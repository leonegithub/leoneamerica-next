"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Offcanvas } from "react-bootstrap";
import SearchBar from "@/components/searchbar";
import AccordionComponent from "@/components/accordion";
import DropdownComponent from "@/components/dropdown";
import Link from "next/link";
import Image from "next/image";
import logoAmerica from "./Logo-Leone®America2023-2.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "./header.css";
import {
  getOptions1,
  getOptions2,
  getOptions3,
  getOptions4,
} from "@/components/header-options";

export default function Header() {
  const [show, setShow] = useState(false);

  const options1 = getOptions1();
  const options2 = getOptions2();
  const options3 = getOptions3();
  const options4 = getOptions4();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className={`p-5 flex items-center`}>
        <div className=" logo">
          <Link href={`/`}>
            <Image src={logoAmerica} width={250} alt="logo-america" />
          </Link>
        </div>
        <nav className="nav-menu">
          <ul className={`flex space-x-4`}>
            <li>
              <DropdownComponent options={options1} dropdownLabel="Company" />
            </li>
            <li>
              <DropdownComponent
                options={options3}
                dropdownLabel="Orthodontics"
              />
            </li>
            <li>
              <DropdownComponent options={options4} dropdownLabel="Orders" />
            </li>
            <li>
              <DropdownComponent options={options2} dropdownLabel="Events" />
            </li>
          </ul>
        </nav>
        <div className={`searchbar flex items-center`}>
          <div className="mobile-searchbar">
            <SearchBar />
          </div>
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
                    options={options3}
                    accordionLabel="Orthodontics"
                  />
                </li>
                <li>
                  <AccordionComponent
                    options={options4}
                    accordionLabel="Orders"
                  />
                </li>
                <li>
                  <AccordionComponent
                    options={options2}
                    accordionLabel="Events"
                  />
                </li>
                <li className="mobile-searchbar">
                  <SearchBar />
                </li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
