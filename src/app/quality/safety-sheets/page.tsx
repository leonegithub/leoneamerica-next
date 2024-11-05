"use client";

import { Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";

interface SafetySheet {
  codiceScheda: string;
  codiceRev: string;
  data: string;
  nomeScheda: string;
  url: string;
}

const QualitySheets = () => {
  const [result, setResult] = useState<SafetySheet[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://php.leone.it/api/GetSchedeSicurezza.php?lingua=EN&mercato=US",
      {
        headers: {
          Authorization:
            "Bearer fraQ-Wk3P_HA27zd_g5JZ_4bH0-Vj1GqCgtx-e6K24_X5Lu-FYpm0p8-bNrc_nce",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.ReturnedObject as SafetySheet[]);
        setLoading(false);
      });
  }, []);

  // ordina per nome scheda
  result.sort((a, b) => {
    const nameA = a.codiceScheda.toUpperCase();
    const nameB = b.codiceScheda.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return (
    <div className="flex">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={""}>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
            </Sidebar.Item>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="safety-sheets container mx:auto">
        <ul>
          {!isLoading &&
            result &&
            result.sort().map((element, index) => (
              <li className="list list-disc blue" key={index}>
                <span className="font-bold">{element.codiceRev}</span> &nbsp;
                <span>{element.data}</span> &nbsp;
                <Link href={element.url}>{element.nomeScheda}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default QualitySheets;
