import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import Cards from "../components/Cards";

const GalleryPage = () => {

  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="mt-[65px]">
        <h1 className="font-bold text-2xl text-center">All Games</h1>

        {
          <Cards games={data}></Cards>
        }

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GalleryPage;
