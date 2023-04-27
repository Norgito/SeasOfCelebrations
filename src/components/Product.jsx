import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import Balloon from "../assets/P.png";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const Product = ({ prod }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const onAdd = (quantity) => {
    setItemCount(quantity);
    test.addItem(prod, quantity);
  };

  return (
    <div className="Center px-2 ">
      <ul className="cards px-2 ">
        <li>
          <a className="cardItems shadow-md">
            <p className="price ColorProd">${prod.price}</p>
            <img src={prod.image} className="card__image" />
            <div className="card__overlay">
              <div className="card__header ColorProd">
                <svg className="card__arc3" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="bg-white rounded-full w-[50px] h-[50px]">
                  <img className="card__thumb" src={Balloon} />
                </div>
                <div className="card__header-text">
                  <h3 className="card__title bg-white/20 px-2 rounded-full">
                    {prod.name.toUpperCase()}
                  </h3>
                <ItemCount stock={prod.stock} initial={itemCount} onAdd={onAdd} />

                  {/* <ItemCount stock={prod.stock} initial={itemCount} onAdd={onAdd} /> */}
                  {/* <span className="card__status flex justify-center bg-white/20 px-2 rounded-full">
                    $ {prod.price}
                  </span> */}
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

Product.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default Product;
