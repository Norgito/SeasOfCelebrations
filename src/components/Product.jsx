import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="Center px-2 h-[370px]"
    >
      <ul className="cards px-2 ">
        <li>
          <a className="cardItems shadow-md">
            <img src={prod.image} alt="Product Balloon" className="card__image" />
            <div className="card__overlay">
              <div className="card__header ColorProd">
                <svg className="card__arc3" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className=" text-white shadow-1 border-2  shadow-white Center rounded-full w-[55px] h-[55px]">
                  <p>${prod.price}</p>
                </div>
                <div className="text-center">
                  <h3 className="card__title font-light px-2 rounded-full">
                    {prod.name}
                  </h3>
                  <ItemCount
                    stock={prod.stock}
                    initial={itemCount}
                    onAdd={onAdd}
                  />
                </div>
              </div>
              {/* 
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur.
              </p> */}
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
