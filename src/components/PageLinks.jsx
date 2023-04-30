import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo/LogoClean.png";

const PageLinks = () => {
  return (
    <div className="relative Center z-10 ">
      <div className="absolute top-3 w-full text-center">
        <div className="flex justify-center items-center">
          <ul className="bg-white/40 text-white flex justify-center items-center px-8 py-2 gap-20 rounded-l-full filter drop-shadow-md ">
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
          </ul>
          <div className="bg-white/30 shadow-1 shadow-white rounded-full h-[250px] w-[250px] ">
            <img src={Logo} alt="Logo" className="w-[250px] mx-auto mt-8 filter drop-shadow-md shadow-white" />
          </div>
          <ul className="bg-white/40 tracking-tight text-white flex justify-center items-center px-8 py-2 gap-16 rounded-r-full filter drop-shadow-md  ">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageLinks;
