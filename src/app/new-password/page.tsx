//// filepath: /Users/d.carpentiero/Downloads/leoneamerica-next/src/app/reset/page.tsx
"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  let resetToken = searchParams.get("reset_token");

  const togglePasswordType = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  const validatePassword = (pwd: string, confirmPwd: string) => {
    if (pwd !== confirmPwd) {
      setErrorAlert("Passwords do not match");
    } else {
      setErrorAlert("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate before sending API call
    if (password !== passwordConfirm) {
      setErrorAlert("Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://php.leone.it/api/ws_leone/RstUserPwd.php?IN_RstToken=${resetToken}&IN_NewPassword=${password}`,
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
        toast.success("Request completed.");
      } else {
        toast.error(data.ExitDescription);
      }
      console.log("Password updated", password);
    } catch (error) {
      console.error("Error updating password:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="p-4">
        <h3 className="mb-4 text-xl font-semibold">Insert a new password</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="relative mb-4 flex-1">
              <input
                type="password"
                id="IN_Pwd"
                name="IN_Pwd"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value, passwordConfirm);
                }}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i
                className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordType("IN_Pwd")}
              ></i>
            </div>
            <div className="relative mb-4 flex-1">
              <input
                type="password"
                id="IN_Pwd_confirm"
                name="IN_Pwd_confirm"
                placeholder="Repeat Password"
                required
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                  validatePassword(password, e.target.value);
                }}
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i
                className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordType("IN_Pwd_confirm")}
              ></i>
            </div>
          </div>
          {errorAlert && (
            <p id="wrong_pass_alert" className="mb-4 text-red-600">
              {errorAlert}
            </p>
          )}
          <div className=" mt-2">
            <button
              type="submit"
              id="create"
              disabled={isSubmitting}
              className="bg-blue text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-40"
            >
              Update password
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPassword;
