import  { useState } from "react";
import PropTypes from "prop-types";
const ItemCountServicesRent = ({  onAdd }) => {
  const [count, setCount] = useState(1);

  

  const handleAddToCart = () => {
    onAdd(count);
    console.log(setCount);
  };

  return (
    <>
     
      <div className="flex justify-center items-end">
        <button
          onClick={handleAddToCart}
          style={{ cursor: "pointer" }}
          className="flex justify-center items-center"
        >
          <p className="bg-white/20 text-white rounded-full p-1 mt-3 text-xs ">
            Add to Cart
          </p>
        </button>
      </div>
    </>
  );
};

ItemCountServicesRent.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ItemCountServicesRent;
