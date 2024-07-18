import React, { useState } from "react";
import ProductsListContext from "../../context/ProductListContext.js";
import Header from "../Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import ProductsCard from "../ProductsCard";
import ProductsItem from "../ProductsItem";
import Navbar from "../Navbar/index.jsx";
import ScrollAnimation from "../ScrollAnimation/index.jsx";
const Home = () => {
  const [changeId, setChangeId] = useState("");
  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <ProductsListContext.Consumer>
      {(value) => {
        const { listItems, activeId } = value;
        console.log(activeId);
        const item = listItems.filter((each) => each.id === activeId);

        return (
          <div
            className="w-screen h-full   flex flex-col items-center 
        justify-items-center  pb-2"
          >
            <Header />

            <div
              className="w-full p-4 md:p-0 md:w-[80%] h-full flex flex-col items-center 
          justify-items-center gap-5 "
            >
              <ProductsItem itemDetails={item} key={item.id} />

              <ul
                className="w-[95%] h-full rounded-xl 
                flex flex-row items-center justify-items-center "
              >
                <Slider {...settings} className="w-full">
                  {listItems.map((each) => (
                    <ProductsCard itemsList={each} key={each.id} />
                  ))}
                </Slider>
              </ul>
            </div>
            <div className="w-full mt-5">
              <Navbar />
            </div>
          </div>
        );
      }}
    </ProductsListContext.Consumer>
  );
};

export default Home;
