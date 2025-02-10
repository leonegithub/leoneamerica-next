"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PersonalArea = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      router.push("/login");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  if (!authenticated) {
    return <p>Loading...</p>;
  }

  return <span onClick={handleLogout}>Logout</span>;
};

export default PersonalArea;
