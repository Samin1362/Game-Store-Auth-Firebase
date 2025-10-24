import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Footer from "../components/Footer";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Game Hub";
  }, []);

  return (
    <div className="min-h-screen mt-[70px] flex flex-col bg-linear-to-b from-gray-50 to-gray-100 text-gray-800">
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-red-100 shadow-inner">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="max-w-md text-gray-500">
            Oops! The page you’re looking for doesn’t exist or may have been
            moved. Let’s get you back to safety.
          </p>

          <Link
            to="/"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
