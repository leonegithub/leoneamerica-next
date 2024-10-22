import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Option {
  label: string;
  href: string;
}

interface AccordionComponentProps {
  options: Option[];
  accordionLabel: string;
  showPrivacyOptions?: boolean;
}

function AccordionComponent({
  options,
  accordionLabel,
  showPrivacyOptions = false,
}: AccordionComponentProps) {
  const { locale } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const togglePrivacyAccordion = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-md">
      <button
        className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{accordionLabel}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="py-1">
                <Link
                  href={option.href}
                  className="text-blue-600 hover:underline"
                >
                  {option.label}
                </Link>
              </li>
            ))}
            {showPrivacyOptions && (
              <div className="mt-4">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  onClick={togglePrivacyAccordion}
                >
                  <span>Privacy</span>
                  <span
                    className={`transform transition-transform ${
                      isPrivacyOpen ? "rotate-180" : ""
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                {isPrivacyOpen && (
                  <div className="p-4 border-t border-gray-300">
                    <ul>
                      <li className="py-1">
                        <Link
                          href={`/${locale}/azienda/privacy/privacy-policy`}
                          className="text-blue-600 hover:underline"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          href={`/${locale}/azienda/privacy/cookie-policy`}
                          className="text-blue-600 hover:underline"
                        >
                          Cookie policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccordionComponent;
