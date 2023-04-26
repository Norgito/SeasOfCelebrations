import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);
  
  return (
    <Badge
      badgeContent={test.totalProducts()}
      style={{ marginRight: "20px" }}
      color="secondary"
    >
      <ShoppingCartIcon color="white" />
    </Badge>
  );
};
export default CartWidget;
