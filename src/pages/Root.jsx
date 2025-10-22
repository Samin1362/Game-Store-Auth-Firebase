import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import RightSide from "../components/RightSide";

const Root = () => {
  return (
    <div>
      <header className="flex flex-col">
        <Navbar></Navbar>
        <div className="mt-[65px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <Banner />
        </div>
      </header>
      <main className="flex">
        <div className="w-3/4">
          <Outlet></Outlet>
        </div>
        <aside className="w-1/4 mt-[30px]">
          <RightSide></RightSide>
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
