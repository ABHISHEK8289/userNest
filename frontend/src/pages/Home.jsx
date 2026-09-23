import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import welcomeImage from "../assets/welcome.png";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            User<span className="text-blue-600">Nest</span>
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/auth"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              to="/auth"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="bg-slate-50">
<div className="mx-auto grid  max-w-6xl items-center gap-2 px-6 py-8 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-green-600">
                <FiCheckCircle />
                Simple & Secure
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Welcome to{" "}
                <span className="text-blue-600">
                  UserNest
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Create your account, securely sign in, and enjoy a simple
                personalized experience built just for you.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <Link
                  to="/auth"
                  className="group flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/auth"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Sign In
                </Link>

              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={welcomeImage}
                alt="Welcome"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}



export default Home;