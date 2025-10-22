import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const Root = () => {
  return (
    <div>
      <header className="flex flex-col">
        <Navbar></Navbar>
        <div className="mt-[65px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <Banner />
        </div>
      </header>
      <main>
        <aside></aside>
        <Outlet></Outlet>
        <aside></aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
