"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const [hasUserId, setHasUserId] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    setHasUserId(localStorage.getItem("userId") !== null);
  }, []);

  // While the client-side check is occurring, you can render a loading indicator
  if (hasUserId === null) {
    return <p>Loading...</p>;
  }

  return hasUserId ? router.push(`/personal-area`) : <LoginForm />;
};

export default Login;
