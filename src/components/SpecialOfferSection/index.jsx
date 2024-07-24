import men from "../../images/men.jpg";
import offer from "../../images/offer.png";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SpecialOfferSection = () => {
  return (
    <section
      id="special-offers"
      className="
      w-[92%] h-full md:max-w-[80%]  flex flex-col 
      lg:flex-row  shadow-xl mt-4
       border border-green-500 rounded-xl
      mb-16 
     
      "
    >
      <img
        src={men}
        alt="men"
        className="w-full  lg:w-[545px] h-full
        object-cover 
        bg-contains rounded-l-xl  "
      />
      <div className=" mt-6 lg:mt-16 ml-9 mb-6 flex flex-col items-start gap-2">
        <h3 className="text-md font-poppins font-semibold text-slate-800">
          Play<span className="text-green-500">Run</span>
        </h3>
        <h3 className="font-bold text-xl md:text-3xl text-slate-800 w-[320px]">
          Classic Trunk Combo 3 Three Piece Pack
        </h3>
        <ul className="flex items-center gap-1">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStarHalf />
          </li>
        </ul>
        <div className="flex items-center">
          <FaRupeeSign />
          <p className="font-Roboto line-through font-bold text-lg">600</p>
        </div>
        <div className="flex items-center">
          <FaRupeeSign />
          <p className="font-Roboto text-orange-500 font-bold text-3xl">450</p>
        </div>
        <img
          src={offer}
          alt="offer"
          className="w-[180px]  
         flex self-end absolute mr-11  lg:-mr-20 mt-14
        "
        />
        <button
          type="button"
          className="bg-green-500 flex items-center gap-5 w-[234px]
        justify-center rounded-md text-white font-poppins p-1 cursor-pointer
        "
        >
          Shop Now <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
