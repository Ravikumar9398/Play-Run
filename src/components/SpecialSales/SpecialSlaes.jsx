import discount from "../../images/discount.png";
import limited from "../../images/limited.png";
import combo1 from "../../images/combo1.jpg";
import combo2 from "../../images/combo2.jpg";
import combo3 from "../../images/combo3.jpg";

const comboImages = [combo1, combo2, combo3];

const SpecialSales = () => {
  return (
    <div
      id="special-offers"
      className="border-2 border-green-500
    w-[92%] md:w-[80%] h-full flex flex-col items-center
    justify-center md:flex-row rounded-xl
    pb-6 
    bg-gradient-to-r  from-gray-500 to-green-500
    "
    >
      <img
        src={discount}
        alt="big sale"
        className="
      w-[434px] h-[434px] bg-contain
      
      "
      />
      <div className="h-full flex flex-col items-center justify-between gap-3 ml-9">
        <div>
          <h1 className="font-poppins text-white text-4xl font-semibold ">
            2+1 Buy <span className="text-orange-500">Two </span>
            Get <span className="text-orange-500"> One</span>
          </h1>
          <p className="font-roboto text-white">
            On every Combo Pack Get Discount Upto 50%
          </p>
        </div>
        <ul className="flex gap-3 justify-self-end mt-6">
          {comboImages.map((each) => (
            <li key={each}>
              <img
                src={each}
                alt="combo pack"
                className="w-[100px] h-[100px] rounded-full"
              />
            </li>
          ))}
        </ul>
        <img src={limited} alt="limited" className="w-[130px] mt-8" />
      </div>
    </div>
  );
};

export default SpecialSales;
