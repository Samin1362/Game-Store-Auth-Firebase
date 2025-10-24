import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import {
  FaGamepad,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useToast } from "../contexts/ToastContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const toast = useToast();

  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    document.title = "Login | Game Hub";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((e) => toast.error(e.message || "Login failed"));

    form.reset();
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Google Sign In Successful!");
        navigate("/");
      })
      .catch((e) => toast.error(e.message || "Google Sign In failed"));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      <nav>
        <Navbar></Navbar>
      </nav>

      {/* Login Form Container */}
      <div className="mt-[65px] flex items-center justify-center px-4 py-16 min-h-[calc(100vh-65px)]">
        <div className="w-full max-w-md">
          {/* Card with Glow Effect */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-green-500/20 to-transparent blur-3xl -z-10" />

            {/* Login Card */}
            <div className="bg-linear-to-b from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaGamepad className="text-4xl text-cyan-400" />
                </div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-400 text-sm">
                  Login to access your gaming world
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
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
                      name="password"
                      placeholder="Enter your password"
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

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-[1.02]"
                >
                  Login
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1a1a1a] text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid">
                <button
                  onClick={handleGoogleSignIn}
                  className="py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
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
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-400 mt-6">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Register
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

export default LoginPage;
