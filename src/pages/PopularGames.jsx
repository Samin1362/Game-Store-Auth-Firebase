import React, { useEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";
import gsap from "gsap";
import { FaFire, FaTrophy } from "react-icons/fa";

const PopularGames = () => {
  const data = useLoaderData();
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    document.title = "Popular Games | Game Hub";
    window.scrollTo({ top: 0, behavior: "instant" });

    // Animate header
    gsap.fromTo(
      headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  const filteredGames = [...data]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="relative text-center space-y-4">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

        {/* Icon and Badge */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaTrophy className="text-3xl text-yellow-400" />
          <div className="px-4 py-1.5 bg-linear-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full">
            <span className="text-orange-400 text-sm font-bold flex items-center gap-2">
              <FaFire className="text-orange-500" />
              Top Rated
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          ref={headerRef}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-400 to-cyan-400"
        >
          Most Popular Games
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Dive into the most loved and highly-rated games in our collection.
          <br />
          <span className="text-cyan-400 font-semibold">
            Handpicked just for you!
          </span>
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="h-1 w-16 bg-linear-to-r from-transparent via-cyan-500 to-green-500 rounded-full" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="h-1 w-16 bg-linear-to-r from-green-500 via-cyan-500 to-transparent rounded-full" />
        </div>
      </div>

      {/* Games Grid */}
      <div className="relative">
        {/* Subtle Border Effect */}
        <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/5 via-transparent to-green-500/5 rounded-3xl blur-xl" />

        <div className="relative">
          <Cards games={filteredGames} />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <a
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-green-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
        >
          <span>Explore All Games</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PopularGames;
