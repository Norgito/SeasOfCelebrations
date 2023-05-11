import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "../../components/HouseContext";
import PropTypes from "prop-types";
import CategoryDropdown from "./CategoryDropdown";
import ResetButton from "./ResetButton";

const Filter = ({ backgroundColor }) => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div
      className={`Filter ${backgroundColor}`}
    >
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

Filter.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default Filter;
