import React from "react";
import { FaGamepad } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      <div className="relative flex flex-col items-center">
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-green-500/20 to-transparent blur-3xl -z-10 animate-pulse" />

        {/* Gaming Icon with Animation */}
        <div className="relative mb-8">
          <FaGamepad className="text-6xl text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 animate-bounce" />

          {/* Rotating Ring */}
          <div className="absolute -inset-4 border-4 border-transparent border-t-cyan-500 border-r-green-500 rounded-full animate-spin" />
          <div className="absolute -inset-6 border-4 border-transparent border-b-cyan-400 border-l-green-400 rounded-full animate-spin-slow" />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 mb-4 animate-pulse">
          Loading Game Hub
        </h2>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden shadow-lg">
          <div className="h-full bg-linear-to-r from-cyan-500 to-green-500 rounded-full animate-loading-bar shadow-lg shadow-cyan-500/50" />
        </div>

        {/* Dots Animation */}
        <div className="flex gap-2 mt-6">
          <div
            className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx="true">{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
