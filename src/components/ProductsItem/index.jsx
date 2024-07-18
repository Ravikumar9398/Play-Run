import React from "react";

import { FaArrowCircleUp, FaWhatsapp } from "react-icons/fa";
import "./index.css";
const ProductsItem = (itemDetails) => {
  console.log(itemDetails.itemDetails[0]);
  const {
    title,
    slogan,
    description,

    CM,
    manufacturedBy,
    INCH,
    imageUrl,
    availableColors,
  } = itemDetails.itemDetails[0];
  return (
    <div className="w-full h-full  flex flex-col items-center justify-items-center gap-4 md:flex-row">
      <div className="img-con bg-gray-100 rounded-xl h-[445px]">
        <div className="w-11 h-11  absolute ml-4  flex items-center flex-col">
          <img
            src={require("../../images/made-in-india.png")}
            alt="Made In India"
          />
          <img
            src={require("../../images/cotton-logo.png")}
            alt="Made In India"
          />
        </div>
        <img
          src={imageUrl}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" rounded-xl w-full h-[445px] flex flex-col items-start justify-start  px-7 py-3 border-2  gap-2">
        <h1 className="font-bold text-xl font-poppins">
          Play<span className="text-green-500">Run</span>
        </h1>
        <h1
          className="font-semibold text-3xl 
         md:text-4xl font-roboto "
        >
          {title}
        </h1>
        <p className="font-semibold text-sm font-roboto">{slogan}</p>
        <p className="font-semibold text-sm text-start font-roboto">
          {description}
        </p>

        <ul className="color-div">
          {availableColors.map((each) => (
            <li className={`${each} color-bg`}></li>
          ))}
        </ul>

        <p className="w-full font-semibold text-sm font-roboto">
          {" "}
          Sizes Available:
        </p>
        <ul className=" w-11 p-1 flex items-center  ">
          {CM.map((each) => (
            <li className="border border-green-500 px-1 text-[12px] font-semibold font-roboto">
              {each}
            </li>
          ))}
        </ul>
        <ul className="flex items-center">
          {INCH.map((each) => (
            <li className="border border-green-500 px-1 text-sm font-semibold font-roboto">
              {each}
            </li>
          ))}
        </ul>
        <a
          href="https://api.whatsapp.com/send?phone=9290839084"
          target="__blank"
          className="w-full"
        >
          <button
            type="button"
            className=" flex outline-none align-center justify-center gap-2 text-center bg-green-500 w-full text-white font-poppins rounded-sm py-1"
          >
            <FaWhatsapp size={22} /> +91 92908 39084
          </button>
        </a>

        <p className="flex items-center gap-2 text-center w-full justify-center text-green-800 font-poppins font-semibold animate-bounce pt-3">
          For Orders Click Upon Here{" "}
          <span>
            {" "}
            <FaArrowCircleUp />
          </span>
        </p>
        <p className="font-semibold text-sm text-start font-roboto">
          {manufacturedBy}
        </p>
      </div>
    </div>
  );
};

export default ProductsItem;
