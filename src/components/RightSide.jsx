import React, { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import gsap from "gsap";
import {
  FaUser,
  FaEnvelope,
  FaGamepad,
  FaFire,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router";

const RightSide = () => {
  const { user, googleSignIn, setUser } = useContext(AuthContext);
  const [games, setGames] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const loginCardRef = useRef(null);
  const newsletterRef = useRef(null);
  const imageRef = useRef(null);

  // Fetch games data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Get random 5 games for newsletter
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setGames(shuffled.slice(0, 5));
      });
  }, []);

  // Animate on mount
  useEffect(() => {
    gsap.fromTo(
      loginCardRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      newsletterRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  // Image slider animation
  useEffect(() => {
    if (games.length > 0) {
      const interval = setInterval(() => {
        // Fade out
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            // Change image
            setCurrentImageIndex((prev) => (prev + 1) % games.length);
            // Fade in
            gsap.fromTo(
              imageRef.current,
              { opacity: 0, scale: 1.1 },
              { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
            );
          },
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [games]);

  const handleGooleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        alert("Google Sign In Successful.");
        const user = userCredential.user;
        setUser(user);
      })
      .catch((e) => alert(e));
  };

  return (
    <div className="space-y-6 pr-4">
      {/* Login Info Section */}
      <div
        ref={loginCardRef}
        className="relative bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 via-green-500/20 to-cyan-500/20 rounded-2xl opacity-50 blur-xl -z-10" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaUser className="text-cyan-400 text-sm" />
          {user ? (
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400">
              User Info
            </h2>
          ) : (
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400">
              Login
            </h2>
          )}
        </div>

        {/* User Details */}
        {user ? (
          <div className="space-y-4">
            {/* Name */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-linear-to-r from-cyan-500 to-green-500 rounded-full">
                  <div className="max-w-10">
                    <img
                      className="rounded-full"
                      src={user.photoURL}
                      alt="user image"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Name</p>
                  <p className="text-white font-semibold">
                    {user?.displayName}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400 text-sm" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <p className="text-white font-semibold text-sm break-all">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-semibold">
                Online
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Name */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:bg-gray-900">
              <div
                onClick={handleGooleSignIn}
                className="flex items-center gap-3"
              >
                <FaGoogle className="text-cyan-400 text-sm" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    Login With Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter/Featured Games Section */}
      <div
        ref={newsletterRef}
        className="relative bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 via-green-500/20 to-cyan-500/20 rounded-2xl opacity-50 blur-xl -z-10" />

        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 mb-2">
            <FaFire className="text-orange-500 text-xl" />
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">
              Trending Now
            </h2>
          </div>
          <p className="text-gray-400 text-xs">Popular games this week</p>
        </div>

        {/* Animated Game Cover */}
        {games.length > 0 && (
          <div className="relative h-64 bg-gray-900">
            <img
              ref={imageRef}
              src={games[currentImageIndex]?.coverPhoto}
              alt={games[currentImageIndex]?.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

            {/* Game Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaGamepad className="text-cyan-400 text-sm" />
                <span className="text-cyan-400 text-xs font-semibold">
                  {games[currentImageIndex]?.category}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm line-clamp-2 mb-2">
                {games[currentImageIndex]?.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-cyan-500 to-green-500 transition-all duration-300"
                    style={{
                      width: `${
                        (games[currentImageIndex]?.ratings / 5) * 100
                      }%`,
                    }}
                  />
                </div>
                <span className="text-yellow-400 text-xs font-bold">
                  {games[currentImageIndex]?.ratings} ⭐
                </span>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute top-3 right-3 flex gap-1.5">
              {games.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-6 bg-cyan-400"
                      : "w-1.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="p-4 bg-gray-900/50">
          <button className="w-full py-2.5 bg-linear-to-r from-cyan-500 to-green-500 text-white text-sm font-bold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
            <Link to="/gallery">View All Games</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
