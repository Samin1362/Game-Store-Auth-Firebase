import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-gray-300 px-8 py-12 mt-20 border-t border-gray-800">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/10 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="url(#grad)"
              className="drop-shadow-lg"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847z" />
            </svg>
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 tracking-wide">
              GameStore
            </h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your ultimate destination for next-gen gaming experiences.  
            Play. Discover. Dominate.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Samin Israk. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h6 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
              Explore
            </h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deals</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
              Support
            </h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
            Join the Community
          </h6>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all">
              <FaFacebookF className="text-cyan-400 text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all">
              <FaTwitter className="text-cyan-400 text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all">
              <FaYoutube className="text-cyan-400 text-xl" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-all">
              <FaDiscord className="text-cyan-400 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
