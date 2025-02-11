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
    IDIva: string;
    CodiceFiscale: string;
    CodiceSDI: string;
    FlgComCom: string;
    DataInserimento: string;
    FlgEmailConfermata: boolean;
    FlgControllatoPiva: boolean;
    PEC?: string;
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
    <div className="container mx-auto p-4">
      {data ? (
        <>
          <h1 className="text-3xl font-bold my-4">Your Registration Data</h1>
          <div className="space-y-2 text-lg leading-relaxed text-gray-800">
            <p>
              <strong>Company Name:</strong> {data.RS}
            </p>
            <p>
              <strong>Email:</strong> {data.Email}
            </p>
            <p>
              <strong>First Name:</strong> {data.Nome}
            </p>
            <p>
              <strong>Last Name:</strong> {data.Cognome}
            </p>
            <p>
              <strong>Address:</strong> {data.Indirizzo}
            </p>
            <p>
              <strong>Street Number:</strong> {data.NumeroCivico}
            </p>
            <p>
              <strong>City:</strong> {data["Città"]}
            </p>
            <p>
              <strong>Postal Code:</strong> {data.CAP}
            </p>
            <p>
              <strong>Country:</strong> {data.Paese}
            </p>

            <p>
              <strong>Type:</strong> {data.Tipologia}
            </p>
            <p>
              <strong>Consent to Commercial Communications:</strong>{" "}
              {data.FlgComCom === "0" ? "No" : "Yes"}
            </p>
            <p>
              <strong>Registration Date:</strong> {data.DataInserimento}
            </p>
            {data.Paese === "IT" && (
              <p>
                <strong>PEC:</strong>{" "}
                {data.PEC === "" ? (
                  <span className="text-red-600">Not provided</span>
                ) : (
                  data.PEC
                )}
              </p>
            )}
          </div>

          <button
            onClick={handleLogout}
            type="button"
            className="mt-4 py-2 px-4 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
