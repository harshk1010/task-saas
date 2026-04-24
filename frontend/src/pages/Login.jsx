import { useState } from "react";
import { Link } from "react-router-dom";
import API, { setToken } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = async () => {
  try {
    const res = await API.post("/auth/login", { email, password });

    const token = res.data.token;

    localStorage.removeItem("token");
    setToken(null);

    localStorage.setItem("token", token);
    setToken(token);

    window.location.href = "/dashboard";

  } catch (err) {
    console.error(err);
    alert(err.response?.data?.msg || "Login failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}