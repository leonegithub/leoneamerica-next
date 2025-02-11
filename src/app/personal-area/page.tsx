"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const PersonalArea = () => {
  const router = useRouter();
  const { userId, setUserId } = useAuth();
  interface User {
    Nome: string;
    Cognome: string;
    Tipologia: string;
    Email: string;
    RS: string;
    Indirizzo: string;
    NumeroCivico: string;
    Città: string;
    CAP: string;
    Paese: string;
    DataInserimento: string;
    FlgEmailConfermata: boolean;
    FlgControllatoPiva: boolean;
  }

  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    if (!userId) {
      router.push("/login");
    } else {
      fetch(
        `https://php.leone.it/api/ws_leone/GetUser.php?IN_USERID=${userId}`,
        {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result.ReturnedObject);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [userId, router]);

  const handleLogout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div className="container mx-auto py-4">
      {data ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            {data.Nome} {data.Cognome}
          </h2>
          <ul className="list-none text-lg">
            <li className="py-1">
              <span className="font-bold">Email:</span> {data.Email}
            </li>
            <li className="py-1">
              <span className="font-bold">Address:</span> {data.Indirizzo}
            </li>
            <li className="py-1">
              <span className="font-bold">City:</span> {data["Città"]},{" "}
              {data.CAP}
            </li>
            <li className="py-1">
              <span className="font-bold">Country:</span> {data.Paese}
            </li>
            <li className="py-1">
              <span className="font-bold">Data Inserimento:</span>{" "}
              {data.DataInserimento}
            </li>
          </ul>
          <button
            onClick={handleLogout}
            type="submit"
            className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="p-4 text-center">Loading...</p>
      )}
    </div>
  );
};

export default PersonalArea;
