import { useLocation } from "react-router-dom";
import WaveTop from "./WaveTop";
import PageLinks from "./PageLinks";
import CartWidget from "./CartWidget";
import MobileHeader from "./MobileHeader";
// import Waves from "./Waves";
// import WhatsappIcon from "../utils/Icons/WhatsappIcon";
// import InstagramIcon from "../utils/Icons/InstagramIcon";

const Header = () => {
  const location = useLocation();

  const isCartPage = location.pathname === "/Cart"; // Update this with the actual URL path for the Cart Page

  return (
    <div>
      <div className="">
        <MobileHeader />
      </div>
      {!isCartPage && (
        <div className="hidden lg:block">
          <CartWidget />
        </div>
      )}
      <PageLinks />
      <WaveTop />
      {/* <Waves /> */}
      {/* <InstagramIcon />
      <WhatsappIcon /> */}
    </div>
  );
};

export default Header;
