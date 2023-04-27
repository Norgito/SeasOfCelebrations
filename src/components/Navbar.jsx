import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo/SeasLogo.png";
import Waves from "./Waves";
import FacebookIcon from "../utils/Icons/FacebookIcon";
import InstagramIcon from "../utils/Icons/InstagramIcon";
import TiktokIcon from "../utils/Icons/TiktokIcon.jsx";
import WhatsappIcon from "../utils/Icons/WhatsappIcon";
import "../index.css";
import CartWidget from "./CartWidget";

const NavLinks = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-6 bg-white">
        <div className="flex gap-6">
          <InstagramIcon />
          <FacebookIcon />
        </div>
        <div className="">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[250px] m-2" />
          </Link>
        </div>
        <div className="flex gap-6">
          <WhatsappIcon />
          <TiktokIcon />
        </div>
      </div>

      <div className="container2 absolute text-white font-light z-30">
        <ul className="flex justify-center AnimatedBg px-8 py-2 rounded-full mt-10 gap-14">
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/Services">Services</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/Rent">Rent</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/Products">Products</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            className="duration-100 transition-all ease-in-out"
          >
            <Link to="/Contact">Contact</Link>
          </li>
          <Link to="/Cart">
            <CartWidget />
          </Link>
        </ul>
      </div>

      <Waves />
    </>
  );
};

export default NavLinks;
