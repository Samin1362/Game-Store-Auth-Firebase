import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import React from 'react';

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;