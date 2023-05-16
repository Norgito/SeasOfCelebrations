import React, { useState, useContext } from "react";
import Sofa from "../../assets/Sofa.png"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext";

const PropertyDropdown = React.memo(() => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left "
      >
        {/* ICON */}
        <img src={ Sofa } alt="house" className="w-[40px]" />

        <div>
          <div className="pl-4 text-[14px] font-normal leading-tight">
            {property}
          </div>
          <div className="pl-4 text-[12px]">Select Category Type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu z-40">
        {properties.map((type, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(type)}
              className="filtro relative z-40"
              as="li"
              key={index}
            >
              {type}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

PropertyDropdown.displayName = 'PropertyDropdown';

export default PropertyDropdown;
