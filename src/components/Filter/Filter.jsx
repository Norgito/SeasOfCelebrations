import { useContext } from "react";
// import components
// import CountryDropdown from "./CountryDropdown";
// import PropertyDropdown from "./PropertyDropdown";
// import PriceRangeDropdown from "./PriceRangeDropdown";
import ResetButton from "./ResetButton";
// import icons
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "../../components/HouseContext";
import CategoryDropdown from "./CategoryDropdown";

const Filter = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center lg:gap-x-3 lg:shadow-1 bg-white  font-light lg:backdrop-blur items-center gap-2 relative lg:z-50 rounded-full m-4">
      <CategoryDropdown />
      <CategoryDropdown />
      <CategoryDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-gray-200 hover:bg-primary hover:text-white transition w-full lg:max-w-[132px] h-14 rounded flex justify-center items-center text-primary text-lg"
      >
        <RiSearch2Line />
      </button>
      <ResetButton />
    </div>
  );
};

export default Filter;
