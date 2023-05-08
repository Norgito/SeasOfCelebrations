// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GiShoppingCart } from "react-icons/gi";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <div className=" z-50 ">
      <Link to="/Cart">
        <div className="absolute ml-9 -mt-2  ">
          <Badge
            badgeContent={test.totalProducts()}
            color="secondary"
            className=""
          ></Badge>
        </div>
        <div className="text-[40px] text-sky-600">
          <GiShoppingCart />
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;