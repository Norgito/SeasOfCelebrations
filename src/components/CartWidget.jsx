import CartImage from "../assets/CartBalloon1.png";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import 'animate.css';



const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <div className="top-1 right-2 fixed z-50 react-floater-animated">
        <Link to="/Cart">
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Badge
              badgeContent={test.totalProducts()}
              color="secondary"
              className="relative mt-[118px] pl-2"
              ></Badge>
          </div>
          <div className="Center z-10 animate__animated animate__zoomIn animate__slower ">
            <img src={CartImage} alt="Cart Balloon" className="w-[200px]" />
          </div>
        </Link>
    </div>
  );
};

export default CartWidget;
