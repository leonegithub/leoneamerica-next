//// filepath: /src/context/AuthContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface User {
  Nome: string;
  Cognome: string;
}

interface AuthContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
  userData: User | null;
  setUserData: (data: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  userId: null,
  setUserId: () => {},
  userData: null,
  setUserData: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  }

  async function fetchUserData(idUser: string) {
    try {
      const response = await fetch(
        `https://php.leone.it/api/ws_leone/GetUser.php?IN_USERID=${idUser}`,
        {
          headers: {
            Authorization:
              "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
          },
        }
      );
      const data = await response.json();
      if (data.ExitCode === 0) {
        setUserData(data.ReturnedObject);
      } else {
        console.error(
          "Failed to fetch user data",
          data.ReturnedError.join(", ")
        );
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  }

  useEffect(() => {
    const storedUserId = getCookie("idUser");

    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserData(storedUserId);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
