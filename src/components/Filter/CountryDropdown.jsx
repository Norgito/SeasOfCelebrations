import React, { useState, useContext } from "react";
// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import EventIcon from "../../assets/Bal02.png"
// import headless ui
import { Menu } from "@headlessui/react";
// import house context
import { HouseContext } from "../HouseContext";

const CountryDropdown = React.memo(() => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <img src={EventIcon} alt="house" className="w-[50px]" />
        <div>
          <div className="pl-3 text-[14px] font-normal leading-tight">
            {countries.length > 0 ? country : "Select Event Type"}
          </div>
          <div className="pl-3 text-[12px]">Select Event Type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu z-50">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className="filtro"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

CountryDropdown.displayName ="CountryDropdown";

export default CountryDropdown;
