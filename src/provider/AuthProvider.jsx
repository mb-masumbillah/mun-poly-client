import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
const [role] = useState(localStorage.getItem("userRole"))

  const login = (role) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userRole", role);
    setUser(true);
  };

  const logout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("userRole");
    setUser(false);
  };

  const authInfo = { login, logout, user,role };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
