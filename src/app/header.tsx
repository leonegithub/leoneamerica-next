"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

import DropdownComponent from "@/components/dropdown";
import Link from "next/link";
import Image from "next/image";
import logoAmerica from "./Logo-Leone®America2023-2.png";
import {
  getOptions1,
  getOptions2,
  getOptions3,
  getOptions4,
} from "@/components/header-options";

export default function Header() {
  const options1 = getOptions1();
  const options2 = getOptions2();
  const options3 = getOptions3();
  const options4 = getOptions4();
  const [showSidebar, setShowSidebar] = useState(false);

  const { locale } = useParams();

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className={`flex items-center`}>
      <div className="pe-5 logo">
        <Link href={`/${locale}`}>
          <Image src={logoAmerica} width={140} alt="logo-america" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul className={`flex space-x-4`}>
          <li>
            <DropdownComponent
              options={options1}
              dropdownLabel="Company"
              showPrivacyOptions={true}
            />
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
        <button onClick={handleToggleSidebar} aria-label="Menu">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {/* Aggiungi qui gli elementi del sidebar */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            {/* Aggiungi gli altri link qui... */}
          </ul>
        </div>
      </aside>
    </header>
  );
}
