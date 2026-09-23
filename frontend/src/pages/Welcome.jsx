import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";

function Welcome() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            User<span className="text-blue-600">Nest</span>
          </h1>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* Welcome Card */}
        <section className="rounded-2xl bg-blue-600 px-8 py-10 text-white shadow-sm">
          <p className="text-sm text-blue-100">
            Welcome to UserNest
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Hello, {user?.name || "User"}! 👋
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100">
            You have successfully logged in. Welcome to your personal space.
          </p>
        </section>

        {/* Profile */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-600">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <p className="text-lg font-semibold text-slate-900">
                {user?.name || "User"}
              </p>

              <p className="text-sm text-slate-500">
                {user?.email || "Email not available"}
              </p>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <FiUser />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Your account is ready
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                You can now continue using UserNest with your registered
                account.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Welcome;