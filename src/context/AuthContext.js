import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    setLoading(false);
    console.log("AuthContext: login 함수 호출됨, 사용자 이름:", userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    setLoading(false);
    console.log("AuthContext: logout 함수 호출됨");
  };

  useEffect(() => {
    async function checkLogin() {
      setLoading(true);
      try {
        const res = await axios.get("/api/auth/status", {
          withCredentials: true,
        });
        if (res.data.loggedIn) {
          setLoggedIn(true);
          setUser({
            userId: res.data.userId,
            username: res.data.username,
            createdAt: res.data.createdAt,
          });
        }
      } catch {
        setLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkLogin();
  }, [loggedIn]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
