"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const [hasUserId, setHasUserId] = useState<string | null>();
  const router = useRouter();

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  }

  useEffect(() => {
    const storedUserId = getCookie("idUser");
    setHasUserId(storedUserId);
    if (storedUserId) {
      router.push("/personal-area");
    }
  }, [router]);

  return !hasUserId ? <LoginForm /> : null;
};

export default Login;
