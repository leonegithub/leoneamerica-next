"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import standTablet from "./standTablet.png";
import standDesktop from "./standDesktop.png";
import standMobile from "./standMobile.png";
import "./style.css";
import DefaultButton from "@/components/defaultButton";

const Events = () => {
  interface Event {
    id: string;
    nome: string;
    data_visualizzata: string;
    data_scadenza: Date;
    location: string;
    thumb: string;
    link1?: string;
    testo_link1?: string;
  }

  const [data, setData] = useState<Event[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://php.leone.it/api/GetEventiWeb.php?progetto=leoneamerica", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject);
        setIsLoading(false);
      });
  }, []);

  const today = new Date();

  return (
    <>
      <div className="event-img-container">
        <Image
          className="w-full hidden lg:block"
          src={standDesktop}
          alt="stand-desktop"
        ></Image>
        <Image
          className="w-full hidden md:block lg:hidden"
          src={standTablet}
          alt="stand-tablet"
        ></Image>
        <Image
          className="w-full block md:hidden"
          src={standMobile}
          alt="stand-mobile"
        ></Image>
      </div>
      <div className="container">
        <h1 className="blue font-bold py-4">Events</h1>
        {isLoading ? (
          <div className="event">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {data?.map(
              (event) =>
                new Date(event.data_scadenza) > today && (
                  <div key={event.id} className="event mb-5 align-items-center">
                    <Image
                      width={450}
                      height={450}
                      src={`https://php.leone.it${event.thumb}`}
                      alt={event.nome}
                    />
                    <div className="event-container">
                      <h2 className="event-name pt-3">{event.nome}</h2>
                      <p className="event-date">
                        {parse(event.data_visualizzata)}
                      </p>
                      <p className="event-location">{parse(event.location)}</p>
                      {event.link1 && (
                        <p className="event-details py-2">
                          <Link href={event.link1} target="_blank">
                            <DefaultButton testo={event.testo_link1 || ""} />
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Events;
