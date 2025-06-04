//// filepath: /Users/d.carpentiero/Downloads/leoneamerica-next/src/app/reset/page.tsx
"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ResetPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("IN_EMAIL") as HTMLInputElement;
    const gruppoInput = form.elements.namedItem(
      "IN_GRUPPO"
    ) as HTMLInputElement;

    try {
      const response = await fetch(
        `https://php.leone.it/api/ws_leone/GetPwdResetLink.php?IN_GRUPPO=${gruppoInput.value}&IN_EMAIL=${emailInput.value}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
        }
      );
      const data = await response.json();

      if (data.ExitCode === 0) {
        toast.success(
          "Request completed successfully, please follow the link we have sent to your mailbox to reset your password."
        );
      } else {
        toast.error(data.ReturnedError.join("<br>"));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="max-w-5xl p-4">
        <form
          id="resetPasswordForm"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <h3 className="text-xl py-2 font-semibold ">Insert your e-mail</h3>
          <input
            type="email"
            name="IN_EMAIL"
            id="IN_EMAIL"
            className="w-full  border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="E-mail"
            required
          />
          <input type="hidden" id="IN_GRUPPO" name="IN_GRUPPO" value="3" />
          <button
            type="submit"
            id="invio"
            disabled={isLoading}
            className={` bg-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition ${
              isLoading ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPage;
