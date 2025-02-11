"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "@/components/loginForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const [hasUserId, setHasUserId] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userExists = localStorage.getItem("userId") !== null;
    setHasUserId(userExists);
    if (userExists) {
      router.push("/personal-area");
    }
  }, [router]);

  return !hasUserId ? <LoginForm /> : null;
};

export default Login;
