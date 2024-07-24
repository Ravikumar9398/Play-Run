import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./index.css";

import Header from "../Header";
import ProductsCard from "../ProductsCard";
import Navbar from "../Navbar/index.jsx";
import Banners from "../Banners/index.jsx";
import SpecialOfferSection from "../SpecialOfferSection/index.jsx";
import SubscribeNote from "../SubscribeNote/SubscribeNote.jsx";
import SpecialSales from "../SpecialSales/SpecialSlaes.jsx";

const Home = () => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    const renderProductsList = async () => {
      const url = "https://playrun-product-api.vercel.app/api/products";

      const response = await axios.get(url);
      const data = response.data;
      const products = data.products;

      if (data.success === true) {
        setProductList(products);
      } else {
        console.log(data.message);
      }
    };
    renderProductsList();
  }, []);

  return (
    <main
      className="w-screen h-full   flex flex-col items-center 
        justify-items-center  pb-2"
    >
      <Header />
      <Banners />
      <SpecialSales />
      <SpecialOfferSection />
      <section
        className="w-full p-4 md:p-0 md:w-[80%] h-full flex flex-col items-center 
          justify-items-center gap-5 "
      >
        <ul
          id="products"
          className="w-full h-full rounded-xl 
                flex flex-col md:flex-row items-center justify-items-center 
                flex-wrap gap-3  "
        >
          {productsList.map((each) => (
            <ProductsCard itemsList={each} key={each._id} />
          ))}
          <SubscribeNote />
        </ul>
      </section>
      <footer id="footer" className="w-full mt-5">
        <Navbar />
      </footer>
    </main>
  );
};

export default Home;
