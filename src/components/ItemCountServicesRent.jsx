import { useState } from "react";
import PropTypes from "prop-types";
import CartButton from "./CartButton";
const ItemCountServicesRent = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    onAdd(count);
    console.log(setCount);
  };

  return (
    <>
      <div className="flex justify-center items-end" onClick={handleAddToCart}>
        <CartButton />
      </div>
    </>
  );
};

ItemCountServicesRent.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ItemCountServicesRent;
