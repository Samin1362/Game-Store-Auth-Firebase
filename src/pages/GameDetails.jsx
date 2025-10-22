import React, { useEffect, useRef } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";
import {
  FaStar,
  FaDownload,
  FaPlay,
  FaGamepad,
  FaUser,
  FaArrowLeft,
  FaShareAlt,
  FaHeart,
} from "react-icons/fa";

const GameDetails = () => {
  const id = useParams();
  const data = useLoaderData();

  const selectedGame = data.find((game) => game.id === id.id);

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = selectedGame;

  // Refs for animations
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgesRef = useRef(null);
  const buttonsRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo({ top: 0, behavior: "instant" });

    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
    );

    // Content sections animation with stagger
    const timeline = gsap.timeline({ delay: 0.3 });

    timeline
      .fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(
        badgesRef.current.children,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .fromTo(
        buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: "power3.out" },
        "-=0.1"
      )
      .fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.1"
      );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: -8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      <nav>
        <Navbar></Navbar>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="mt-[65px] relative">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110"
            style={{ backgroundImage: `url(${coverPhoto})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/80 to-[#111]" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300"
          >
            <FaArrowLeft />
            <span>Back to Gallery</span>
          </Link>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <img
                  ref={imageRef}
                  src={coverPhoto}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-green-500 to-cyan-500 rounded-2xl opacity-50 blur-2xl -z-10" />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* Title */}
              <div ref={contentRef}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 leading-tight mb-4">
                  {title}
                </h1>

                {/* Badges */}
                <div ref={badgesRef} className="flex flex-wrap gap-3 mb-6">
                  {/* Category Badge */}
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg flex items-center gap-2">
                    <FaGamepad className="text-cyan-400" />
                    <span className="text-white font-semibold">{category}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white font-bold">{ratings}</span>
                    <span className="text-gray-400 text-sm">/5</span>
                  </div>

                  {/* Developer Badge */}
                  <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg flex items-center gap-2">
                    <FaUser className="text-green-400" />
                    <span className="text-white font-semibold">
                      {developer}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div ref={descriptionRef} className="mb-8">
                  <h2 className="text-xl font-bold text-gray-200 mb-3">
                    About This Game
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div ref={buttonsRef} className="flex flex-wrap gap-4">
                  {/* Play/Download Button */}
                  <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] py-4 px-6 bg-linear-to-r from-cyan-500 to-green-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                  >
                    <FaPlay />
                    Play Now
                  </a>

                  {/* Download Button */}
                  <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 bg-gray-800/50 border-2 border-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {/* Info Card 1 */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-3">
                <FaGamepad />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Genre</h3>
              <p className="text-gray-400">{category}</p>
            </div>

            {/* Info Card 2 */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
              <div className="text-green-400 text-3xl mb-3">
                <FaStar />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Rating</h3>
              <p className="text-gray-400">{ratings} out of 5 stars</p>
            </div>

            {/* Info Card 3 */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-3">
                <FaUser />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Developer</h3>
              <p className="text-gray-400">{developer}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GameDetails;
