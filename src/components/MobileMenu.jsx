import { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";


import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false);
    setOpen(false);
  };

  return (
    <div className="flex lg:hidden items-center mb-1 justify-center ">
      <div className="absolute">
      <button
        className="text-primary items-center focus:outline-none"
        onClick={handleMenuClick}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          rounded
          duration={1}
          onToggle={(toggled) => {
            setShowMenu(toggled);
          }}
        />
      </button>
      </div>
      
      {showMenu && (
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          className="absolute top-0 left-0 h-screen w-3/4 AnimatedBg2 z-50 px-4 flex flex-col gap-6"
        >
          <ul className="h-full w-full text-center pt-20 font-light text-lg text-white">
            <li
              className={
                location.pathname === "/" ? "underline underline-offset-8" : ""
              }
            >
              <Link to="/" onClick={handleLinkClick}>
                <p className="py-3">
                  HOME
                </p>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/Services"
                  ? "underline underline-offset-8"
                  : ""
              }
            >
              <Link to="/Services" onClick={handleLinkClick}>
                <p className="py-3">
                  SERVICES
                </p>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/Rent"
                  ? "underline underline-offset-8"
                  : ""
              }
            >
              <Link to="/Rent" onClick={handleLinkClick}>
                <p className="py-3">
                  RENT
                </p>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/Products"
                  ? "underline underline-offset-8"
                  : ""
              }
            >
              <Link to="/Products" onClick={handleLinkClick}>
                <p className="py-3">
                  PRODUCTS
                </p>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/Gallery"
                  ? "underline underline-offset-8"
                  : ""
              }
            >
              <Link to="/Gallery" onClick={handleLinkClick}>
                <p className="py-3">
                  GALLERY
                </p>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/contact"
                  ? "underline underline-offset-8"
                  : ""
              }
            >
              <Link to="/contact" onClick={handleLinkClick}>
                <p className="py-3 ">
                  CONTACT
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
