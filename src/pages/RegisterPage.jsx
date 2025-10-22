import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import {
  FaGamepad,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      <nav>
        <Navbar></Navbar>
      </nav>

      {/* Register Form Container */}
      <div className="mt-[65px] flex items-center justify-center px-4 py-16 min-h-[calc(100vh-65px)]">
        <div className="w-full max-w-md">
          {/* Card with Glow Effect */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-green-500/20 to-transparent blur-3xl -z-10" />

            {/* Register Card */}
            <div className="bg-linear-to-b from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaGamepad className="text-4xl text-cyan-400" />
                </div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 mb-2">
                  Create Account
                </h1>
                <p className="text-gray-400 text-sm">
                  Join the gaming community today
                </p>
              </div>

              {/* Register Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      required
                      className="w-full pl-11 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      required
                      className="w-full pl-11 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 mt-1 rounded border-gray-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-gray-900"
                  />
                  <label className="text-sm text-gray-400">
                    I agree to the{" "}
                    <a href="#" className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-[1.02]"
                >
                  Create Account
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1a1a1a] text-gray-400">
                    Or register with
                  </span>
                </div>
              </div>

              {/* Social Register */}
              <div className="grid grid-cols-2 gap-4">
                <button className="py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button className="py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-400 mt-6">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RegisterPage;
