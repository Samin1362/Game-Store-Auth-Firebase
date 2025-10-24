import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";
import { Search } from "lucide-react";

const GalleryPage = () => {
  const data = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    document.title = "All Games Gallery | Game Hub";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Filter games based on search query
  const filteredGames = data.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="mt-[65px] max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="font-bold text-3xl text-center mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-green-400">
            All Games
          </h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg  border border-gray-700 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              {filteredGames.length}{" "}
              {filteredGames.length === 1 ? "game" : "games"} found
            </p>
          </div>
        </header>

        {/* Display filtered games or no results message */}
        {filteredGames.length > 0 ? (
          <Cards games={filteredGames}></Cards>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No games found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-6 py-2 bg-linear-to-r from-cyan-500 to-green-500 text-white rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GalleryPage;
