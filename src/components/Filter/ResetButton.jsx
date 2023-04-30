import { useContext } from "react";
import { HouseContext } from "../../components/HouseContext";
import { BiReset } from "react-icons/bi";

const ResetButton = () => {
  const { originalItems, setItems, setCountry, setProperty, setPrice } =
    useContext(HouseContext);

  const handleReset = () => {
    setItems(originalItems);
    setCountry("Location (any)");
    setProperty("Property type (any)");
    setPrice("Price range (any)");
  };

  return (
    <button
      className="bg-gray-200 hover:bg-primary hover:text-white transition w-full lg:max-w-[50px] h-14 rounded-lg flex justify-center items-center text-xl text-primary"
      onClick={handleReset}
    >
      <BiReset />
    </button>
  );
};

export default ResetButton;
