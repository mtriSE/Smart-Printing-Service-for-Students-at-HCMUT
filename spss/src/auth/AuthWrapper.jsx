import { createContext, useContext, useState } from "react";
import App from "src/pages/app/App";
import LoginPage from "src/pages/general/login/LoginPage";

export const AuthContext = createContext();

export const AuthWrapper = () => {
  const [user, setUser] = useState({
    account_id: "",
    isAuthenticated: false,
    role: null,
  });

  // Login Function
  const login = (account_id, password) => {
    // Return a Promise that resolves with the user data or rejects with an error
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account_id: account_id,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message) {
            // If the API returns an error message, reject the Promise
            alert(json.message);
            reject(new Error(json.message));
          } else {
            // If successful, resolve the Promise with the user data
            document.cookie = "token=" + json.accessToken + "; Path=/;";
            document.cookie = "account_id=" + json.account_id + "; Path=/;";
            document.cookie = "isAuthenticated=" + json.isAuthenticated + "; Path=/;";
            document.cookie = "role=" + json.role + "; Path=/;";
            setUser({
              account_id: json.account_id,
              isAuthenticated: true,
              role: json.role,
            });
            resolve({
              account_id: json.account_id,
              isAuthenticated: true,
              role: json.role,
            });
          }
        })
        .catch((error) => {
          // If there is any network error or other issue, reject the Promise
          reject(error);
        });
    });
  };

  // console.log(user);
  const logout = () => {
    document.cookie="token=''; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie="account_id=''; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie="isAuthenticated=''; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie="role=''; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setUser({ account_id: "", isAuthenticated: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <App />
    </AuthContext.Provider>
  );
};
