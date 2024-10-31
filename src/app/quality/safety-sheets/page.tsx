"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";

const QualitySheets = () => {
  const [result, setResult] = useState<any[]>([]);
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
        setResult(data.ReturnedObject);
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
    <div className="safety-sheets container mx:auto">
      <ul>
        {result &&
          result.sort().map((element, index) => (
            <li className="list list-disc blue" key={index}>
              <span className="font-bold">{element.codiceRev}</span> &nbsp;
              <span>{element.data}</span> &nbsp;
              <Link href={element.url}>{element.nomeScheda}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QualitySheets;
