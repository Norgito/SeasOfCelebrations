import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ItemCount from "./ItemCount";
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
    <div className="Center px-2 h-[370px] ">
      <ul className="cards px-2 ">
        <li>
          <a className="cardItems shadow-md">
            <img src={rent.image} className="card__image" />
            <div className="card__overlay">
              <div className="card__header ColorRent">
                <svg className="card__arc3" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className=" text-white shadow-1 border-2  shadow-white Center rounded-full w-[55px] h-[55px]">
                  <p>${rent.price}</p>
                </div>
                <div className="text-center">
                  <h3 className="card__title font-light px-2 rounded-full">
                    {rent.name}
                  </h3>
                  <ItemCount
                    stock={rent.stock}
                    initial={itemCount}
                    onAdd={onAdd}
                  />
                </div>
              </div>
              {/* <p className="card__description">
                Lorem ipsum dolor sit amet consectetur.
              </p> */}
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

Rent.propTypes = {
  rent: PropTypes.shape({
    image: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rent;
