import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo/LogoClean.png";

const PageLinks = () => {
  return (
    <div className="relative Center z-10  ">
      <div className="absolute top-3 w-full text-center ">
        <div className="flex justify-center items-center uppercase font-bold ">
          <div className="bg-white/90 rounded-l-full">
            <ul className="flex justify-center items-center px-8 py-2 gap-20 filter drop-shadow-md AnimatedBg">
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
          </div>

          <div className="bg-white/90 shadow-1 shadow-white rounded-full h-[250px] w-[250px] ">
            <img
              src={Logo}
              alt="Logo"
              className="w-[250px] mx-auto mt-8 filter drop-shadow-md shadow-white"
            />
          </div>
          <div className="bg-white/90 rounded-r-full">
            <ul className=" tracking-tight flex justify-center items-center px-8 py-2 gap-16  filter drop-shadow-md  AnimatedBg">
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
    </div>
  );
};

export default PageLinks;
