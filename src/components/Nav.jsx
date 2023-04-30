import CartWidget from "./CartWidget";
import PageLinks from "./PageLinks";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-end pt-4 ">
      <div className="bg-blue-400 -ml-1 rounded-r-full">
        <div className=" flex justify-center items-center gap-6 text-white">
          <PageLinks />
          <Link to="/Cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
