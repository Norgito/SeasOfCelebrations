import { useState } from "react";
import PropTypes from "prop-types";
import CartButton from "./CartButton";
const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) {
      const aux = count + 1;
      setCount(aux);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      const aux = count - 1;
      setCount(aux);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="flex border rounded-full justify-center items-center gap-4 mt-2 text-white">
        <button onClick={handleSubtract} className="text-xs rounded-full">
          -
        </button>
        <p className="font-primary text-sm">{count}</p>
        <button onClick={handleAdd} className="text-xs rounded-full">
          +
        </button>
      </div>

      <div className=" pt-2 flex justify-center items-end" onClick={handleAddToCart}>
        <CartButton />
      </div>
    </>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
