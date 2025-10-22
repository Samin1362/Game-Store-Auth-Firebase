import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://w0.peakpx.com/wallpaper/447/150/HD-wallpaper-pubg-mobile-game.jpg",
  "https://cdn.wallpapersafari.com/38/48/VoLJ6C.jpg",
  "https://wallpapers.com/images/featured/4k-hd-valorant-apq88vup55ep5pvt.jpg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-[200px] md:h-[600px] overflow-hidden rounded-2xl shadow-xl bg-linear-to-b from-black via-[#111] to-black">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } flex items-center justify-center`}
        >
          {/* Background Blur Layer */}
          <div
            className="absolute inset-0 bg-center bg-cover blur-2xl opacity-40"
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          {/* Actual Image */}
          <img
            src={img}
            alt={`slide-${index}`}
            loading="lazy"
            className="relative w-full h-full object-contain md:object-contain transition-transform duration-700 ease-in-out"
          />
        </div>
      ))}

      {/* Overlay Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl md:text-4xl font-bold tracking-wide">
        Most Popular Games 🎮
      </div> */}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
