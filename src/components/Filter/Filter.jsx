import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "../../components/HouseContext";
import PropTypes from "prop-types";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDrodown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import ResetButton from "./ResetButton";

const Filter = ({ backgroundColor, buttonClass }) => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className={`Filter ${backgroundColor} Center`}>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />

      <button
        onClick={() => handleClick()}
        className={`border text-black transition w-full lg:max-w-[132px] h-14 rounded flex justify-center items-center text-lg ${buttonClass}`}
      >
        <RiSearch2Line />
      </button>
      <ResetButton />
    </div>
  );
};

Filter.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Filter;
