"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import UserData from "@/components/PersonalData";
import "./style.css";

const PersonalArea = () => {
  const router = useRouter();
  const { userId, setUserId, setUserData } = useAuth();
  const [data, setData] = useState<User | null>(null);
  const tabs = ["Profile", "Downloads", "Shop", "Purchased"];
  const [activeTab, setActiveTab] = useState("Profile");

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
          setUserData(result.ReturnedObject);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [userId, router, setUserData]);

  const handleLogout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div className="container personal flex flex-col justify-between mx-auto p-4">
      <div className="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab} className="me-2">
              <a
                onClick={() => setActiveTab(tab)}
                className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                  activeTab === tab
                    ? "blue border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {data ? (
        <>
          {activeTab === "Profile" ? <UserData data={data} /> : ""}

          <button
            onClick={handleLogout}
            type="button"
            className="self-start mt-4 py-2 px-4 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
