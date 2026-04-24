import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await API.post("/auth/signup", { name, email, password });
      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <input
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Signup
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-green-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}