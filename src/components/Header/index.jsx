import React from "react";
import logo from "../../images/logo1.png";

import "./index.css";

const Header = () => {
  return (
    <header
      className="sticky z-10 
     w-full  header flex items-center 
     py-1 justify-center "
    >
      <nav className="w-[80%] flex flex-col gap-4 items-center justify-around md:flex-row">
        <a href="/">
          <div className="flex flex-row-reverse mt-4 md:mt-0 items-center">
            <img
              src={require("../../images/horse.png.png")}
              className="w-11 md:w-16 "
              alt="log png"
            />

            <img src={logo} alt="logo" className="w-10 md:w-14 " />
          </div>
        </a>

        <ul className=" flex items-center gap-6 mb-4 md:mb-0 ">
          <a
            href="/"
            className="  font-semibold 
            hover:border-b-2 hover:border-green-500
         "
          >
            Home
          </a>
          <a
            href="#subscribe"
            className="font-semibold 
            hover:border-b-2 hover:border-green-500"
          >
            Subscribe
          </a>
          <a
            href="#special-offers"
            className="font-semibold 
          hover:border-b-2 hover:border-green-500
          "
          >
            Offers
          </a>
          <a
            href="#products"
            className="font-semibold
          hover:border-b-2 hover:border-green-500
          "
          >
            Products
          </a>
          <a
            href="#footer"
            className="font-semibold 
          hover:border-b-2 hover:border-green-500
          "
          >
            AboutUs
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
