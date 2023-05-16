import { useContext } from "react";
import { HouseContext } from "../../components/HouseContext";
import { BiReset } from "react-icons/bi";


const ResetButton = () => {
  const {
    originalItems,
    setItems,
    setRents,
    setProducts,
    setCountry,
    setProperty,
    setPrice,
  } = useContext(HouseContext);

  const handleReset = () => {
    setItems(originalItems);
    setRents(originalItems);
    setProducts(originalItems);
    setCountry("Event (any)");
    setProperty("Category (any)");
    setPrice("Price range (any)");
  };

  return (
    <button
      className="transition w-full lg:max-w-[50px] h-14 rounded-lg flex justify-center items-center text-xl hover:animate-ping"
      onClick={handleReset}
    >
      <BiReset />
    </button>
  );
};

export default ResetButton;
