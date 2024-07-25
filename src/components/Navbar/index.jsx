import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#03b648] w-full h-full flex flex-col items-center justify-center md:flex-row md:flex md:items-center md:justify-between mt-5 px-11">
      <div className="flex flex-col item-center justify-center gap-3 p-8">
        <h2 className="font-roboto underline underline-offset-8 text-white">
          About Us
        </h2>
        <div className="flex flex-col ">
          <p className="text-white font-roboto"> Manufactured by :</p>
          <h1 className="text-white font-poppins text-lg">
            PLAYRUN GARMENTS #2-15-57/2 Rajagarikota BSNL Office
            <br />{" "}
            <span className="text-white font-poppins text-lg">
              Narasaraopet - 522601
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {" "}
          <FaPhoneAlt className="text-white" size={18} />
          <p className="text-white font-poppins text-medium">+91 92908-39084</p>
        </div>

        <div className="flex items-center gap-3">
          <IoMdMail className="text-white" size={22} />
          <p className="text-white font-poppins text-medium">
            prgarments.official@gmail.com
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-3  p-8">
        <h2 className="font-roboto underline underline-offset-8 text-white">
          Available
        </h2>
        <ul className="flex flex-col  gap-1">
          <li className="text-white font-poppins">Classic Trunk</li>
          <li className="text-white font-poppins">Luxury Brief</li>
          <li className="text-white font-poppins">Half Sleeve Premium Vest</li>
          <li className="text-white font-poppins">Full Sleeve Premium Vest</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
