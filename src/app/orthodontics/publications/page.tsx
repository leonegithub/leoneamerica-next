"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./style.css";

interface Publication {
  id: number;
  titolo: string;
  descrizione: string;
  autori: string;
  link: string;
  pubblicazione: string;
}

const GetPublications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://php.leone.it/api/GetPubblicazioni.php?lingua=EN", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPublications(data.ReturnedObject);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="blue font-bold py-5">Publications and literature</h1>
      <ul className="publication-list">
        {publications.map((publication) => (
          <li key={publication.id} className="publication-item">
            <h3 className="title">{publication.titolo}</h3>
            <div className="authors">{publication.autori}</div>
            <div className="publication-info">{publication.pubblicazione}</div>
            {publication.link !== "" && (
              <Link href={publication.link} className="link">
                Go to publication
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetPublications;
