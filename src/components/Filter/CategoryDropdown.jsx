import { useState, useContext } from "react";
import Cas from "../../assets/cas.svg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext";

const CategoryDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left "
      >
        {/* ICON */}
        <img src={Cas} alt="house" className="w-[30px]" />

        <div>
          <div className="pl-4 text-[14px] font-normal leading-tight">
            {property}
          </div>
          <div className="pl-4 text-[12px]">Select Property Type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu z-40">
        {properties.map((category, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(category)}
              className="filter relative z-40"
              as="li"
              key={index}
            >
              {category}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CategoryDropdown;
