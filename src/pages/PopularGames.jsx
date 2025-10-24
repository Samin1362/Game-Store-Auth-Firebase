import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";

const PopularGames = () => {
  const data = useLoaderData();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredGames = [...data]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <div>
      <h1 className="md:my-4 font-bold text-2xl text-center">
        This are Popular Games.
      </h1>
      {<Cards games={filteredGames}></Cards>}
    </div>
  );
};

export default PopularGames;
