import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Dropdown } from "flowbite-react"; // Importiamo il componente Dropdown di Flowbite

interface Option {
  label: string;
  href: string;
}

interface DropdownComponentProps {
  options: Option[];
  dropdownLabel: string;
  showPrivacyOptions?: boolean;
}

export default function DropdownComponent({
  options,
  dropdownLabel,
  showPrivacyOptions = false,
}: DropdownComponentProps) {
  const { locale } = useParams();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const togglePrivacyDropdown = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <Dropdown label={dropdownLabel} inline className="relative">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {options.map((option, index) => (
          <Dropdown.Item key={index}>
            <Link href={option.href}>
              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {option.label}
              </span>
            </Link>
          </Dropdown.Item>
        ))}

        {showPrivacyOptions && (
          <>
            <Dropdown.Item
              onClick={togglePrivacyDropdown}
              className="flex justify-between w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Privacy
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transform transition-transform duration-200 ${
                  isPrivacyOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Dropdown.Item>

            {isPrivacyOpen && (
              <div className="ml-4">
                <Link href={`/${locale}/azienda/privacy/privacy-policy`}>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Privacy policy
                  </span>
                </Link>
                <Link href={`/${locale}/azienda/privacy/cookie-policy`}>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cookie policy
                  </span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </Dropdown>
  );
}
