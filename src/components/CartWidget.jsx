// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartImage from "../assets/CartBalloons.png";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const test = useContext(CartContext);

  return (
      <div className="top-0 right-0 fixed z-20">
        <Link to="/Cart">
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Badge
              badgeContent={test.totalProducts()}
              color="secondary"
              className="relative mt-[100px] pl-2"
            ></Badge>
          </div>
          <div className="Center z-10">
            <img src={CartImage} className="w-[200px] z-10" />
          </div>
        </Link>
      </div>
  );
};

export default CartWidget;
