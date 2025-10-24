import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";
import { Search, Grid3x3, Sparkles } from "lucide-react";
import { FaGamepad, FaFire } from "react-icons/fa";
import gsap from "gsap";

const GalleryPage = () => {
  const data = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [popularGames, setPopularGames] = useState([]);

  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const marqueeRef = useRef(null);
  const glowRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    document.title = "All Games Gallery | Game Hub";
    window.scrollTo({ top: 0, behavior: "instant" });

    // Get top games for marquee
    const sorted = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 10);
    setPopularGames(sorted);

    // Animations
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      searchRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      marqueeRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 }
    );

    // Animate glow
    gsap.to(glowRef.current, {
      scale: 1.3,
      opacity: 0.4,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, [data]);

  // Filter games based on search query
  const filteredGames = data.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div
          ref={glowRef}
          className="absolute top-32 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-[90px]" />

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
        <nav>
          <Navbar />
        </nav>

        <main className="mt-[65px] max-w-7xl mx-auto px-4 py-12">
          {/* Hero Header Section */}
          <header ref={headerRef} className="mb-12 text-center relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            {/* Icon and Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Grid3x3 className="text-cyan-400 w-8 h-8" />
              <div className="px-4 py-1.5 bg-linear-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 text-sm font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Complete Collection
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-400 to-cyan-400 mb-4">
              Game Gallery
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              Explore our complete collection of amazing games
            </p>
            <p className="text-cyan-400 font-semibold text-base">
              {data.length} Games Available
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-16 bg-linear-to-r from-transparent via-cyan-500 to-green-500 rounded-full" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="h-1 w-16 bg-linear-to-r from-green-500 via-cyan-500 to-transparent rounded-full" />
            </div>
          </header>

          {/* Search Bar */}
          <div ref={searchRef} className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                {/* Glow Effect on Focus */}
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-green-500 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300" />

                <div className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-xl">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search games by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-14 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors font-bold text-xl"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Results Counter */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-sm">
                    <span className="text-cyan-400 font-bold text-lg">
                      {filteredGames.length}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {filteredGames.length === 1 ? "game" : "games"} found
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Games Marquee */}
          <div ref={marqueeRef} className="mb-12">
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

          {/* Display filtered games or no results message */}
          {filteredGames.length > 0 ? (
            <div className="relative">
              {/* Subtle Glow Around Cards */}
              <div className="absolute -inset-8 bg-linear-to-r from-cyan-500/5 via-transparent to-green-500/5 rounded-3xl blur-2xl" />
              <div className="relative">
                <Cards games={filteredGames} />
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-12">
                <div className="text-6xl mb-6">🎮</div>
                <p className="text-gray-400 text-xl mb-2">
                  No games found matching
                </p>
                <p className="text-cyan-400 text-2xl font-bold mb-6">
                  "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-8 py-3 bg-linear-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="mt-20">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default GalleryPage;
