import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo/LogoClean.png";

const PageLinks = () => {
  return (
    <div className="relative Center z-10 hidden lg:block  ">
      <div className="absolute top-3 w-full text-center ">
        <div className="flex justify-center items-center uppercase font-bold  ">
          <div className="bg-white/90 rounded-l-full left-0.5 relative">
            <ul className="flex justify-center items-center px-12 py-2 gap-20 filter drop-shadow-md AnimatedBg">
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

          <div className="bg-white/80 shadow-1 Center rounded-full h-[425px] w-[425px] ">
            <img
              src={Logo}
              alt="Logo"
              className=" mx-auto"
            />
          </div>
          <div className="bg-white/90 rounded-r-full relative right-0.5">
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
