import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import RightSide from "../components/RightSide";
import gsap from "gsap";
import { FaGamepad, FaFire } from "react-icons/fa";

const Root = () => {
  const heroGlowRef = useRef(null);
  const marqueeRef = useRef(null);
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    // Fetch popular games
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data]
          .sort((a, b) => b.ratings - a.ratings)
          .slice(0, 10);
        setPopularGames(sorted);
      });

    // Animate hero glow effect
    gsap.to(heroGlowRef.current, {
      scale: 1.2,
      opacity: 0.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate marquee on load
    if (marqueeRef.current) {
      gsap.fromTo(
        marqueeRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div
          ref={heroGlowRef}
          className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-[90px]" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex flex-col">
          <Navbar />

          {/* Hero Banner Section */}
          <div className="mt-[65px] relative">
            {/* Banner with enhanced wrapper */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden">
              <Banner />

              {/* Hero Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="text-center px-4 space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <FaGamepad className="text-4xl md:text-5xl text-cyan-400 animate-bounce" />
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-400 to-cyan-400 drop-shadow-2xl animate-pulse">
                    Welcome to Game Hub
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto drop-shadow-lg">
                    Discover, Play & Conquer the Best Games
                  </p>

                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="h-1 w-12 bg-linear-to-r from-transparent to-cyan-500 rounded-full" />
                    <div className="h-1 w-8 bg-cyan-400 rounded-full" />
                    <div className="h-1 w-12 bg-linear-to-r from-cyan-500 to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Games Marquee */}
            <div
              ref={marqueeRef}
              className="max-w-7xl mx-auto px-4 -mt-8 relative z-30"
            >
              <div className="relative bg-linear-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-green-500/10 to-cyan-500/10 blur-xl" />

                {/* Header Label */}
                <div className="relative px-6 py-3 border-b border-gray-700 flex items-center justify-center gap-2 bg-gray-900/50">
                  <FaFire className="text-orange-500 text-lg animate-pulse" />
                  <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">
                    Trending Games
                  </span>
                </div>

                {/* Marquee Container */}
                <div className="relative overflow-hidden py-4">
                  {/* Gradient Overlays for fade effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-900/95 to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-900/95 to-transparent z-10" />

                  {/* Marquee Track */}
                  <div className="flex animate-marquee whitespace-nowrap">
                    {/* First set of games */}
                    {popularGames.map((game, index) => (
                      <div
                        key={`game-1-${index}`}
                        className="inline-flex items-center mx-4 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
                      >
                        <FaGamepad className="text-cyan-400 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="text-white font-semibold text-sm md:text-base">
                          {game.title}
                        </span>
                        <span className="ml-2 text-yellow-400 text-xs">
                          ★ {game.ratings}
                        </span>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {popularGames.map((game, index) => (
                      <div
                        key={`game-2-${index}`}
                        className="inline-flex items-center mx-4 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
                      >
                        <FaGamepad className="text-cyan-400 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="text-white font-semibold text-sm md:text-base">
                          {game.title}
                        </span>
                        <span className="ml-2 text-yellow-400 text-xs">
                          ★ {game.ratings}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex mt-12 md:mt-16 flex-col md:flex-row max-w-7xl mx-auto px-4 gap-8">
          {/* Left Side - Main Content */}
          <div className="md:w-3/4">
            <Outlet />
          </div>

          {/* Right Side - Sidebar */}
          <aside className="md:w-1/4 md:sticky md:top-20 h-fit">
            <RightSide />
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-20">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Root;
