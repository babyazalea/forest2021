import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (responseData) => {
    localStorage.setItem("localId", responseData["localId"]);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("localId");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};
