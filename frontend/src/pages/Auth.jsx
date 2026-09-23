import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { registerAPI, loginAPI } from "../server/allAPI";
import "react-toastify/dist/ReactToastify.css";

function Auth() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const submitForm = async (e) => {
  e.preventDefault();

  try {
    const response = login
      ? await loginAPI({
          email: formData.email,
          password: formData.password,
        })
      : await registerAPI(formData);

    toast.success(response.data.message);

    if (login) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setTimeout(() => navigate("/welcome"), 1000);
    } else {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setTimeout(() => navigate("/welcome"), 1000);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-bold">
            User<span className="text-blue-600">Nest</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            Home
          </Link>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              {login ? "Welcome back" : "Create an account"}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {login ? "Login to continue" : "Register to get started"}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setLogin(true)}
              className={`rounded-md py-2.5 text-sm font-semibold ${
                login ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setLogin(false)}
              className={`rounded-md py-2.5 text-sm font-semibold ${
                !login ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={submitForm} className="mt-6 space-y-4">
            {!login && (
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            )}

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />

            <div className="relative">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-11 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {login ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            {login ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setLogin(!login)}
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              {login ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Auth;