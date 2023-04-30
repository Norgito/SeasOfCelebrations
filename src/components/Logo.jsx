import { Link } from "react-router-dom";
import logo from "../assets/img/Logo/SeasLOGO.png";

const Logo = () => {
  return (
    <div className="">
      <div className="flex mt-1 pb-3 pl-2 bg-blue-400 rounded-full w-[160px] h-[160px]">
        <div className="Center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
