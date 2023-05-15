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
      <div className="rounded-full Center mx-auto gap-3 mt-2 py-1 w-[100px] text-white">
        <button onClick={handleSubtract} className="text-base rounded-full bg-white/30 w-6">
          -
        </button>
        <p className="font-primary text-sm">{count}</p>
        <button onClick={handleAdd} className="text-base rounded-full bg-white/30 w-6">
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
