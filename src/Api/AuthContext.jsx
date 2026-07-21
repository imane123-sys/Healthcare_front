import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("hc_token");
    const savedUser = localStorage.getItem("hc_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const loginUser = (authData) => {
    localStorage.setItem("hc_token", authData.token);
    localStorage.setItem(
      "hc_user",
      JSON.stringify({
        email: authData.email,
        name: authData.name,
        role: authData.role,
      }),
    );

    setToken(authData.token);
    setUser({
      email: authData.email,
      name: authData.name,
      role: authData.role,
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("hc_token");
    localStorage.removeItem("hc_user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loginUser, logoutUser, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
