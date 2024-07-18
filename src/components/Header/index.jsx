import React from "react";
import logo from "../../images/logo1.png";
import { FaCartPlus, FaHome } from "react-icons/fa";

import "./index.css";

const Header = () => {
  return (
    <div className=" w-full  header flex items-center  py-1 justify-center ">
      <div className="w-4/5 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={require("../../images/horse.png.png")}
            className="w-11 md:w-16 "
            alt="log png"
          />

          <h1 className="font-bold text-xl font-poppins">
            Play<span className="text-green-500">Run</span>
          </h1>
        </div>

        <img src={logo} alt="logo" className="w-10 md:w-14 " />

        <ul className=" md:flex md:items-center md:gap-2 ">
          <a
            href="/"
            className=" hidden font-semibold md:flex items-center gap-1"
          >
            <FaHome />
            Home
          </a>
          <a href="/" className="font-semibold flex items-center gap-1 md:flex">
            <FaCartPlus />
            Cart
          </a>
          <a href="/" className="font-semibold hidden md:block">
            AboutUs
          </a>
        </ul>
        <select className=" hidden md:hidden">
          <option value={"/"}>
            <a href="/" className="font-semibold ">
              Home
            </a>
          </option>
          <option>
            <a href="/" className="font-semibold">
              ContactUs
            </a>
          </option>
          <option>
            <a href="/" className="font-semibold">
              AboutUs
            </a>
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
