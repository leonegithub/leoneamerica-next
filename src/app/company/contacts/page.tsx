"use client";

import React, { useState, FormEvent } from "react";
import { Input, Button } from "@nextui-org/react";
import parse from "html-react-parser";
import "./style.css";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageColor, setMessageColor] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("reparto", "servizi-marketing");

      const response = await fetch(
        "https://php.leone.it/api/SendContatto.php",
        {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const result = await response.json();
      console.log(result);
      if (result.ExitCode === 0) {
        setMessage(result.ReturnedObject);
        setMessageColor("green"); // Successo
      } else {
        setMessage(result.ReturnedError.join("<br/>"));
        setMessageColor("red"); // Errore
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="contacts container py-4">
      <h1 className="py-3 font-bold blue text-5xl">Contact us</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className="blocchi mt-5 md:flex">
        <div className="right flex justify-center items-center w-full md:w-1/2 gap-4">
          <div className="info p-5 leading-loose">
            <h1>
              <span className="uppercase">leoneamerica </span>
              <br />
              Dental Products, Inc
            </h1>

            <p>
              <i className="fa-solid fa-location-dot"></i> 1400 Graves Ave. Unit
              AB Oxnard, CA 93030-7918
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> (805) 487-9860
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@leoneamerica.com
            </p>
          </div>
        </div>
        <form className="left p-2 w-full md:w-1/2 gap-4" onSubmit={onSubmit}>
          <Input
            color="primary"
            type="text"
            label="Nome"
            variant="underlined"
            name="nome"
            required
            isRequired
            fullWidth
            size="lg"
          />
          <Input
            color="primary"
            type="text"
            label="Cognome"
            variant="underlined"
            name="cognome"
            required
            isRequired
            fullWidth
            size="lg"
          />
          <Input
            color="primary"
            type="email"
            label="Email"
            variant="underlined"
            name="email"
            required
            fullWidth
            isRequired
            size="lg"
          />
          <Input
            color="primary"
            type="text"
            label="Messaggio"
            variant="underlined"
            name="messaggio"
            fullWidth
            size="lg"
          />
          <Button
            type="submit"
            isLoading={isLoading}
            className="my-4 bg-blue text-white"
            radius="sm"
          >
            Invio
          </Button>
          {message && (
            <div style={{ color: messageColor }} className="mt-4">
              {parse(message)}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
