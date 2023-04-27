import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCountServicesRent from "./ItemCountServicesRent";
import Balloon from "../assets/P.png";
import "../styles/productCard.css";


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
    <div className="Center px-2">
        <ul className="cards px-2 ">
          <li>
            <a className="cardItems shadow-md">
              <p className="price ColorRent">${rent.price}</p>
              <img src={rent.image} className="card__image" />
              <div className="card__overlay">
                <div className="card__header ColorRent">
                  <svg
                    className="card__arc2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path />
                  </svg>
                  <div className="bg-white rounded-full w-[50px] h-[50px]">
                    <img className="card__thumb" src={Balloon} />
                  </div>
                  <div className="card__header-text">
                    <h3 className="card__title bg-white/20 px-2 rounded-full">
                      {rent.name.toUpperCase()}
                    </h3>

                    <ItemCountServicesRent initial={itemCount} onAdd={onAdd} />
                  </div>
                </div>

                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
  );
};

Rent.propTypes = {
  rent: PropTypes.object.isRequired,
};

export default Rent;
