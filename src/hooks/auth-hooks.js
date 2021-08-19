import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (responseData) => {
    const expirationDate = new Date(
      new Date().getTime() + responseData["expiresIn"] * 1000
    );

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("localId", responseData["localId"]);
    setIsLoggedIn(true);
  };

  const logout = useCallback(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("localId");
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    const expDate = new Date(localStorage.getItem("expirationDate"));

    if (!expDate || expDate <= new Date()) {
      logout();
    } else {
      setIsLoggedIn(true);
    }
  }, [logout]);

  return {
    isLoggedIn,
    login,
    logout,
  };
};
