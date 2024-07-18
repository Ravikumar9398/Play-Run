import { useState } from "react";
import ProductsListContext from "../../context/ProductListContext";
import "./index.css";
const ProductsCard = (props) => {
  const [activeId, setChangeId] = useState("");
  const { itemsList } = props;
  const { id, imageUrl, title } = itemsList;
  const sendId = () => {
    setChangeId(id);
  };
  return (
    <ProductsListContext.Provider
      value={{ changeID: sendId, activeId: activeId }}
    >
      <li
        className="w-full h-full rounded-t-xl 
    flex flex-col items-center justify-center gap-2 
    shadow-xl border-2 p-2 "
      >
        <button type="button" className="w-full h-full  " onClick={sendId}>
          <img
            src={imageUrl}
            alt="product"
            className="w-[284px] h-[284px] object-contains "
          />
        </button>
        <h2 className="font-poppins font-semibold ">{title}</h2>
      </li>
    </ProductsListContext.Provider>
  );
};

export default ProductsCard;
