import React, { useState } from "react";

const ItemCountServicesRent = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <>
     
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

export default ItemCountServicesRent;
