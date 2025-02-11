"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const PersonalArea = () => {
  const router = useRouter();
  const { userId, setUserId } = useAuth();

  useEffect(() => {
    if (!userId) {
      router.push("/login");
    }
  }, [userId, router]);

  const handleLogout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return <span onClick={handleLogout}>Logout</span>;
};

export default PersonalArea;
