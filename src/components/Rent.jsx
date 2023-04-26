import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCountServicesRent from "./ItemCountServicesRent";

const Rent = ({ rent }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(rent, quantity);
  };

  return (
    <div
      className="bg-blue-300 rounded  shadow-md mt-22 mx-auto w-full max-w-[370px] md:h-[580px] lg:h-[360px] h-[590px]  hover:shadow-lg mb-2 icon"
      // data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      {/* Image */}
      <div className=" flex justify-center items-center">
        <img
          className=" rounded md:h-[270px] lg:h-[250px] "
          src={rent.image}
          alt=""
        />
      </div>
      <div className="flex bg-purple-300  flex-col items-center justify-center">
        <p className="px-4 text-lg text-white ">{rent.name.toUpperCase()}</p>
      </div>
      <div className="flex bg-purple-600  flex-col items-center justify-center">
        <p className="px-4 text-lg text-white ">$ {rent.price}</p>
      </div>

      <div className="flex justify-center mt-3">
        <ItemCountServicesRent initial={itemCount} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Rent;
