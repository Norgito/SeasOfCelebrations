import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const Product = ({ prod }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(prod , quantity);
  };

  return (
    <>
      <div
        className="bg-blue-300 rounded shadow-md w-[280px] h-[430px]"
        // data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        {/* Image */}
        <div className=" flex justify-center items-center">
          <img
            className=" rounded md:h-[270px] lg:h-[260px] "
            src={prod.image}
            alt=""
          />
        </div>
        <div className="flex bg-purple-300  flex-col items-center justify-center">
          <p className="px-4 text-lg text-white ">{prod.name.toUpperCase()}</p>
        </div>
        <div className="flex bg-purple-600  flex-col items-center justify-center mb-3">
          <p className="px-4 text-lg text-white ">$ {prod.price}</p>
        </div>
        <ItemCount stock={prod.stock} initial={itemCount} onAdd={onAdd} />
      </div>
    </>
  );
};

export default Product;