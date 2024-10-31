"use client";

import React, { useState, FormEvent } from "react";
import "./style.css";

const Contatti = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>(""); // Inizializza come stringa vuota
  const [exitCode, setExitCode] = useState<number>(0); // Inizializza come 0

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setExitCode(0); // Inizializza exitCode a 0
    setResponseMessage(""); // Inizializza responseMessage come stringa vuota

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

      const data = await response.json();
      console.log(data);

      setResponseMessage(
        data.ReturnedObject || data.ReturnedError.join("<br/>")
      );
      setExitCode(data.exitCode);
    } catch (error) {
      // Type assertion per gestire errori come `Error`
      if (error instanceof Error) {
        setError(error.message);
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx:auto">
      <h1 className="py-4 font-bold blue">Contact us</h1>
      <div className="row">
        <div className="col-sm-6 col-12 py-5">
          <h3 className="blue text-5xl w-400 pb-4">Leone America</h3>
        </div>
        <div className="col-sm-6 col-12">
          <div className="upper">
            <ul>
              <li>
                1400 Graves Ave. <br />
                Unit AB <br />
                Oxnard, CA 93030-7918
              </li>

              <li> (805) 487-9860</li>
              <a href="mailto:info@leone.it">
                <li>info@leoneamerica.com</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {/* Nome e Cognome sulla stessa riga */}
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                placeholder="Name"
                required
              />
              <label htmlFor="nome" className="form-label">
                Name
              </label>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="form-control"
                placeholder="Surname"
                required
              />
              <label htmlFor="cognome" className="form-label">
                Surname
              </label>
            </div>
          </div>
        </div>

        {/* Email su una riga intera */}
        <div className="row">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="email"
                required
              />
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
            </div>
          </div>
        </div>

        {/* Messaggio su una riga intera */}
        <div className="row">
          <div className="col-12">
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Write a message"
                name="messaggio"
                id="messaggio"
                required
              ></textarea>
              <label htmlFor="messaggio">Write a message</label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary my-1 text-xl"
            >
              Submit
            </button>
          </div>
        </div>

        {responseMessage && (
          <div
            className="response-message text-center"
            style={{
              fontStyle: "italic",
              color: exitCode === 0 ? "green" : "red",
            }}
            dangerouslySetInnerHTML={{ __html: responseMessage }}
          ></div>
        )}
      </form>
    </div>
  );
};

export default Contatti;
