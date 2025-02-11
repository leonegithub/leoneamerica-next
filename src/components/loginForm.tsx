"use client";

import React, { useState } from "react";
import { LoadingButton } from "./LoadingButton";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data1, setData1] = useState<{
    ExitCode: number;
    data: Record<string, unknown>;
    ReturnedObject: Record<string, unknown>;
    ReturnedError: string[];
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget.closest("form") as HTMLFormElement;
    const formData = new FormData(form);

    try {
      fetch("https://php.leone.it/api/ws_leone/LogUser.php", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ExitCode === 0) {
            const idUser = data.ReturnedObject.IDUser;
            setData1(idUser);
            localStorage.setItem("userId", idUser);
            router.push(`/personal-area`);
          } else {
            setErrorMessage(data.ReturnedError.join(", "));
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage("An error occurred. Please try again.");
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  console.log(data1);

  const togglePasswordType = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    const passwordInput = document.getElementById("IN_Pwd") as HTMLInputElement;
    const togglePasswordIcon = event.currentTarget;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordIcon.classList.remove("fa-eye");
      togglePasswordIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      togglePasswordIcon.classList.remove("fa-eye-slash");
      togglePasswordIcon.classList.add("fa-eye");
    }
  };
  return (
    <div className="container">
      <div className="max-w-5xl  p-6">
        <h3 className="mb-6 text-xl font-semibold">
          Login to your personal Leone account
        </h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              id="IN_Pwd"
              name="password"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
            <i
              className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              id="togglePassword"
              onClick={togglePasswordType}
            ></i>
          </div>
          <div className="mb-5">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                onClick={handleLogin}
                type="submit"
                className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </button>
            )}
          </div>
        </form>
        <p className="text-sm mb-2">
          If you do not yet have a Leone account (essenza.leone.it, 3dleone.it),{" "}
          <a className="blue hover:underline" href="registrazione.html">
            register now
          </a>{" "}
          to have access to our services.
        </p>
        <p className="text-sm">
          <a className="blue hover:underline" href="reset.html">
            Did you forget your password?
          </a>
        </p>
        <p className="error-message">
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
