import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setToken } from "./api/api";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth === null) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard setIsAuth={setIsAuth} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;