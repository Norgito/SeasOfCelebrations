import { Link } from "react-router-dom";
import logo from "../assets/img/Logo/LogoClean.png";

const Logo = () => {
  return (
    <div className="z-50 bg-white rounded-b-full ml-3">
      <div className="lg:hidden w-[200px] mt-16  ">
          <Link to="/">
            <img src={logo} alt="logo" className="p-3" />
          </Link>

      </div>
    </div>
  );
};

export default Logo;
