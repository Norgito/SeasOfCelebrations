import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Balloon from "../assets/P.png";
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
    <div className="Center px-2 ">
      <ul className="cards px-2 ">
        <li>
          <a className="cardItems shadow-md">
            <p className="price ColorSer">${house.price}</p>
            <img src={house.image} className="card__image" />
            <div className="card__overlay">
              <div className="card__header ColorSer">
                <svg className="card__arc1" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="bg-white rounded-full w-[50px] h-[50px]">
                  <img className="card__thumb" src={Balloon} />
                </div>
                <div className="card__header-text">
                  <h3 className="card__title bg-white/20 px-2 rounded-full">
                    {house.name}
                  </h3>
                  <ItemCountServicesRent initial={itemCount} onAdd={onAdd} />
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

House.propTypes = {
  house: PropTypes.shape({
    image: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default House;
