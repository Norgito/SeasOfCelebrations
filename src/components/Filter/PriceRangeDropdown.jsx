import React, { useState, useContext, useCallback } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Price from "../../assets/Price01.png";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext";

const PriceRangeDropdown = React.memo(() => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "0 - 100",
    },
    {
      value: "100 - 250",
    },
    {
      value: "250 - 500",
    },
    {
      value: "500 - 1000",
    },
  ];

  const handleItemClick = useCallback(
    (price) => {
      setPrice(price.value);
      setIsOpen(false);
    },
    [setPrice]
  );

  const dropdownIconClass = "dropdown-icon-secondary";

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        {/* ICON */}
        <img src={Price} alt="house" className="w-[45px] mr-5" />

        <div>
          <div className=" text-[14px] font-normal leading-tight">{price}</div>
          <div className=" text-[12px]">Select Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className={dropdownIconClass} />
        ) : (
          <RiArrowDownSLine className={dropdownIconClass} />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu z-50">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => handleItemClick(price)}
              className="filtro"
              as="li"
              key={index}
            >
              USD {price.value.toLocaleString()}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

PriceRangeDropdown.displayName = "PriceRangeDropdown";

export default PriceRangeDropdown;
