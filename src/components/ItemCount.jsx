import React, { useState } from "react";

const ItemCount = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleSubtract}
          className="text-[14px] bg-white rounded-full"
        >
          ➖
        </button>
        <button className="font-primary text-xl">{count}</button>
        <button
          onClick={handleAdd}
          className="text-[14px] bg-white rounded-full"
        >
          ➕
        </button>
      </div>
      <div className="flex justify-center items-end">
        <button
          onClick={handleAddToCart}
          style={{ cursor: "pointer" }}
          className="flex justify-center items-center"
        >
          <button className="bg-white rounded-full p-1 mt-2 text-sm ">
            Add to Cart
          </button>
        </button>
      </div>
    </>
  );
};

export default ItemCount;
