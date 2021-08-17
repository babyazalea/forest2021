import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (id, password) => {
    console.log(id, password);
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("logout");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};
