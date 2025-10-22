import React from "react";

const Card = ({ game }) => {
  const { title, coverPhoto, ratings } = game;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 rounded-2xl overflow-hidden">
      <figure className="relative h-52 w-full overflow-hidden">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-[hsl(var(--color-primary))] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          ⭐ {ratings}
        </div>
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold text-base-content">
          {title}
        </h2>
        <button className="mt-3 btn btn-sm bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-lg hover:from-cyan-400 hover:to-green-400 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
