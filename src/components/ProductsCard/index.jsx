import "./index.css";
import { FaRupeeSign, FaArrowRight } from "react-icons/fa";

const ProductsCard = (props) => {
  const { itemsList, selectProduct } = props;

  const { _id, imageUrl, title, price } = itemsList;
  const url = `https://playrun-product-api.onrender.com${imageUrl}`;
  console.log(url);
  console.log(imageUrl);
  const onClickProduct = () => {
    selectProduct(_id);
  };

  return (
    <a href={`/product/${_id}`}>
      <li
        className="min-w-[345px] h-full rounded-xl 
    flex flex-col items-center justify-items-center gap-2 
    shadow-xl border-2 p-2 flex-shrink-1 flex-grow-1 pt-4"
      >
        <button
          type="button"
          className="max-w-[268px] h-full "
          onClick={onClickProduct}
        >
          <img
            src={url}
            alt="product"
            name="image"
            className="w-[284px] h-[284px] object-contains "
          />
        </button>
        <h2 className="font-poppins font-semibold ">{title}</h2>
        <div className="flex items-center">
          <FaRupeeSign />
          <p className="font-Roboto text-orange-500 font-bold text-3xl">
            {price[0].single}
          </p>
        </div>
        <button
          type="button"
          className="bg-green-500 flex items-center gap-5 w-[234px]
        justify-center rounded-md text-white font-poppins p-1 cursor-pointer mb-6
        "
        >
          Shop Now <FaArrowRight />
        </button>
      </li>
    </a>
  );
};

export default ProductsCard;
