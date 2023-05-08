import { Link } from "react-router-dom";
import logo from "../assets/img/Logo/LogoClean.png";

const Logo = () => {
  return (
    <div className="">
      <div className="lg:hidden mt-2 ">
        <div className="">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[160px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
