import React from "react";
import whiteTrunk from "../../images/whiteTrunk.png";
import banner from "../../images/banner.jpg";
import all from "../../images/all.png";
import { GiCottonFlower } from "react-icons/gi";
const Banners = () => {
  return (
    <section className="w-full h-full flex flex-row justify-center items-center">
      <div
        className="
         bg-cover md:max-w-[80%] h-full md:h-[485px]
         w-full flex  flex-col justify-start 
         items-start  overflow-hidden shadow-xl
          rounded-2xl mb-8 pt-3 m-5 md:mb-6"
      >
        <div
          className="z-10 flex flex-col items-start justify-start 
         md:flex-row md:justify-between
        "
        >
          <div className="flex flex-col ">
            <h3 className="text-3xl font-poppins font-semibold pl-16 pt-5 z-10">
              Play<span className="text-green-500">Run</span>
            </h3>
            <h1 className="text-6xl md:text-8xl max-sm-text-sm pl-16 mb-4 font-roboto font-bold z-10">
              GOOD <span className="text-green-500">FIT</span> <br />
              <span className="text-green-500">BODY</span> FIT
            </h1>
            <div className="z-10 pl-16 flex items-center gap-3">
              <p className=" font-poppins font-medium">Made of combed cotton</p>
              <GiCottonFlower />
            </div>
            <p className="pl-16 w-[422px] md:w-[545px] font-roboto mt-3">
              These classic Innerwears comes with double layered contoured pouch
              with its label free and super soft fell, it`s provides full day
              comfort
            </p>
          </div>
          <div
            className=" 
           hidden lg:flex mt-6
           lg:items-center lg:flex-wrap lg:justify-center h-full 
           ml-16  gap-9
           "
          >
            <img
              src={all}
              className="w-[160px] h-[160px] max-w-[240px] max-h-[240px] p-2
           z-10 border-2  border-gray-100 rounded-xl object-contains shadow-lg"
              alt="all inner"
            />
            <img
              src={whiteTrunk}
              className="w-[140px] h-[140px] max-w-[180px] max-h-[180px]
           z-10  border-2  border-gray-100 rounded-xl object-contains shadow-xl"
              alt="white trunk"
            />
          </div>
        </div>

        <img
          src={banner}
          alt="hero"
          className="w-full h-full -mt-20 md:-mt-64 "
        />
      </div>
    </section>
  );
};

export default Banners;
