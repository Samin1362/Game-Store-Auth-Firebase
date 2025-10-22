import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";

const Card = ({ game, index = 0 }) => {
  const { title, coverPhoto, ratings } = game;
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial animation on mount
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
      }
    );

    // Floating animation
    gsap.to(cardRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1,
    });
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Card hover animation
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });

    // Image zoom animation
    gsap.to(imageRef.current, {
      scale: 1.15,
      duration: 0.5,
      ease: "power2.out",
    });

    // Glow effect animation
    gsap.to(glowRef.current, {
      opacity: 0.8,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Reset card scale
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset image zoom
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Reset glow
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardClick = () => {
    // Click animation
    gsap
      .timeline()
      .to(cardRef.current, {
        scale: 0.95,
        duration: 0.1,
      })
      .to(cardRef.current, {
        scale: 1.05,
        duration: 0.2,
      });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <div
        ref={glowRef}
        className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-green-500 to-cyan-500 rounded-2xl opacity-0 blur-xl -z-10"
      />

      {/* Card Container */}
      <div className="relative bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-900">
          <img
            ref={imageRef}
            src={coverPhoto}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-2 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full shadow-lg">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-bold text-white">{ratings}</span>
          </div>

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center space-y-3">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 inline-block">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm px-4">
                Click to view details
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400 line-clamp-2 min-h-14">
            {title}
          </h2>

          {/* View Details Button */}
          <button className="w-full py-3 bg-linear-to-r from-cyan-500 to-green-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
            View Details
          </button>
        </div>

        {/* Shine Effect on Hover */}
        <div
          className={`absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 ${
            isHovered ? "translate-x-full" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Card;
