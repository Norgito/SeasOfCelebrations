import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCountServicesRent from "./ItemCountServicesRent";

const House = ({ house }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(house, quantity);
  };

  return (
    <div
      className=" bg-blue-300 rounded  shadow-md mt-22 mx-auto w-full max-w-[370px] md:h-[580px] lg:h-[360px] h-[590px]  hover:shadow-lg mb-2 icon"
      // data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      {/* Image */}
      <div className=" flex justify-center items-center">
        <img
          className=" rounded md:h-[270px] lg:h-[250px] "
          src={house.image}
          alt=""
        />
      </div>
      <div className="flex bg-purple-300  flex-col items-center justify-center">
        <p className="px-4 text-lg text-white ">{house.name.toUpperCase()}</p>
      </div>
      <div className="flex bg-purple-600  flex-col items-center justify-center">
        <p className="px-4 text-lg text-white ">$ {house.price}</p>
      </div>

      <div className="flex justify-center items-center mt-4">
        <ItemCountServicesRent initial={itemCount} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default House;
