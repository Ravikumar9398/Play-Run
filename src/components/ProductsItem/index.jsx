import { FaArrowCircleUp, FaWhatsapp } from "react-icons/fa";
import ProductsCard from "../ProductsCard";
import "./index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Header from "../Header";

const ProductsItem = () => {
  const { id } = useParams();
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    const renderProductsList = async () => {
      const url = "https://playrun-product-api.onrender.com/api/products/";

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

  const pro = productsList.filter((product) => product._id === id);
  const filteredProducts = productsList.filter((each) => each._id !== id);

  if (!pro.length)
    return (
      <div
        className="w-full h-screen flex items-center justify-center text-center text-green-500
      font-bold md:text-8xl text-3xl
      "
      >
        Loading...
      </div>
    );

  const {
    title,
    slogan,
    description,

    CM,
    manufacturedBy,
    INCH,
    imageUrl,
    availableColors,
  } = pro[0];
  return (
    <div className="w-full h-full  flex flex-col items-center justify-items-center gap-4 ">
      <Header />
      <div
        className="w-full h-full flex-col md:flex-row flex  
      items-center justify-items-center gap-4 md:w-[80%] mb-11 "
      >
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
            src={`https://playrun-product-api.onrender.com${imageUrl}`}
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
      <section
        className="w-full p-4 md:p-0 md:w-[80%] h-full flex flex-col items-center 
          justify-items-start gap-5 "
      >
        <div className="w-full flex flex-col items-start justify-start ">
          <h2 className="text-xl font-poppins font-semibold">
            Similar Products{" "}
          </h2>
          <hr className="w-full mt-3 " />
        </div>

        <ul
          id="products"
          className="w-full h-full rounded-xl 
                flex flex-col md:flex-row items-center justify-items-center 
                flex-wrap gap-3  "
        >
          {filteredProducts.map((each) => (
            <ProductsCard itemsList={each} key={each._id} />
          ))}
        </ul>
      </section>
      <Navbar />
    </div>
  );
};

export default ProductsItem;
